import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// Styled Components
interface MyButtonProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const MyButton = styled(motion.button)<MyButtonProps>`
  background-color: ${(props) => props.color || '#1976d2'};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: ${(props) => {
    switch (props.size) {
      case 'small':
        return '8px 16px';
      case 'large':
        return '16px 32px';
      default:
        return '12px 24px';
    }
  }};
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.2s;
  user-select: none;
  outline: none;
  text-transform: capitalize;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 16px;
  }

  &:hover {
    background-color: ${(props) => props.color || '#1565c0'};
    transform: scale(1.05);
  }
  &:active {
    background-color: #354f52;
  }
`;

interface StyledButtonProps {
  text: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  icon?: IconDefinition;
}

const StyledButton: React.FC<StyledButtonProps> = ({
  text,
  onClick,
  size = 'medium',
  color,
  icon,
}) => {
  return (
    <MyButton size={size} color={color} onClick={onClick}>
      {text}
      {icon && <FontAwesomeIcon icon={icon} />}
    </MyButton>
  );
};

export default StyledButton;
