import { BaseModalProps } from './modal.types';

export default function BaseModal({ isOpen, closeModal, children }: BaseModalProps) {

    if (!isOpen) return null;

    return (
        <div onClick={closeModal} className="w-screen h-screen bg-[#5f5f5f76] fixed top-0 left-0 z-[100] flex justify-center items-center">
            <div onClick={(e) => e.stopPropagation()} className="relative">
                {children}
            </div>
        </div>
    )
}
