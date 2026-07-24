import './Banner.css';

import BannerImg from '../../../assets/banner1.png';
import Arrow from '../../../assets/icons/rightArrow.png';
import BannerImg from '../../assets/banner.png';
import Arrow from '../../assets/icons/rightArrow.png';

import { NavLink } from 'react-router-dom';
const Banner = () => {
    return (
        <>
            <div className='container'>

                <div className='banner'>
                    <img src={BannerImg} alt="" />
                </div>
                <div className='banner-title'>
                    <h1 className='welcome-title'>Welcome to <span className='clg-name'>ABC College</span></h1>
                    <p className='welcome-quote'>Empowering students with quality education, industry-oriented courses and a brighter future.</p>
                    <NavLink className='login-btn' to='login/'><img src={Arrow} alt="right-arrow" width={30} height={20} />Longin to continue</NavLink>
                </div>
            </div>
        </>
    );
}

export default Banner;