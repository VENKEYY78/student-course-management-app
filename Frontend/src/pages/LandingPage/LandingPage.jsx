import '../../styles/LandingPage.css';

import Header from '../../components/LandingPageComponets/HeaderSection/Header';
import Banner from '../../components/LandingPageComponets/BannerSection/Banner';
import CoursesSection from '../../components/LandingPageComponets/CoursesSection/CoursesSection';
import StatsSection from '../../components/LandingPageComponets/StatusSection/StatsSection';
import TopRecruiters from '../../components/LandingPageComponets/TopRecruiters/TopRecruiters';
import Footer from '../../components/LandingPageComponets/FooterSection/Footer';

const LandingPage = () => {
    return (
        <>
            <Header />
            <Banner />
            <CoursesSection />
            <StatsSection />
            <TopRecruiters />
            <Footer />
        </>
    );
}
export default LandingPage;
