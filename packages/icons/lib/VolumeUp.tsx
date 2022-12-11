/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path clipRule="evenodd" d="m13.4343 3.17548c.306-.21.703-.234 1.032-.06.328.173.534.514.534.885v16.00002c0 .371-.206.712-.534.885-.146.077-.307.115-.466.115-.199 0-.396-.059-.566-.175l-6.41101-4.397h-5.023c-.553 0-1-.447-1-1v-6.85702c0-.553.447-1 1-1h5.023zm6.2034 2.05436c-.425-.352-1.056-.293-1.408.133-.352.425-.293 1.055.133 1.408 1.7 1.409 2.637 3.26596 2.637 5.22996 0 1.963-.937 3.82-2.637 5.229-.426.353-.485.983-.133 1.408.198.239.483.363.771.363.224 0 .45-.076.637-.23 2.168-1.796 3.362-4.201 3.362-6.77 0-2.56996-1.194-4.97496-3.362-6.77096zm-1.3584 3.14353c-.347-.43-.976-.497-1.406-.152-.43.346-.499.975-.153 1.406 1.036 1.28603 1.036 3.46003 0 4.74603-.346.431-.277 1.06.153 1.406.185.149.406.221.626.221.292 0 .582-.128.78-.373 1.636-2.034 1.636-5.22 0-7.25403z" fillRule="evenodd"/>,
        outline: <path clipRule="evenodd" d="m13.5 18.1016-5.10098-3.498c-.167-.113-.364-.175-.566-.175h-4.333v-4.85698h4.333c.202 0 .399-.062.566-.175l5.10098-3.498zm1.466-14.98595c-.329-.174-.726-.151-1.031.059l-6.412 4.397h-5.023c-.552 0-1 .447-1 1v6.85705c0 .553.448 1 1 1h5.023l6.412 4.397c.169.116.367.174.565.174.16 0 .32-.038.466-.115.328-.173.534-.513.534-.885v-16.00005c0-.371-.206-.711-.534-.884zm3.3133 5.2575c-.347-.43-.976-.497-1.406-.152-.43.346-.499.975-.153 1.406 1.036 1.28595 1.036 3.46005 0 4.74605-.346.431-.277 1.06.153 1.406.185.149.406.221.626.221.292 0 .582-.128.78-.373 1.636-2.034 1.636-5.22 0-7.25405zm-.0496-3.01053c.352-.426.983-.485 1.408-.133 2.168 1.796 3.362 4.201 3.362 6.77098 0 2.569-1.194 4.974-3.362 6.77-.187.154-.413.23-.637.23-.288 0-.573-.124-.771-.363-.352-.425-.293-1.055.133-1.408 1.7-1.409 2.637-3.266 2.637-5.229 0-1.964-.937-3.82098-2.637-5.22998-.426-.353-.485-.983-.133-1.408z" fillRule="evenodd"/>,
    })
))