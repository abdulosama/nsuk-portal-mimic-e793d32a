import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface FloatingSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  icon?: React.ReactNode;
  options: { value: string; label: string }[];
}

const FloatingSelect = React.forwardRef<HTMLSelectElement, FloatingSelectProps>(
  ({ className, label, icon, id, options, ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, '-');
    const [hasValue, setHasValue] = React.useState(false);
    
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10">
            {icon}
          </div>
        )}
        <select
          id={selectId}
          ref={ref}
          onChange={(e) => {
            setHasValue(e.target.value !== "");
            props.onChange?.(e);
          }}
          className={cn(
            "peer h-12 w-full border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 rounded-md transition-all appearance-none cursor-pointer",
            icon && "pl-10",
            className
          )}
          {...props}
        >
          <option value="" disabled selected hidden></option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <label
          htmlFor={selectId}
          className={cn(
            "absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground transition-all pointer-events-none bg-background px-1",
            "peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary",
            hasValue && "top-0 text-xs text-primary",
            icon && "left-10 peer-focus:left-3",
            hasValue && icon && "left-3"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

FloatingSelect.displayName = "FloatingSelect";

export { FloatingSelect };
