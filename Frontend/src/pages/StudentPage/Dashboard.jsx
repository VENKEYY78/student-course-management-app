import '../../styles/Dashboard.css';
import SideBar from "../../components/SidebarComponets/SideBar";
import Header from "../../components/StudentDashboardComponets/Header";
import Status from '../../components/StudentDashboardComponets/Status';
import EnrolledCourses from '../../components/StudentDashboardComponets/EnrolledCourses';
import Announcements from '../../components/StudentDashboardComponets/Announcements';
import UpcomingClasses from '../../components/StudentDashboardComponets/UpcomingClasses';
import Footer from '../../components/Footer/Footer';

function Dashboard() {
    return (
        <>
            <div className="dashboard-layout">
                <SideBar />

                <main className="dashboard-main">
                    <Header
                        title="Welcome back, Veera! 👋🏽"
                        subtitle="Here's what's happening with your learning today."
                    />
                    <Status />
                    <EnrolledCourses />
                    <div className="bottom-section">
                        <Announcements />
                        <UpcomingClasses />
                    </div>
                    <Footer />
                </main>

            </div>

        </>
    );
}

export default Dashboard