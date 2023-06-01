import bgImg from '../../../assets/images/bg.png'
const Contact = () => {
    return (
<section style={{background: `url(${bgImg})`}} className="my-20 py-20 w-full mx-auto">
    <div className='w-2/5 mx-auto'>
        <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-secondary">Contact Us</h3>
            <h1 className="text-4xl mt-4">Stay connected with us</h1>
        </div>
        <div className="">
            <input placeholder=" email address" className="outline-none w-full p-3 rounded-md" type="text" />
            <br />
            <input placeholder=" email address" className="outline-none w-full p-3 rounded-md my-4" type="text" />
            <textarea placeholder='your message' className="outline-none w-full h-60 p-2 rounded-xl" type="text" />
        </div>
    </div>
</section>            
    );
};

export default Contact;