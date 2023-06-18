import { FC } from 'react';
import { DateCard } from '../DateCard/DateCard';
import { Typography } from '../Typography/Typography';
import { ActionsCard } from '../ActionsCard/ActionsCard';
import './MediumCard.scss';

interface IMediumCard {
    id: number;
    title: string;
    image: string;
    date: string;
}

export const MediumCard: FC<IMediumCard> = ({id, date, image, title}) => {
    return(
    <div className="medium-card">
        <div className="medium-card_img-box">
            <img className="medium-card_img"src={image} alt={title} />
        </div>
        <DateCard date={date}/>
        <Typography content={title} type='h3' isLink/>
        <div className="medium-card_actions">

        </div>
        <ActionsCard/>
    </div>
    )
};
