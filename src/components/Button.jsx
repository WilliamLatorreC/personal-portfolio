

export const Button = ({className = "", size ="default", children, ...props}) => {
    const basesClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary)]/90 shadow-lg shadow-color-[var(--color-primary)]/25";

    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    }
    const classes = `${basesClasses} ${sizeClasses[size]} ${className}`;
    return <button className={classes} {...props}>
        <span className="relative flex items-center justify-center gap-2">{children}</span>
    </button>
};