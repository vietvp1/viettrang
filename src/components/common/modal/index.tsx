import React, { PropsWithChildren } from "react";
import Modal from "react-modal";

interface IVTVModal extends PropsWithChildren {
  closeModal: () => void;
  content?: JSX.Element;
  isOverflowAuto?: boolean;
}

export const VTVModal: React.FC<IVTVModal> = (props) => {
  const { closeModal, content, children, isOverflowAuto = true } = props;

  return (
    <Modal
      isOpen={true}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          overflow: "hidden",
          background: "none",
          padding: "0px",
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          borderRadius: "0.75rem",
          backgroundColor: "#fff",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <div
        onClick={closeModal}
        className="absolute z-10 w-7 h-7 cursor-pointer right-2 top-2 text-theme-text group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="group-hover:text-red-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="py-9 bg-white text-theme-text relative rounded-xl">
        <div
          className={`max-w-[400px] md:max-w-[800px] max-h-[90h] px-[6px] md:px-3 ${
            isOverflowAuto ? "overflow-auto" : ""
          }`}
        >
          {content || children}
        </div>
      </div>
    </Modal>
  );
};
