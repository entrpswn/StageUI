/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m50.6709 10.7346c1.4667.008 2.6533 1.1974 2.6533 2.664l.008 13.2667c.0027 1.472-1.192 2.6693-2.664 2.6693h-.0026c-1.472 0-2.664-1.1946-2.6667-2.664l-.0053-6.8933-8.776 8.776c-.52.52-1.2027.7813-1.8854.7813-.68 0-1.3626-.2613-1.8853-.7813-1.04-1.0427-1.04-2.7307 0-3.7707l8.7467-8.7466-6.872-.0347c-1.4747-.008-2.664-1.2107-2.656-2.68s1.2026-2.6533 2.6666-2.6533h.0134zm-25.8897 24.7141c1.0427-1.0427 2.728-1.0427 3.7707 0 1.0426 1.0426 1.0426 2.728 0 3.7706l-8.7787 8.7787 6.8933.0027c1.4747 0 2.6667 1.1946 2.6667 2.6693-.0027 1.472-1.1947 2.664-2.6667 2.664h-.0026l-13.2667-.008c-1.4667 0-2.656-1.1867-2.664-2.6533l-.0667-13.3254c-.008-1.472 1.1814-2.672 2.6534-2.68h.0133c1.4667 0 2.6587 1.184 2.6667 2.6534l.0346 6.8746z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m50.671 10.7346c1.4666.008 2.6533 1.1974 2.6533 2.664l.008 13.2667c.0027 1.472-1.192 2.6693-2.664 2.6693h-.0027c-1.472 0-2.664-1.1946-2.6666-2.664l-.0054-6.8933-8.776 8.776c-.52.52-1.2026.7813-1.8853.7813-.68 0-1.3627-.2613-1.8853-.7813-1.04-1.0427-1.04-2.7307 0-3.7707l8.7466-8.7466-6.872-.0347c-1.4746-.008-2.664-1.2107-2.656-2.68s1.2027-2.6533 2.6667-2.6533h.0133zm-25.8897 24.7141c1.0426-1.0427 2.728-1.0427 3.7706 0 1.0427 1.0426 1.0427 2.728 0 3.7706l-8.7786 8.7787 6.8933.0027c1.4747 0 2.6667 1.1946 2.6667 2.6693-.0027 1.472-1.1947 2.664-2.6667 2.664h-.0027l-13.2666-.008c-1.4667 0-2.656-1.1867-2.664-2.6533l-.0667-13.3254c-.008-1.472 1.1813-2.672 2.6533-2.68h.0134c1.4666 0 2.6586 1.184 2.6666 2.6534l.0347 6.8746z" fillRule="evenodd"/>,
    })
))