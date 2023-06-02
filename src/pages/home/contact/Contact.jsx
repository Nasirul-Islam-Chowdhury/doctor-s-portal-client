import appiontment from '../../../assets/images/appointment.png'
const Contact = () => {
    return (
<section style={{background: `url(${appiontment})`}} className="my-20 bg-cover py-20 w-full mx-auto">
    <div className='lg:w-2/5 mx-auto p-5'>
        <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-secondary">Contact Us</h3>
            <h1 className="text-4xl mt-4 text-white">Stay connected with us</h1>
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