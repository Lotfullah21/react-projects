import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  console.log(isModalOpen);
  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h4>Modal contents</h4>
        <button className="close-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};
export default Modal;
