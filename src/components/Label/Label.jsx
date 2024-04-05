import * as React from "react"

import { cn } from "../../lib/helpers/utils"

const Label = ({ className, children, ...props }) => {
    return (
        <label className={cn("block text-sm font-medium", className)} {...props}>
            {children}
        </label>
    )
}

export default Label