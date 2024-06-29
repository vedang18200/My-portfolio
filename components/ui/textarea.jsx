import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[80px]  w-full rounded-md border border-white/10  bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visiable:outline-none focus-visiable:ring-1 focus-visiable:ring-accent focus-visiable:ring-offset-0 diable:cursor-not-allowed diable:opacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
