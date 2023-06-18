import { FC, useState } from 'react';
import { IconButton } from '../IconButton/IconButton';
import menu from '../../assets/icons/menu.svg'
import './MenuCard.scss';

export const MenuCard: FC = () => {
    
    const options = ['Edit', 'Delete'];
    const [open, setOpen] = useState(false);
    
    const handleToggleClick = () => {
        setOpen(!open);
    }

    const handleClickOption = (typeOption: string) => {
        setOpen(false);
        if(typeOption === 'Edit') console.log('edit');
        if(typeOption === 'Delete') console.log('Delete');
        
    }
    
    return (
        <div className='menu'>
            <IconButton onClick={handleToggleClick}>
                <img src={menu} alt="menu" />
            </IconButton>
            {open && (
                <ul className='menu_items'>
                    {options.map((option)  => (
                        <li className='menu_item' key={option}>
                            <button className='menu_item-btn' onClick={() => handleClickOption(option)}>
                                {option}
                            </button>    
                        </li>
                    ))}
                </ul>
            )}
        </div>  
    )
};
