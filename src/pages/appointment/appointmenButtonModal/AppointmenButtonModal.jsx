import { format } from "date-fns";

const AppointmenButtonModal = ({ treatment, selected }) => {
  const { name, slots } = treatment;
  const date = format(selected, "PP");
  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="cursor-pointer border-2 text-2xl rounded-full "
            >
              x
            </label>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-center">{name}</h1>
          </div>
          <form className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full "
            />
            <select className="select select-bordered w-full ">
             
             {
              slots.map(slot=> <option value={slot}>{slot}</option>)
             }
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmenButtonModal;
