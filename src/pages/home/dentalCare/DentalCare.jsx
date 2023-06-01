import treatMent from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/primaryButton/PrimaryButton';
const DentalCare = () => {
    return (
        <div className="lg:flex justify-between items-center  w-5/6 mx-auto  ">
 <div className='lg:w-1/2  h-full'>
 <figure><img className='w-96 mx-auto' src={treatMent} alt="Album"/></figure>
 </div>
  <div className="lg:w-1/2">
    <h2 className=" text-5xl font-bold my-8">
        Exceptional Dental
     Care, on Your Terms</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page</p>
  <PrimaryButton>Get Started</PrimaryButton>
   
    
  </div>
</div>
    );
};

export default DentalCare;