/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m13.2317 42.1327c1.696.4294 3.5333.728 5.4026.728 2.88 0 5.8214-.7013 8.3654-2.6933 4.576-3.5787 4.576-8.1573 4.576-11.8373 0-2.376 0-4.4294.992-6.2507.5333-.976 1.6693-1.6533 2.984-2.44.8053-.48 1.6373-.9787 2.44-1.6053 1.7146-1.3414 2.9893-3.0694 3.7786-4.976 3.7334 1.9306 6.8267 4.9253 8.8667 8.592-3.8053.5306-9.2133 1.776-10.3013 6.7573-.288 1.3173-.3334 2.5573-.3707 3.6533-.0533 1.5547-.0987 2.784-.7653 3.9067l-.264.448c-1.7254 2.888-3.6774 6.1653-1.0454 10.744.3174.5547.672 1.088 1.0214 1.616.9173 1.3787 1.368 2.1387 1.3706 2.8827-2.5493 1.08-5.3466 1.6746-8.2826 1.6746-8.0987 0-15.1574-4.536-18.768-11.2zm18.768-36.79969c-14.704 0-26.66669 11.96529-26.66669 26.66669 0 14.704 11.96269 26.6666 26.66669 26.6666s26.6666-11.9626 26.6666-26.6666c0-14.7014-11.9626-26.66669-26.6666-26.66669z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m45.0366 48.849c-.4587-1.1546-1.1093-2.1626-1.68-3.024-.288-.432-.584-.872-.8427-1.3253-1.0373-1.8027-.68-2.5333 1.0027-5.352l.272-.4613c1.3627-2.296 1.4373-4.4987 1.5067-6.44.032-.9547.064-1.8534.248-2.6987.4293-1.952 4.5546-2.472 7.112-2.7787.4293 1.6774.6773 3.424.6773 5.232 0 6.8507-3.2587 12.9414-8.296 16.848zm-31.8054-6.7175c1.696.432 3.5334.7306 5.4027.7306 2.88 0 5.8213-.704 8.3653-2.696 4.576-3.5786 4.576-8.1546 4.576-11.8346 0-2.3787 0-4.4294.992-6.2507.5333-.976 1.6693-1.6533 2.984-2.44.8053-.4827 1.64-.9787 2.44-1.608 1.7147-1.3413 2.9893-3.0667 3.7787-4.976 3.7333 1.9333 6.8266 4.928 8.8693 8.5947-3.808.528-9.2133 1.776-10.304 6.7546-.288 1.3174-.3333 2.5574-.368 3.6534-.056 1.5546-.0987 2.784-.7653 3.9093l-.2667.448c-1.7253 2.888-3.6773 6.1627-1.0453 10.7413.3173.5547.672 1.088 1.0213 1.6187.9173 1.376 1.368 2.136 1.3707 2.8827-2.5467 1.0773-5.3467 1.6746-8.2827 1.6746-8.0986 0-15.1546-4.5386-18.768-11.2026zm18.7681-31.4635c1.6426 0 3.2293.2026 4.7653.5546-.4507.992-1.1467 1.896-2.064 2.6134-.5813.4586-1.2347.84-1.8827 1.2266-1.736 1.0347-3.7013 2.208-4.9333 4.464-1.6427 3.0134-1.6427 6.0907-1.6427 8.8054 0 3.6133-.1173 5.7493-2.528 7.6347-3.6506 2.8613-9.2373 1.2639-12.6933-.1894-.2187-1.2293-.3547-2.488-.3547-3.776 0-11.7627 9.5707-21.3333 21.3334-21.3333zm-.0001-5.33353c-14.704 0-26.66665 11.96263-26.66665 26.66663 0 14.7014 11.96265 26.6667 26.66665 26.6667s26.6667-11.9653 26.6667-26.6667c0-14.704-11.9627-26.66663-26.6667-26.66663z" fillRule="evenodd"/>,
    })
))