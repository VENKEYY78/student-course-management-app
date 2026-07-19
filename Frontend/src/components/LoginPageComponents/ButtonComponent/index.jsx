

import './index.css'

const ButtonComponent = ({
    buttonType,
    buttonText,
    className,
  }) => {
    return (
      <button
        type={buttonType}
        className={className}
      >
        {buttonText}
      </button>
    );
  };
  
  export default ButtonComponent;