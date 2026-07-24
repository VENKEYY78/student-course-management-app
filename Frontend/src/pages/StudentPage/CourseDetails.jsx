import SideBar from "../../components/SidebarComponets/SideBar";
import Header from "../../components/StudentDashboardComponets/Header";

import '../../styles/CourseDetails.css';



function CoursesDetails() {

    
    return (
        <>
            <div className="courses-details-layout">
                <SideBar />
                <main className="courses-details-main">
                    <Header
                        title=" "
                        subtitle=""
                    />

                  
                </main>

            </div>
        </>
    );
}

export default CoursesDetails;