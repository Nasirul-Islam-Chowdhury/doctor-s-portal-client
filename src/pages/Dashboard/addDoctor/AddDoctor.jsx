import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../../shared/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const AddDoctor = () => {
    const navigate = useNavigate()
    const handleAddDoctor = (data) => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image',image)
        const handleImgeKey = import.meta.env.VITE_imgbb
        const url =  `https://api.imgbb.com/1/upload?key=${handleImgeKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res=>res.json())
        .then(imgData=>{
            if(imgData.success){
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: imgData.data.image.url
                }
             
                fetch(`http://localhost:5000/doctors`,{
                    method: "POST",
                    headers:{
                        'content-type': 'application/json',
                        autherization: `bearer ${localStorage.getItem("accessToken")}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res=>res.json())
                .then(data=>{
                    toast.success(`${data.name} is added successfully`)
                    console.log(data)})
                    navigate('/dashboard/manageDoctors')
            }

        })
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  const { data: specialties = [], isLoading } = useQuery({
    queryKey: "appointmentSpecialty",
    queryFn: () =>
      fetch(`http://localhost:5000/appointmentSpecialty`).then((data) =>
        data.json()
      ),
  });

if(isLoading){
    return <Loading/>
}

  return (
    <div className="w-96 p-7 mx-auto">
      <h2 className="text-4xl">Add a doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full mb-2">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            defaultValue=""
            {...register("name", { required: "name is required" })}
            aria-invalid={errors.name ? "true" : "false"}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>

        <div className="form-control w-full mb-2 \">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            defaultValue=""
            {...register("email", { required: "Email is required" })}
            aria-invalid={errors.email ? "true" : "false"}
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <p className="text-sm text-black p-2">specialty</p>
        <select {...register('specialty',{ required: "Specialty is required" })} className="select select-bordered w-full  mb-4">
          <option defaultValue={"Pick a specialty"}>
            Please a select specialty
          </option>
          {specialties.map((specialty) => (
            <option key={specialty._id}>{specialty.name}</option>
          ))}
        </select>

        <div>
        <div className="form-control w-full mb-2 \">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            defaultValue=""
            {...register("img", { required: "Photo is required" })}
            aria-invalid={errors.img ? "true" : "false"}
            type="file"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        </div>
        <input
          className="btn btn-neutral w-full"
          type="submit"
          value={"Add Doctor"}
        />
      </form>
    </div>
  );
};

export default AddDoctor;
