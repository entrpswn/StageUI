import { css } from "@emotion/core";
import useFlow from "../../misc/hooks/useFlow";
import useStyleProps from '../../misc/hooks/useStyleProps';
import TreeTypes from "./types";
import variant from "../../misc/utils/variant";

export default (props: TreeTypes.Props, lvl: number, isOpen: boolean, hasTreeChilds: boolean) => {
    const { decoration = 'drop' } = props;
    const styleProps = useStyleProps(props);
    const { theme } = useFlow();
    const overrides = theme.overrides.block;

    const getIndent = () => {
        if (lvl > 0) {
            if (props.indent === true || (props.indent !== false && decoration === 'drop')) {
                return {
                    paddingLeft: "1rem"
                }
            }
        }
        return {}
    }

    return {
        container: css(
            styleProps.all,
            overrides && overrides.containter,
            getIndent(),
            variant(decoration, {
                inline: {
                    display: "flex",
                    alignItems: "flex-start",
                }
            }),
            props.animated && {
                transition: "all .15s"
            }
        ),
        label: css(
            {
                cursor: "pointer",
                userSelect: "none",
            },
            props.alwaysOpen && {
                cursor: "default",
            }
        ),
        icon: css(
            {
                display: "none"
            },
            variant(decoration, {
                drop: {
                    display: "inline-block",
                    marginRight: "0.25rem",
                    ...((props.alwaysOpen || hasTreeChilds === false) && {
                        cursor: "not-allowed"
                    })
                }
            }),
        ),
        child: css(
            {
                display: isOpen ? "block" : "none"
            }
        )
    }
}