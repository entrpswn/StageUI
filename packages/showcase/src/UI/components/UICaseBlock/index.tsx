import * as CoreScope from '@flow-ui/core'
import { Block, Button, Divider, Flexbox, H1, Icon, Menu, T1, T3, TextField, useFlow } from '@flow-ui/core'
import MenuTypes from '@flow-ui/core/control/Menu/types'
import * as LabScope from '@flow-ui/lab'
import React, { Fragment, useLayoutEffect, useState } from 'react'
import ReactToJsxString from 'react-element-to-jsx-string'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'
import { GetPropsForType } from '../UICaseDocumentation'
import theme from './theme'

interface UICaseBlockProps {
    title: string
    subtitle?: string
    scope?: { [key: string]: any }
    children: any
    props?: { [key: string]: [any, any] }
    interfaces?: string[]
    filter?: string[]
    customProps?: {
        name: string
        values: string[]
    }[]
    height?: string
    minHeight?: string
    maxHeight?: string
    paths?: string[]
}

export const fakeValue = (value: string): any => {
    const f = function fakeValue() { }
    f.toString = () => value
    return f
}

const UICaseBlock = (props: UICaseBlockProps) => {
    const [displayProps, setDisplayProps] = useState<MenuTypes.Value>("0");
    const code = ReactToJsxString(props.children, {
        displayName: (e) => {
            if (e.type.displayName) {
                return e.type.displayName;
            }
            if (typeof e.type === "object") {
                return e.type.render.name;
            }
            if (typeof e.type === "function") {
                return e.type.name;
            }
            if (typeof e.type === 'string') {
                return e.type;
            }
        },
        useBooleanShorthandSyntax: true,
        // maxInlineAttributesLineLength: 100,
        // useFragmentShortSyntax: true,
        showFunctions: true,

        functionValue: (e) => {
            if (e.name === "fakeValue") {
                return e.toString()
            }
            return e.toString()
                .replace(/(\n)/g, "")
                .replace(/( )/gm, "")
                .replace(/(function\w+\()/g, "(")
                .replace(/(\){return)/g, ") => ")
                .replace(/(;})/g, "")
        }
    })

    let hasProps: boolean = false;
    const flow = useFlow()

    const savedGridState = localStorage.getItem('case_grid') || ''
    const [grid, setGrid] = useState(savedGridState.length !== 5)

    const dark = flow.theme.name.toUpperCase().match("DARK");
    const gridColor1 = dark ? "#333333" : "#f4f4f4";
    const gridColor2 = dark ? "#222222" : "#ffffff";
    const gridBackground = `
        linear-gradient(45deg, ${gridColor1} 25%, transparent 25%),
        linear-gradient(-45deg, ${gridColor1} 25%, transparent 25%), 
        linear-gradient(45deg, transparent 75%, ${gridColor1} 75%), 
        linear-gradient(-45deg, transparent 75%, ${gridColor1} 75%)
    `;

    useLayoutEffect(() => {
        try {
            Object.keys(props.props!).map(typeName => {
                const state = JSON.parse(
                    localStorage.getItem('case_props_' + typeName)!
                )
                if (state) {
                    props.props![typeName][1](state)
                }
            })
        } catch (error) { }
    }, [])

    return (
        <LiveProvider
            theme={theme}
            language={"jsx"}
            scope={{
                ...(CoreScope || {}),
                ...(LabScope || {}),
                ...(props.scope || {})
            }} code={code}>
            <Flexbox pr='4rem' pl='4rem' pt='2rem' pb='1rem' column alignItems="flex-start">
                <H1 css={{ userSelect: "none", fontSize: "2.5rem" }} weight={800}>{props.title}</H1>
                <T1 color={c => c.light.css()} css={{ userSelect: "none" }} pt={"0.25rem"} pb={"0.5rem"}>{props.subtitle}</T1>
                <Flexbox w={"100%"} alignItems="flex-end">
                    {typeof props.paths !== 'undefined' && (
                        <Block flex={1}>
                            {props.paths.map((path, index) => (
                                <Block
                                    key={index}
                                    mb={"0.5rem"}
                                    css={{
                                        color: flow.theme.color.primary.css(),
                                        ...flow.theme.typography.text[2]
                                    }}
                                    children={path}
                                />
                            ))}
                        </Block>
                    )}
                    <Flexbox>
                        {props.props && (
                            <Menu
                                decoration="color"
                                defaultValue={displayProps}
                                onChange={setDisplayProps}
                                items={[
                                    {
                                        value: "0",
                                        content: <Icon css={{ fontSize: "1.5rem" }} type={t => t.outline.code} />
                                    },
                                    {
                                        value: "1",
                                        content: <Icon css={{ fontSize: "1.5rem" }} type={t => t.outline.cube} />
                                    }
                                ]}
                            />
                        )}
                        <Icon
                            p="0.75rem"
                            pr="0rem"
                            size="1.25rem"
                            color={grid ? c => c.primary.css() : c => c.onSurface.css()}
                            onClick={() => {
                                localStorage.setItem('case_grid', !grid ? 'true' : 'false')
                                setGrid(!grid)
                            }}
                            type={t => t.outline.grid}
                        />
                    </Flexbox>
                </Flexbox>
                <Block css={{
                    width: "100%",
                    overflow: "hidden",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: flow.theme.color.lightest.css(),
                    borderRadius: flow.theme.radius.default
                }}>
                    <Flexbox style={{
                        height: props.height,
                        minHeight: props.minHeight,
                        maxHeight: props.maxHeight
                    }}>
                        <Block background={"#222222"} flex={1}>
                            <Block flex={1}>
                                {displayProps === "0" && (
                                    <LiveEditor css={{ " textarea": { outline: "none" } }} />
                                )}

                                {displayProps === "1" && props.props && (
                                    <Block p={"1rem"}>
                                        {
                                            Object.keys(props.props).map(typeName => {
                                                const types = GetPropsForType(typeName, props.interfaces || ["Props"])

                                                if (!types) {
                                                    return null
                                                }
                                                if (props.customProps) {
                                                    for (let prop of props.customProps) {
                                                        types.push({
                                                            //@ts-ignore
                                                            id: prop.name,
                                                            name: prop.name,
                                                            values: prop.values,
                                                        })
                                                    }
                                                }

                                                return types!.map(type => {
                                                    let needDisplay;
                                                    if (type.values) {
                                                        if (props.filter && props.filter.findIndex(t => t === type.name) >= 0) {
                                                            return null
                                                        }
                                                        const row = type.values.map((value: any) => {
                                                            needDisplay = false;
                                                            if (value === "true") value = true
                                                            if (value === "false") value = false
                                                            if (value === "any" || value === "number" || value.toString().match(/\[/)) {
                                                                return null
                                                            }

                                                            if (type.type === "reference" || type.type === "reflection") {
                                                                return null
                                                            }
                                                            needDisplay = true
                                                            hasProps = true

                                                            const [propsState, setPropsState] = props.props![typeName];

                                                            if (value === "string" && type.values.length === 1) {

                                                                return (
                                                                    <TextField
                                                                        key={value}
                                                                        size="xsmall"
                                                                        decoration="none"
                                                                        value={propsState[type.name] || ""}
                                                                        placeholder="String"
                                                                        css={{
                                                                            color: "#ffffff"
                                                                        }}
                                                                        onChange={(e) => {
                                                                            let value = e.target.value
                                                                            if (!value && type.tags && type.tags.default) {
                                                                                value = type.tags.default
                                                                            }
                                                                            let state = {
                                                                                ...propsState,
                                                                                [type.name]: value
                                                                            }
                                                                            if (!value) {
                                                                                state = {
                                                                                    ...propsState,
                                                                                }
                                                                            }
                                                                            setPropsState(state)
                                                                            localStorage.setItem('case_props_' + typeName, JSON.stringify(state))
                                                                        }}
                                                                    />
                                                                )
                                                            }
                                                            return (
                                                                <Button
                                                                    key={value}
                                                                    mt={"0.25rem"}
                                                                    mb={"0.25rem"}
                                                                    mr={"0.25rem"}
                                                                    size="small"
                                                                    decoration={propsState[type.name] === value ? "filled" : "text"}
                                                                    onClick={() => {

                                                                        let state;

                                                                        if (propsState[type.name] === value) {
                                                                            delete propsState[type.name]
                                                                            state = {
                                                                                ...propsState,
                                                                            }
                                                                            setPropsState(state)

                                                                        } else {
                                                                            state = {
                                                                                ...propsState,
                                                                                [type.name]: value
                                                                            }
                                                                            setPropsState(state)
                                                                        }
                                                                        localStorage.setItem('case_props_' + typeName, JSON.stringify(state))
                                                                    }}
                                                                    children={value.toString()}
                                                                />
                                                            );
                                                        })
                                                        if (!needDisplay) {
                                                            return null
                                                        }
                                                        return (
                                                            <Flexbox key={type.id} wrap="wrap">
                                                                <Block
                                                                    mt={"0.25rem"}
                                                                    mb={"0.25rem"}
                                                                    mr={"0.5rem"}
                                                                    css={{ color: "#fff", fontWeight: 500 }}
                                                                    children={type.name + ":"}
                                                                />
                                                                {row}
                                                            </Flexbox>
                                                        )
                                                    }
                                                    return null
                                                })
                                            })
                                        }
                                        {hasProps ? (
                                            <Fragment>
                                                <Divider color="#333" mb="0.75rem" />
                                                <T3 color="#bbb">This configurator may not display all properties of this component. Please check properties documentation below for more information.</T3>
                                            </Fragment>
                                        ) : (
                                                <T3 color="#bbb">No properties presents for this case.</T3>
                                            )}
                                    </Block>
                                )}
                            </Block>
                            {displayProps === "0" && (
                                <Block>
                                    <LiveError style={{
                                        margin: "10px",
                                        borderRadius: "4px",
                                        padding: "10px",
                                        fontSize: "12px",
                                        lineHeight: "12px",
                                        backgroundColor: "red",
                                        color: "#fff"
                                    }} />
                                </Block>
                            )}
                        </Block>
                        <Block position="relative" css={{ flex: 1, minHeight: "10rem" }}>
                            <Block
                                css={{
                                    padding: "2rem",
                                    position: "absolute",
                                    left: 0, right: 0, bottom: 0, top: 0,
                                    overflow: "auto",
                                    backgroundColor: gridColor2,
                                    backgroundImage: grid ? gridBackground : 'none',
                                    backgroundSize: "2rem 2rem",
                                    backgroundPosition: "0 0, 0 1rem, 1rem -1rem, -1rem 0px"
                                }}
                                children={
                                    <LivePreview style={{ height: "100%" }} />
                                } />
                        </Block>
                    </Flexbox>
                </Block>
            </Flexbox>
        </LiveProvider >
    )
}

export default UICaseBlock