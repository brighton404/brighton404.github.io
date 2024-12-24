import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './button.css';

enum ButtonColor {
  Accent = 'accent',
  Primary = 'primary',
  Secondary = 'secondary',
  Optimal = 'optimal',
  isDisabled = 'isDisabled',
}

enum ButtonState {
  Default = 'default',
  Hovered = 'hovered',
  Touch = 'touch',
  Focused = 'focused',
  Disabled = 'disabled',
}

interface ButtonProps {
  color: ButtonColor;
  state: ButtonState;
  icon?: React.ReactNode;
  isOutlined?: boolean;
  navigateTo?: string; 
  onClick?: () => void;
  children: React.ReactNode;
}

const actionButton: FC<ButtonProps> = ({ 
  color, 
  state, 
  icon, 
  isOutlined = false, 
  navigateTo, // Destructure navigateTo
  onClick, 
  children 
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (navigateTo) navigate(navigateTo);
  };

  const getClassNames = () => {
    const colorClass = `button--${color}`;
    const stateClass = `button--${state}`;
    const outlineClass = isOutlined ? 'button--outlined' : '';
    return `button ${colorClass} ${stateClass} ${outlineClass}`;
  };

  return (
    <button 
      className={getClassNames()} 
      onClick={handleClick} 
      /* disabled={state === ButtonState.Disabled} */
    >
      {icon && <span className="button__icon">{icon}</span>}
      <span className="button__text">{children}</span>
    </button>
  );
};

export default actionButton;
export { ButtonColor, ButtonState };
