import React, { Children } from 'react'
import { Link } from "react-router-dom";
import '../../scss/parts/LinkParts.scss'

type LinkPartsProps = {
    to: string;
    children : JSX.Element|string;
    color?: string;
}

const LinkParts = ({to, children, color = 'inherit'}: LinkPartsProps) => {
    return (
        <Link
            className='link-parts'
            to={to}
            style={{color: color}}
        >{children}</Link>
    )
}

export default LinkParts