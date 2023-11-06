'use client'

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from 'react-icons/io';
import Button from "../Button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
    secondaryActionLabel?: string;
    secondaryAction?: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled, secondaryAction, secondaryActionLabel }) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300)
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }
        onSubmit();
    }, [disabled, onSubmit]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }
        secondaryAction();
    }, [disabled, secondaryAction]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
                <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto lg:h-auto">
                    {/*/ Content */}
                    <div className={`translate duration-300 h-full 
                    ${showModal ? 'translate-y-0' : 'translate-y-full'} 
                    ${showModal ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="relative translate h-full md:h-auto lg:h-auto border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*/ Content */}
                            <div className="relative flex items-center justify-center px-6 py-4 rounded-t border-b-[1px]">
                                <button className="absolute left-9 p-1 border-0 hover:opacity-75 transition"
                                    onClick={handleClose}
                                >
                                    <IoMdClose size={18} />
                                </button>
                                <div className="text-2xl font-semibold text-rose-500">
                                    {title}
                                </div>
                            </div>

                            {/*/ Body */}
                            <div className="relative p-6 flex-auto">
                                {body}
                            </div>

                            {/*/ Footer */}
                            <div className="flex flex-col gap-2 px-6 py-4">
                                <div className="flex flex-row items-center gap-4 w-full">
                                    {secondaryAction && secondaryActionLabel && (
                                        <Button
                                            outline
                                            label={secondaryActionLabel}
                                            disabled={disabled}
                                            onclick={handleSecondaryAction}
                                        />
                                    )}
                                    <Button
                                        label={actionLabel}
                                        disabled={disabled}
                                        onclick={handleSubmit}
                                    />
                                </div>
                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;