import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    handleClick: () => void;
    variant: 'primary' | 'secondary' | 'none';
    children?: ReactNode;
    className?: string;
    fullWidth?: boolean;
}
