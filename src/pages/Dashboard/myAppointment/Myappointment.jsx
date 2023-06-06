import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../../shared/Loading/Loading";

const Myappointment = () => {
  const { user } = useContext(AuthContext);
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () =>
      fetch(`https://doctor-s-portal-server-jlvo7vylc-nicchy123.vercel.app/bookings?email=${user?.email}`, {
        headers: {
          autherization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((data) => data.json()),
  });
  if(isLoading){
    return <Loading/>
  }
  return (
    <div className="p-5">
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
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length>0 &&
              bookings.map((book, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <th>{book.patient}</th>
                  <th>{book.treatment}</th>
                  <th>{book.selectedDate}</th>
                  <th>{book.slot}</th>
                  <th>
                    {book.price && !book.paid &&
                      <Link to={`/dashboard/payment/${book._id}`}>
                        <button className="btn btn-sm">Pay</button>
                      </Link>                      
                    }
                    {
                      book.price && book.paid && <span className="text-green-500">Paid</span>
                    }
                  </th>
                </tr>
              ))
             
              
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myappointment;
