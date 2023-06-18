import { FC } from 'react';
import { Typography } from '../Typography/Typography';
import { DateCard } from '../DateCard/DateCard';
import { ActionsCard } from '../ActionsCard/ActionsCard';
import './FullCard.scss';

interface IFullCard {
    id: number;
    text: string;
    title: string;
    image: string;
    date: string;
}

export const FullCard: FC<IFullCard> = ({id, date, image, text, title}) => {
    return (
        <div className='full-card'>
            <div className='full-card_content'>
                <DateCard date={date} />
                <Typography content={title} type='h2' isLink/>
                <p className="full-card_text">{text}</p>
            </div>
            <div>
                <div className="full-card_img-box">
                    <img className="full-card_img" src={image} alt={title} />
                </div>
            </div>
        <ActionsCard/>
        </div>
    )
};
