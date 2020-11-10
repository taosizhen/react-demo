import React from 'react'
interface IProps {
    type: string;
    width:string;
    height:string;
}

export default function Icon(props: IProps) {
    return (
        <svg 
            style={{width: `${props.width}`, height: `${props.height}`,verticalAlign: `-0.15em`,fill: `currentColor`,overflow: `hidden`}}
            aria-hidden="true">
            <use xlinkHref={`#${props.type}`} />
        </svg>
    )
}