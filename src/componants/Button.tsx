import React from 'react'

type Button = {
    typeStyle:string;
    styleButton:(type:string) => void,
    children:React.ReactNode
}

    const Button = React.memo(({styleButton , children , typeStyle}:Button) => {
        return <button onMouseDown={(e) => { e.preventDefault(); styleButton(typeStyle); }} data-testid={typeStyle}>
    {children}
      </button>
    })  

export default Button
