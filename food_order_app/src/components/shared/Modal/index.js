import ReactDOM from "react-dom";

import styles from "./modal.module.css";

const BackDrop = ({ onClick }) => {
  return <div className={styles.backdrop} onClick={onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.querySelector("#portal");
const Modal = ({ onClick, children }) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop onClick={onClick} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
export default Modal;
