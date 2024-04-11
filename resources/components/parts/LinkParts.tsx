import React, { Children } from 'react'
import { Link } from "react-router-dom";
import '../../scss/parts/LinkParts.scss'

type LinkPartsProps = {
    to: string;
    children : JSX.Element|string;
    color?: string;
    className?: string;
}

const LinkParts = ({to, children, color = 'inherit', className = ''}: LinkPartsProps) => {
    const classNameVal = `link-parts ${className}`;
    return (
        <Link
            className={classNameVal}
            to={to}
            style={{color: color}}
        >{children}</Link>
    )
}

export default LinkParts