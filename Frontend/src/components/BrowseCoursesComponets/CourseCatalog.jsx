

import Courses from "./Courses.jsx";
import CourseFilters from "./CourseFilters.jsx";

import coursesData from './coursesData.js';

import { useState } from 'react';



function CourseCatalog() {

   

    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("");
    const [duration, setDuration] = useState("");

    const filteredCourses = coursesData.filter((course) => {

        const matchSearch = course.title.toLowerCase().includes(search.toLowerCase()) ||
            course.instructor.toLowerCase().includes(search.toLowerCase());

        const matchDepartment =
            department === "" || course.department === department;


        const matchDuration =
            duration === "" || course.duration === duration;
        return matchSearch && matchDepartment && matchDuration;
    }
    );


    const [currentPage, setCurrentPage] = useState(1);


    return (
        <>
            <section className="courses-catalog-section">
                <CourseFilters
                    search={search}
                    setSearch={setSearch}
                    department={department}
                    setDepartment={setDepartment}
                    duration={duration}
                    setDuration={setDuration}
                    setCurrentPage={setCurrentPage}
                />

                <Courses 
                    filteredCourses={filteredCourses}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />


            </section>
        </>
    );
}

export default CourseCatalog;