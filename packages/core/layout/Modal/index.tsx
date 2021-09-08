import { useSystem } from '@stage-ui/system'
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import ModalOverlay from './ModalOverlay'
import ModalPortal from './ModalPortal'
import ModalWindow from './ModalWindow'
import styles from './styles'
import Types from './types'

const Modal: ForwardRefRenderFunction<Types.Ref, Types.Props> = (props, ref) => {
  const { hideHeader, overlayClose = true, opened, decoration = 'modal' } = props

  const { classes, attributes, events } = useSystem('Modal', props, styles)

  const overlayRef = useRef<HTMLDivElement>(null)
  const windowRef = useRef<HTMLDivElement>(null)

  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [customRender, setCustomRender] = useState<React.ReactElement | null>(null)
  const [title, setTitle] = useState(props.title)
  const [subtitle, setSubtitle] = useState(props.subtitle)

  useEffect(() => {
    setTitle(props.title)
    setSubtitle(props.subtitle)
  }, [props.title, props.subtitle])

  useEffect(() => {
    if (opened === true) open()
    if (opened === false) close()
  }, [opened])

  function open(customRender?: React.ReactElement | null) {
    document.body.style.overflow = 'hidden'

    if (customRender) {
      setCustomRender(customRender)
    }

    props.onOpen && props.onOpen()

    setActive(true)
    setTimeout(() => {
      setVisible(true)
      props.didOpen && props.didOpen()
    }, 50)
  }

  function close(didClose?: () => void) {
    document.body.style.overflow = ''

    setVisible(false)

    setTimeout(() => {
      setActive(false)
      props.didClose && props.didClose()
      didClose && didClose()
    }, 300)

    props.onClose && props.onClose()
  }

  useImperativeHandle(ref, () => ({
    open,
    close,
    title,
    setTitle,
    subtitle,
    setSubtitle,
    render: customRender,
    setRender: setCustomRender,
    overlay: overlayRef.current as HTMLDivElement,
    window: windowRef.current as HTMLDivElement,
  }))

  if (!active) {
    return null
  }

  const styleProps = {
    visible,
    decoration,
  }

  const getStyles = () => ({ classes, state: styleProps })

  return (
    <ModalPortal>
      <ModalOverlay ref={overlayRef} getStyles={getStyles}>
        <div
          data-wrapper
          css={classes.wrapper(styleProps)}
          onClick={(e) => {
            if ((e.target as HTMLDivElement).dataset.wrapper) {
              if (overlayClose) close()
            }
          }}
        >
          <ModalWindow
            getStyles={getStyles}
            ref={windowRef}
            title={title}
            subtitle={subtitle}
            hideHeader={hideHeader}
            onClosePressed={() => close()}
            containerAttr={attributes}
            containerEvents={events}
          >
            {customRender !== null ? customRender : props.children}
          </ModalWindow>
        </div>
      </ModalOverlay>
    </ModalPortal>
  )
}

export default forwardRef(Modal)
