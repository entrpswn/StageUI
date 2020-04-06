import SystemTypes from '@stage-ui/system/types'

declare namespace NotificationTypes {
    interface Props extends SystemTypes.AllProps<HTMLDivElement, Styles> {
        children?: React.ReactNode
    }

    interface NotifyOptions {
        /**
         * Title of notification
         */
        title: string
        /**
         * Message of notification
         */
        message: string
        /**
         * Time in milliseconds after which the notification will be removed
         */
        timeout?: number
        /**
         * Fired when user click on notification
         */
        onClick?: (e: any) => void
        /**
         * if custom content filled then title and message will be ignored
         */
        customContent?: React.ReactElement
    }

    interface Styles {
        /**
         * Root element
         */
        container: void
    }
}

export default NotificationTypes