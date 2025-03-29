import { Dispatch, SetStateAction, useState } from 'react';
import Button from '../button/Button';
import BaseModal from './BaseModal';
import { BaseModalProps } from './modal.types';
import CheckBox from '../checkbox/CheckBox';

interface PagesModalProps extends BaseModalProps {
    selectedPages: string[];
    setSelectedPages: Dispatch<SetStateAction<string[]>> | (() => void);
}

const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];

export default function PagesModal({ selectedPages, setSelectedPages, ...props }: PagesModalProps) {

    const [selectAll, setSelectAll] = useState(false);

    const togglePage = (page: string) => {
        setSelectedPages((prev) =>
            prev.includes(page) ? prev.filter((p) => p !== page) : [...prev, page]
        );
    };

    const toggleSelectAll = () => {
        if (selectAll) {
            setSelectedPages([]);
        } else {
            setSelectedPages([...pages]);
        }
        setSelectAll(!selectAll);
    };

    return (
        <BaseModal {...props}>
            <div className='w-96 flex flex-col bg-white px-4 py-2 rounded-lg shadow-lg'>

                <div className='w-full h-10.5 flex items-center justify-between'>
                    <p>All pages</p>
                    <CheckBox checked={selectAll} handleChange={toggleSelectAll} />
                </div>

                <div className="h-5 flex flex-col justify-center">
                    <div className="w-full h-0.25 bg-[#cdcdcd]" />
                </div>

                <div className='flex flex-col'>
                    {pages.map((page) => (
                        <div key={page} className='h-10.5 flex items-center justify-between' onClick={() => togglePage(page)}>
                            <p>{page}</p>
                            <CheckBox checked={selectedPages.includes(page)} handleChange={() => togglePage(page)} />
                        </div>
                    ))}
                </div>

                <div className="h-5 flex flex-col justify-center">
                    <div className="w-full h-0.25 bg-[#cdcdcd]" />
                </div>

                <div className="py-2.5">
                    <Button variant='primary' fullWidth handleClick={props.closeModal}>Done</Button>
                </div>

            </div>
        </BaseModal>
    );
}
