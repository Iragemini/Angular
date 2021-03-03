import React from 'react';

type ModalProps = {
  title: string;
  isOpen: boolean;
  onCancel: Function;
  onSubmit: Function;
  children: Node;
};

const Modal: React.FC = ({
  title = 'Statistics',
  isOpen = false,
  onCancel,
  onSubmit,
  children = null,
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div>
          <div className="modalOverlay">
            <div className="modalWindow">
              <div className="modalHeader">
                <div className="modalTitle">{title}</div>
                <button name="cancel" onClick={onCancel}>
                  X
                </button>
              </div>
              <div className="modalBody">{children}</div>
              <div className="modalFooter"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
