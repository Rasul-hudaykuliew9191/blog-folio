import { FC } from 'react';
import { FullCard } from '../FullCard/FullCard';
import { MediumCard } from '../MediumCard/MediumCard';
import { SmallCard } from '../SmallCard/SmallCard';
import { cards } from '../../mock/cards';
import './CardList.scss';


export const CardList: FC = () => {
    
    const fullCard = cards[0];
    const mediumCards = cards.slice(1, 5);
    const smallCards = cards.slice(5, 12);

    return(
        <div className='list'>
            <div className='list_full-card'>
                <FullCard id={fullCard.id} date={fullCard.date} image={fullCard.image} text={fullCard.text} title={fullCard.title}/>
            </div>
            <div className='list_medium-card'>
                {mediumCards.map(({id, date, image, title}) => (
                    <MediumCard key={id} id={id} date={date} image={image} title={title} />
                ))}
            </div>
            <div className='list_small-card'>
                {smallCards.map(({id, date, image, title}) => (
                    <SmallCard key={id} id={id} date={date} image={image} title={title} />
                ))}
            </div>
        </div>
    )
};
