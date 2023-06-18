import { FC } from 'react';
import thumbsDown from '../../assets/icons/Down.svg'
import thumbsUp from '../../assets/icons/Up.svg'
import favorities from '../../assets/icons/favorities.svg'
import menu from '../../assets/icons/menu.svg'

import { MenuCard } from '../MenuCard/MenuCard';
import './ActionsCard.scss';


export const ActionsCard: FC = () => {
    return(
    <div className='actions-card'>
        <div className='actions-card_box'>
            <div className='actions-card_count-box'>
                <img src={thumbsUp} alt="thumbsUp" />
                <span>20</span>
            </div>
            <div className='actions-card_count-box'>
                <img src={thumbsDown} alt="thumbsDown" />
                <span>3</span>
            </div>
        </div>
        <div className='actions-card_box'>
            <img src={favorities} alt="favorities" />
            <MenuCard/>
        </div>
    </div>
    )
};
