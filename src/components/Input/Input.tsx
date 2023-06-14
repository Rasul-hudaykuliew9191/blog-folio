import { FC } from 'react';
import './Input.scss';

interface IInput {
    value: string;
    handleChange: (newValue: string) => void;
    title: string;
    placeholder?: string;
    isDisabled?: boolean;
    errorMessage?: string;
}

export const Input: FC<IInput> = ({
    value,
    handleChange,
    placeholder,
    title,
    isDisabled = false,
    errorMessage
}) => {
    return (
        <div className='input-wrapper'>
            <label className='label' htmlFor="input-text">{title}</label>
            <input 
                className={`input ${errorMessage && 'error'}`}
                placeholder={placeholder}
                disabled={isDisabled}
                type='text'
                id= 'input-text'
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            />
            {errorMessage && <div className='errorMessege'>{errorMessage}</div>}
        </div>
    )
};    

