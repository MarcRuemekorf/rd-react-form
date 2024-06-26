import * as React from "react"

import { cn } from "../../../lib/helpers/utils"

const Input = ({ className, id, type, ref, label, ...props }) => {
    return (
        <label htmlFor={id}>
          { label && <span className="block text-sm font-medium">{label}</span> }
          <input
            type={type}
            id={id}
            name={id}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
        </label>
      )
}

export default Input