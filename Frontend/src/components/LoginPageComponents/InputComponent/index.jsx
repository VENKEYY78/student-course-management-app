

import './index.css'

const InputElement = ({
    label,
    id,
    type,
    placeholder,
    icon,
    value,
    onChange,
    rightIcon,
    onRightIconClick,
}) => {
    return (
        <>
            <div className='input-element-container'>
                <label className='input-label' htmlFor={id}>
                    {label}
                </label>
                <div className='input-box'>
                    <span className="input-icon">{icon}</span>
                    <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        className="input-filed"
                        value={value}
                        onChange={onChange}
                    />
                    {rightIcon && (
                            <span
                                className="right-icon"
                                onClick={onRightIconClick}
                            >
                                {rightIcon}
                            </span>
                        )}
                    
                </div>
            </div>
            
        </>
    );
};

export default InputElement;