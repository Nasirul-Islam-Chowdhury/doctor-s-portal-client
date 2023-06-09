import { format } from "date-fns";
import { useState } from "react";
import AppointmentOption from "../appointment/appointmentOption/AppointmentOption";
import AppointmenButtonModal from "../appointmenButtonModal/AppointmenButtonModal";
import { useQuery } from "react-query";
import Loading from "../../../shared/Loading/Loading";

const AvailableAppointment = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selected, "PP");
  const {
    data: appointmentOption = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOption", date],
    queryFn: () =>
      fetch(`https://doctoors-portal-server-production.up.railway.app/appointmentOptions?date=${date}`
      ).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="my-20">
      <div className="text-center ">
        <p className="text-xl text-secondary">
          Available Services on {format(selected, "PP")}
        </p>
        <p className="text-lg my-4">Please select a service</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {appointmentOption.map((option) => (
          <AppointmentOption
            setTreatment={setTreatment}
            key={option._id}
            appointmentOption={option}
          />
        ))}
      </div>
      <div>
        {treatment && (
          <AppointmenButtonModal
            refetch={refetch}
            setTreatment={setTreatment}
            selected={selected}
            treatment={treatment}
          />
        )}
      </div>
    </div>
  );
};

export default AvailableAppointment;
