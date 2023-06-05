const ConfirmationModal = ({title, message,closeModal,successAction, modalData,succsButtonName}) => {
  return (
    <div>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <label onClick={closeModal} htmlFor="my_modal_6" className="btn">Cancel</label>
      <label onClick={()=>successAction(modalData)} htmlFor="my_modal_6" className="btn">{succsButtonName}</label>
    </div>
  </div>
</div>
    </div>
  );
};

export default ConfirmationModal;
