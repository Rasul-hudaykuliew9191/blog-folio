import { FC } from 'react';
import { DateCard } from '../DateCard/DateCard';
import { Typography } from '../Typography/Typography';
import { ActionsCard } from '../ActionsCard/ActionsCard';
import './SmallCard.scss';


interface ISmallCard {
    id: number;
    title: string;
    image: string;
    date: string;
}

export const SmallCard: FC<ISmallCard> = ({ id, date, image, title }) => {
    return (
       <div className='small-card'>
            <div className='small-card_content'>
                <div>
                    <DateCard date={date} />
                    <Typography content={title} type='h3' isLink/>
                </div>
                <div>
                    <div className='small-card_img-box'>
                        <img className='small-card_img' src={image} alt={title} />
                    </div>
                </div>
            </div>
            <ActionsCard/>
       </div>
    )
};
