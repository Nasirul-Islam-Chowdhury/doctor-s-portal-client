import { format } from "date-fns";
import { useEffect, useState } from "react";
import AppointmentOption from "../appointment/appointmentOption/AppointmentOption";
import AppointmenButtonModal from "../appointmenButtonModal/AppointmenButtonModal";

const AvailableAppointment = ({selected}) => {
    const [appointmentOption, setAppointmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null)
    useEffect(()=>{
        fetch("services.json")
        .then(res=>res.json())
        .then(data=>{
            
            console.log(data)
            setAppointmentOption(data)})
    },[])
    return (
        <div className="my-20">
           <div className="text-center ">
           <p className="text-xl text-secondary">Available Services on {format(selected, 'PP')}</p>
            <p className="text-lg my-4">Please select a service</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                appointmentOption.map(option=> <AppointmentOption setTreatment={setTreatment} key={option._id} appointmentOption={option}/>)
            }
           </div>
           <div>
            {
               treatment &&
                <AppointmenButtonModal selected={selected} treatment={treatment}/>
            }
           </div>
        </div>
    );
};

export default AvailableAppointment;