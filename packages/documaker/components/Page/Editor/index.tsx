import { Block, Flexbox, Text, useTheme } from '@flow-ui/core'
import { Collapse, Expand, Grid } from '@flow-ui/core/icons'
import { PageType } from '@flow-ui/documaker/core'
import monaco from '@flow-ui/documaker/monaco'
import { Split } from '@flow-ui/lab'
import chroma from 'chroma-js'
import React, { Fragment, useEffect, useState } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Preview from './Preview'

interface EditorProps {
    cases: Exclude<PageType['cases'], undefined>
}

const MonacoEditor = React.memo((props: { setCode: (code: string) => void }) => {
    useEffect(() => {
        /**
         * Creates monaco editor
         */
        monaco.create({
            id: 'documaker-code-editor',
            code: '',
            setCode: props.setCode,
        })
    }, [])
    return (
        <Block
            id="documaker-code-editor"
            h="100%"
            w="100%"
            css={{
                boxShadow: 'none !important',
            }}
        />
    )
}, () => true)

const Editor = (props: EditorProps) => {

    const { cases } = props
    const [currentCase, setCurrentCase] = useState<number>(0)
    const [code, setCode] = useState<string>(cases[0].code)
    const [grid, setGrid] = useState(
        localStorage.getItem('case_grid') === 'true'
    )
    const isMobile = () => (
        document.body.offsetWidth < window.breakpoints[1]
    )
    let directionVar: 'row' | 'column' = isMobile() ? 'column' : 'row'
    const [fullscreen, setFullscreen] = useState(false)
    const theme = useTheme()
    const [direction, setDirection] = useState(directionVar)

    useEffect(() => {
        /**
         * Handle mobile
         */
        const handleDirection = () => {
            const t = isMobile()

            if (!t && directionVar !== 'row') {
                directionVar = 'row'
                setDirection('row')
            }
            if (t && directionVar !== 'column') {
                directionVar = 'column'
                setDirection('column')
            }
        }

        window.addEventListener('resize', handleDirection)

        return () => {
            window.removeEventListener('resize', handleDirection)
            monaco.remove()
        }
    }, [])

    useEffect(() => {
        monaco.setTheme(
            chroma.contrast('#fff', theme.color.background) > 3
                ? 'vs-dark'
                : 'vs'
        )
    }, [theme])

    useEffect(() => {
        setCurrentCase(0)
        monaco.setCode(cases[0].code)
    }, [cases])

    useEffect(() => {
        monaco.setCode(cases[currentCase].code)
    }, [currentCase])

    useEffect(() => {
        document.body.style.overflow = fullscreen
            ? 'hidden'
            : 'auto'
    }, [fullscreen])

    return (
        <Fragment>
            <Flexbox alignItems="center">
                {cases.length > 1 && cases.map((c, caseIndex) => (
                    <Text
                        key={caseIndex}
                        m="1rem"
                        ml="0.5rem"
                        weight={600}
                        color={c => caseIndex === currentCase
                            ? c.primary.css()
                            : c.onBackground.css()}
                        children={c.label}
                        onClick={() => setCurrentCase(caseIndex)}
                        css={{ cursor: 'pointer' }}
                    />
                ))}
                <Block flex={1} />
                <Grid
                    p="0.75rem"
                    pr="0.5rem"
                    size="1.25rem"
                    color={c => grid
                        ? c.primary.css()
                        : c.onSurface.css()
                    }
                    onClick={() => {
                        localStorage.setItem(
                            'case_grid',
                            !grid
                                ? 'true'
                                : 'false'
                        )
                        setGrid(!grid)
                    }}
                />
                <Expand
                    p="0.75rem"
                    pr="0.5rem"
                    size="1.25rem"
                    color={c => c.onSurface.css()}
                    onClick={() => setFullscreen(true)}
                />
            </Flexbox>
            <Block
                mb="2rem"
                h="24rem"
                borderColor={c => c.lightest.css()}
                borderWidth="1px"
                borderStyle="solid"
                borderRadius={theme.radius.default}
                backgroundColor={c => c.background.css()}
                css={[
                    {
                        overflow: 'hidden'
                    },
                    fullscreen && {
                        position: 'fixed',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        margin: 0,
                        borderRadius: 0,
                        borderWidth: '0px',
                        height: '100%',
                        zIndex: 10,
                    }
                ]}>
                <Split direction={direction}>
                    <Block h="100%" flex={1} overflow="hidden">
                        <ErrorBoundary>
                            <Preview
                                theme={theme}
                                code={code}
                                grid={grid}
                                fullscreen={fullscreen}
                                setFullscreen={setFullscreen}
                            />
                        </ErrorBoundary>
                        {fullscreen && (
                            <Collapse
                                shape="oval"
                                background={c => c.lightest.css()}
                                css={{
                                    position: 'fixed',
                                    top: '1rem',
                                    right: '1rem',
                                    zIndex: 100,
                                }}
                                onClick={() => setFullscreen(false)}
                            />
                        )}
                    </Block>
                    <MonacoEditor setCode={setCode} />
                </Split>
            </Block>
        </Fragment>
    )
}
export default Editor
// export default React.memo(Editor, () => {
//     return true
// })