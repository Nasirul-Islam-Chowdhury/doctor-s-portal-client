import { useQuery } from "react-query";
import Loading from "../../../shared/Loading/Loading";
import { useState } from "react";
import ConfirmationModal from "../../../shared/confirmationModal/ConfirmationModal";
import { toast } from "react-hot-toast";

const ManageDoctors = () => {
    const [deletingDcotor, setdeletingDcotor] = useState(null);
    const closeModal=() => setdeletingDcotor(null)
  const { data: doctors = [], isLoading, refetch } = useQuery({
    queryKey: "doctors",
    queryFn: () =>
      fetch(`https://doctor-s-portal-server-jlvo7vylc-nicchy123.vercel.app/doctors`, {
        headers: {
          autherization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((data) => data.json())
        .catch((error) => console.log(error)),
  });
  const handleDeleteDoctor=(doctor)=>{
    fetch(`https://doctor-s-portal-server-jlvo7vylc-nicchy123.vercel.app/doctors/${doctor._id}`,{
        method: "DELETE",
        headers: {
            autherization: `bearer ${localStorage.getItem("accessToken")}`
        }
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
            toast.success(`${doctor.name} deleted successfully`)
            refetch()
        }
        console.log(data)})
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Manage Doctor: {doctors?.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {doctors.map((doctor, i) => (
              <tr key={doctor._id} >
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img className="h-5 w-5" src={doctor.img} />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    onClick={() => setdeletingDcotor(doctor)}
                    htmlFor="my_modal_6"
                    className="btn btn-sm btn-eror"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDcotor && (
        <ConfirmationModal
          title="Are you sure to delete?"
           closeModal={closeModal}
           successAction={handleDeleteDoctor}
           modalData = {deletingDcotor}
           succsButtonName={"Delete"}
          message={`if you are delete ${deletingDcotor.name}. it can't be undone`}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
