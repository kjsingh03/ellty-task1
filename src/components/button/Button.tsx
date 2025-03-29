import { ButtonProps } from './button.types'

export default function Button({ children, handleClick, variant = "none", className = "h-10 rounded-sm px-5 py-2.5", fullWidth = false, disabled, ...rest }: ButtonProps) {

    const variantClass: string = {
        primary: "bg-accent-main hover:bg-accent-secondary text-sm leading-[130%]",
        secondary: "bg-accent-secondary hover:bg-accent-main text-sm leading-[130%]",
        none: "",
    }[variant];

    return (
        <button
            onClick={() => disabled ? null : handleClick()}
            className={`${fullWidth ? 'w-full' : 'w-max'} ${className} ${variantClass} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} flex items-center justify-center`}
            {...rest}
        >
            {children}
        </button>
    )
}
