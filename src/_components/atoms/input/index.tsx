import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    const StartIcon = startIcon
    const EndIcon = endIcon

    return (
      <div className="relative w-full">
        {StartIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 transform">
            <div className="text-muted-foreground">{StartIcon}</div>
          </div>
        )}
        <input
          type={type}
          className={cn(
            'ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-lg border border-gray-300 bg-gray-100 px-8 py-6 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
            startIcon ? 'pl-12' : '',
            endIcon ? 'pr-12' : '',
            className,
          )}
          ref={ref}
          {...props}
        />
        {EndIcon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 transform">
            <div className="text-muted-foreground">{EndIcon}</div>
          </div>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
