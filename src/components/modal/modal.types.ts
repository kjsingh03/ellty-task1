import { ReactNode } from "react";

export interface BaseModalProps {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    children?: ReactNode;
}


