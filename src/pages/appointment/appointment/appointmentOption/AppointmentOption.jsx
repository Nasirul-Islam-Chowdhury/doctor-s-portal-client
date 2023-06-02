
import React from 'react';
const AppointmentOption = ({appointmentOption,setTreatment}) => {
const {name, slots,_id } = appointmentOption;
    return (
        <section className='mt-10'>
            <div className="card  justify-center text-center bg-base-100 shadow-xl">
  <div className="card-body ">
    <h2 className="card-title justify-center">{name}</h2>
    <p>{slots.length> 0? slots[0] : "Try another day"}</p>
    <p>{slots.length} { slots.length > 1? 'spaces' : " space"} available</p>
    <div className="card-actions justify-center">
    <label htmlFor="my_modal_6" className="btn btn-primary text-white" 
    onClick={()=>setTreatment(appointmentOption)}>Book appointment
    </label>

     
    </div>
  </div>
</div>
        </section>
    );
};

export default AppointmentOption;