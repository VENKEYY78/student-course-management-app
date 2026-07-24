import '../../styles/BrowseCourses.css';

import SideBar from "../../components/SidebarComponets/SideBar";
import Header from "../../components/StudentDashboardComponets/Header";
import CourseCatalog from '../../components/BrowseCoursesComponets/CourseCatalog';


function BrowseCourse() {
    return (
        <>
            <div className="browse-courses-layout">
                <SideBar />
                <main className="browse-courses-main">

                    <Header
                        title="Course Catalog"
                        subtitle="Learning today is the foundation of tomorrow's success. Start your journey with the right course."
                    />
                    <CourseCatalog/>
                </main>

            </div>
        </>
    );

}
export default BrowseCourse;
