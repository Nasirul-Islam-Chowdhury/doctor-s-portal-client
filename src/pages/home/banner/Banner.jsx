import { useContext } from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../components/primaryButton/PrimaryButton';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from './../../../shared/Loading/Loading'
const Banner = () => {
  const {loader} = useContext(AuthContext);
  if(loader){
    return <Loading></Loading>
  }
    return (
        <div className="hero lg:py-52 bg-banner">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img  src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold leading-snug ">Your New Smile Starts Here</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <PrimaryButton>get started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Banner;