import { CheckBoxProps } from './checkbox.types';

export default function CheckBox({ checked, handleChange }: CheckBoxProps) {

    return (
        <label className={`group w-6.25 h-6.25 flex items-center justify-center cursor-pointer rounded-[6px] ${checked ? 'bg-[#2469f6] border-transparent hover:bg-[#5087f8]' : 'bg-white border-[#e1e1e1] hover:border-[#BDBDBD]'} border active:outline-3 active:outline-[#e1e7f6] transition-all duration-200`} >
            
            <div className='w-4.25 h-3 relative'>
                <svg className={`size-full object-cover ${checked ? 'text-white opacity-100' : 'text-[#e3e3e3] opacity-0 group-hover:opacity-100 group-active:text-[#dbdbdb]'} transition-opacity duration-200`} width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg' >
                    <path d='M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1' stroke='currentColor' strokeLinecap='round' />
                </svg>
            </div>

            <input type='checkbox' hidden checked={checked} onChange={handleChange} className="group-active:outline-2 group-active:outline-blue-500" />
        
        </label>
    );
}