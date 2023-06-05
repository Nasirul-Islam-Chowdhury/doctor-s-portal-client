import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "react-query";

const Myappointment = () => {
  const { user } = useContext(AuthContext);
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/bookings?email=${user?.email}`,
      {
          headers:{
              autherization: `bearer ${localStorage.getItem("accessToken")}`
          }
      }).then(
        (data) => data.json()
      )
  });
  return (
    <div>
      <h3 className="text-3xl mb-5">My Appointement</h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Teatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
            bookings &&
            bookings.map((book, i)=>
                <tr key={i}>
                <th>{i+1}</th>
                <th>{book.patient}</th>
                <th>{book.treatment}</th>
                <th>{book.selectedDate}</th>
                <th>{book.slot}</th>
                <th></th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myappointment;
