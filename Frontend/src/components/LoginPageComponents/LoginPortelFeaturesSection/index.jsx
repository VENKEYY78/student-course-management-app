


import './index.css'

const LoginPortelFeaturesSection = ({ features }) => {

    return (
        <>
            <div className="login-portal-features-section-container">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                    <span className="login-portal-feature-icon">
                        {feature.icon}
                    </span>

                    <h1 className="feature-heading">
                        {feature.featureHeading}
                    </h1>

                    <p className="feature-paragraph">
                        {feature.featureParagraph}
                    </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default LoginPortelFeaturesSection;









