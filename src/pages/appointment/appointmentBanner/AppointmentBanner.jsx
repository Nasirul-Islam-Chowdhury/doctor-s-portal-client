
import { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

import { format } from 'date-fns';
const AppointmentBanner = ({selected, setSelected}) => {

    return (
        <section>
            <div className="hero py-20">
  <div className="hero-content flex-col lg:flex-row-reverse justify-center gap-5">
    <img  alt='dentist chair' src={chair} className='lg:w-1/2'/>
    <div className='lg:w-1/2'>
    <DayPicker
    className='text-black'
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
    <p>You picked {format(selected, 'PP')}.</p>
    </div>
  </div>
</div>
        </section>
    );
};

export default AppointmentBanner;