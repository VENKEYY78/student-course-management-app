import '../../styles/BrowseCourses.css';
import SideBar from "../../components/SidebarComponets/SideBar";
import Header from "../../components/StudentDashboardComponets/Header";

function BrowseCourse() {
    return (
        <>
            <div className="browse-courses-layout">
                <SideBar />
                <main className="browse-courses-main">
                    <Header
                        // title="Browse Courses"
                        // subtitle="Discover and enroll in available courses."
                    />

                </main>

            </div>
        </>
    );

}
export default BrowseCourse;
