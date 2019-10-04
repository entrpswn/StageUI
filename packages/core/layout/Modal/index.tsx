import ReactDOM from 'react-dom';
import React, { useRef, FC, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import ModalTypes from './types';
import ModalPortal from './ModalPortal';
import ModalOverlay from './ModalOverlay';
import ModalWindow from './ModalWindow';
import createStyles from './styles';
import useContainer from '../../misc/hooks/useContainer';

export interface ModalRef {
    open: Function,
    close: Function
}

const Modal: React.RefForwardingComponent<ModalRef, ModalTypes.Props> = (props, ref) => {

    const { hideHeader, fullSize } = props;
    const { attributes } = useContainer(props);
    const styles = createStyles(props);

    const overlayRef = useRef(null);
    const windowRef = useRef(null);

    const [active, setActive] = useState(false);
    const [visible, setVisible] = useState(false);
    const [customContent, setCustomContent] = useState(null);
    const [center, setCenter] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [subtitle, setSubtitle] = useState(props.subtitle);

    useEffect(() => {
        setTitle(props.title);
        setSubtitle(props.subtitle);
        window.addEventListener('resize', setVetricalCenter);
        return () => {
            window.removeEventListener('resize', setVetricalCenter);
        };
    }, [props.title, props.subtitle])

    useImperativeHandle(ref, () => ({
        open,
        close,
        title,
        setTitle,
        subtitle,
        setSubtitle,
        center,
        setCenter,
        customContent,
        setCustomContent,
        overlay: overlayRef.current,
        window: windowRef.current
    }))

    function open(customContent?: React.Component | any) {
        if (customContent) {
            setCustomContent(customContent)
        }

        props.onOpen && props.onOpen();

        setActive(true);

        setTimeout(() => {
            setVetricalCenter();
            setVisible(true);

            props.didOpen && props.didOpen();
        });
    }

    function close(didClose?: () => void) {
        setVisible(false);

        setTimeout(() => {
            setActive(false);
            props.didClose && props.didClose();
            didClose && didClose();
        }, 500);

        props.onClose && props.onClose();
    }


    function setVetricalCenter() {
        const overlay = ReactDOM.findDOMNode(overlayRef.current) as any;
        const modal = ReactDOM.findDOMNode(windowRef.current) as any;

        if (!overlay || !modal) return;

        const modalWidth = modal.offsetWidth;
        const modalHeight = modal.offsetHeight;
        const overlayHeight = overlay.offsetHeight;

        if (modalHeight > overlayHeight || modalWidth >= window.innerWidth) {
            if (center) return;
            setCenter(false);
        } else {
            if (center) return;
            setCenter(true);
        }
    }


    if (!active) {
        return null;
    }

    return (
        <ModalPortal>
            <ModalOverlay ref={overlayRef} visible={visible} center={center} fullSize={fullSize} styles={styles}>
                <ModalWindow
                    styles={styles}
                    ref={windowRef}
                    visible={visible}
                    center={center}
                    title={title}
                    subtitle={subtitle}
                    fullSize={fullSize}
                    hideHeader={hideHeader}
                    onClosePressed={() => close()}
                    children={
                        customContent !== null
                            ? customContent
                            : props.children
                    }
                    containerAttr={attributes}
                />
            </ModalOverlay>
        </ModalPortal>
    )
}

export default forwardRef(Modal);