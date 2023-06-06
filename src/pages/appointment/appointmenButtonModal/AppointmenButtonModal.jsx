import { format } from "date-fns";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const AppointmenButtonModal = ({ treatment, selected,setTreatment,refetch }) => {
  const {user} = useContext(AuthContext)
  const { name: treatmentName, slots, price } = treatment;
  const date = format(selected, "PP");
  const handleAppointment = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;
    const bookingModal = {
      treatment: treatmentName, 
      patient: name, 
      selectedDate:date, 
      slot, 
      email, 
      phone,
      price
    }
    fetch("https://doctor-s-portal-server-jlvo7vylc-nicchy123.vercel.app/bookings",{
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(bookingModal)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.acknowledged){  
        setTreatment(null)
        toast.success("Booking added successfully")
        refetch()
      }else{
        toast.error(data.message)
      }
      console.log(data)})

  }
  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white text-black">
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
            >
              x
            </label>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-center">{treatmentName}</h1>
          </div>
          <form onSubmit={handleAppointment} className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full ">
             
             {
              slots.map((slot, i)=> <option value={slot} key={i}>{slot}</option>)
             }
            </select>
            <input
            name="name"
            disabled
            defaultValue={user?.displayName}
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full "
            />
            <input
            name="email" 
            disabled
            defaultValue={user?.email}
              type="email"
              placeholder="email"
              className="input input-bordered w-full "
            />
            <input
            required
            name="phone"
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
            <input className="bg-neutral w-full text-white py-2 rounded cursor-pointer" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmenButtonModal;
