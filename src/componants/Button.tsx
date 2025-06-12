import React from 'react'
import type { ButtonType } from '../types/types';



    const Button = React.memo(({styleButton , children , typeStyle}:ButtonType) => {
        return <button onMouseDown={(e) => { e.preventDefault(); styleButton(typeStyle); }} data-testid={typeStyle}>
    {children}
      </button>
    })  

export default Button
