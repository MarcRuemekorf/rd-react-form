import React from 'react'

import { cn } from "../../../lib/helpers/utils"

const Select = ({ className, options, defaultValue, ref, ...props }) => {
  return (
    <select
        id="location"
        name="location"
        className={cn(
            "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
            className
          )}
        defaultValue={defaultValue}
        {...props}
      >
        {options.map(option => {
            return (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            )
        })}
      </select>
  )
}

export default Select