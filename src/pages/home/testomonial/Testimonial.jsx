import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            location: "California",
            img: people3
        }
]
    return (
        <section className="my-16 px-20">
<div className='flex justify-between items-center mb-20'>
    <div>
        <h4 className="text-xl text-primary font-bold">Testimonial</h4>
        <h2 className="text-4xl">What our patients says</h2>
    </div>
    <figure>
        <img className='w-24 lg:w-48' src={quote} alt="" />
    </figure>
    
</div>
<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10' >
        {
            reviews.map(review => <Review review={review} key={review._id}/>)
        }
    </div>
        </section>
    );
};

export default Testimonial;