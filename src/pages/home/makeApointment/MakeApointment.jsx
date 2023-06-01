import doctor from '../../../assets/images/doctor.png'
import appiontment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/primaryButton/PrimaryButton';
const MakeApointment = () => {

    return (
        <section style={{background: `url(${appiontment})`}}>
            <div className="hero lg:mt-64 mt-32 mb-32  ">
  <div className="hero-content flex-col lg:flex-row ">
    <img src={doctor} className="lg:w-1/2 w-full hidden lg:block -mt-48" />
    <div>
      <h2 className="text-2xl text-primary font-bold">Appointment</h2>
      <h1 className='text-3xl font-bold my-4'>Make an appointment Today</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page</p>
     <PrimaryButton>get started</PrimaryButton>
    </div>
  </div>
</div>
        </section>
    );
};

export default MakeApointment;