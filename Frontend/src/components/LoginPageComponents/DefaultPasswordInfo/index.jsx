
import { FaCircleInfo } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";

import './index.css'

const DefaultPasswordInfo = ({
    defaultPasswordInfoHeading,
    defaultPasswordInfoPara
}) => {

    return (
        <>
            <div className='default-password-info-container'>
               < FaCircleInfo className="FaCircleInfo"/>
                <div className='default-password-info'>
                    <h1 className='default-password-heading'>{defaultPasswordInfoHeading}</h1>
                    <p className='default-password-paragragh'>{defaultPasswordInfoPara}</p>
                </div>
                < FaKey className="FaKey" />
            </div>
        </>
    );
};

export default DefaultPasswordInfo;






