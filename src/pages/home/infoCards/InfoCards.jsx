import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const incards = [
        {
            id: 1,
            name: "Opening Hours",
            description: "Open 9 am to 5 pem everyday",
            icon: clock,
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        },
        {
            id: 2,
            name: "Visit our lcoation",
            description: "Brooklyn, NY 10036, United States",
            icon: marker,
            bgClass: "bg-neutral"
        },
        {
            id: 3,
            name: "Contact us now",
            description: "+000 123 456789",
            icon: phone,
            bgClass: "bg-gradient-to-r from-primary to-secondary"
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                incards.map(card=> <InfoCard key={card.id} card={card}/>)
            }
        </div>
    );
};

export default InfoCards;