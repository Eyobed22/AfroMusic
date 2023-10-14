import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const ModalContentWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 16px;
  color: #000;
  padding: 5px;
`;

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <ModalWrapper>
      <ModalContentWrapper>
        <CloseButton onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        {children}
      </ModalContentWrapper>
    </ModalWrapper>
  );
};

export default Modal;