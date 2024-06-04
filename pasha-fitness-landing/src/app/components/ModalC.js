import { useEffect } from "react";

const ModalC = ({ isOpen, onClose, onCloseCallback, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling when modal is closed
    }

    return () => {
      document.body.style.overflow = ""; // Re-enable scrolling when component is unmounted
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className=" fullscreen  modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={() => {
            onClose();
            onCloseCallback && onCloseCallback();
          }}>
          Close
        </button>

        {children}
      </div>
      <style jsx>{`
        .modal {
          position: fixed;
          backgrounf:#4C5C96;
          top: 3%;
          left: 5%;
          width: 90%;
          height: 95%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999999;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          scale:0.9;
          background:#4C5C96;
          overflow:hidden;
          border: 1px solid white
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          z-index: 99999;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          padding: 50px;
          border-radius: 20px;
        }

        .modal-close {
              padding: 10px;
          background: none;
          border: none;
          cursor: pointer;
          align-self: flex-end;
          margin-bottom: 10px;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          left: 10px;
          font-size: 20px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ModalC;
