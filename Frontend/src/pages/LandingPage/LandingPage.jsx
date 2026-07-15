import '../../styles/LandingPage.css';

import Header from '../../components/LandingPageComponets/Header';
import Banner from '../../components/LandingPageComponets/Banner';
import CoursesSection from '../../components/LandingPageComponets/CoursesSection';
import StatsSection from '../../components/LandingPageComponets/StatsSection';
import TopRecruiters from '../../components/LandingPageComponets/TopRecruiters';
import Footer from '../../components/LandingPageComponets/Footer';

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
