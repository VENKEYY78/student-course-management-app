

import LoginPortelFeaturesSection from '../LoginPortelFeaturesSection';

import Logo from '../../../assets/favicon.png'

import './index.css'

import {
    HiShieldCheck,
    HiCog6Tooth,
    HiChartBar,
    HiAdjustmentsHorizontal,
  } from "react-icons/hi2";



const features = [
    {
        icon: <HiShieldCheck />,
        featureHeading: "Secure",
        featureParagraph:
            "Advanced authentication and role-based access control.",
    },
    {
        icon: <HiCog6Tooth />,
        featureHeading: "Manage",
        featureParagraph:
            "Manage students, courses, and enrollments efficiently.",
    },
    {
        icon: <HiChartBar />,
        featureHeading: "Monitor",
        featureParagraph:
            "Track academic activities and system performance.",
    },
    {
        icon: <HiAdjustmentsHorizontal />,
        featureHeading: "Control",
        featureParagraph:
            "Maintain complete administrative control of the portal.",
    },
];


const CollegeBranding = ({
    portalWelcome,
    portalWelcomePara
}) => {

    return (
        <>
            <div className='college-info-container'>
                <div className='college-name-and-logo-container'>
                    <img src={Logo} className='college-logo' />
                    <div className='college-name-container'>
                        <h1 className='college-title'>ABC College</h1>
                        <p className='college-title-para'>Learn. Grow. Succeed.</p>
                    </div>
                </div>
                <div className='Portal-Welcome-container'>
                    <h1 className='PortalWelcome'>{portalWelcome}</h1>
                    <p className='PortalWelcomePara'>{portalWelcomePara}</p>
                </div>
                <div className='imported-feature-section-container'>
                    <LoginPortelFeaturesSection features={ features } />
                </div>
            </div>
        </>
    );
};

export default CollegeBranding;





