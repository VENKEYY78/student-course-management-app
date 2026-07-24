import './Courses.css';

import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";


function Courses({filteredCourses}) {


    const coursesPerPage = 8;

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

    const lastCourseIndex = currentPage * coursesPerPage;
    const firstCourseIndex = lastCourseIndex - coursesPerPage;

    const currentCourses = filteredCourses.slice(firstCourseIndex, lastCourseIndex);

    return (
        <>
            <div className='courses-catalog-grid'>
                {currentCourses.map((course) => (
                    <div className="course-catalog-card" key={course.id}>
                        <div className="course-image">
                            <img src={course.img} alt={course.title} />
                        </div>

                        <div className='course-title'>
                            <p style={{ backgroundColor: `${course.color}` }}>{course.department}</p>
                            <p>{course.title}</p>
                        </div>
                        <div className='course-content'>

                            <p>
                                <FaRegUser />
                                <span>{course.instructor}</span>
                            </p>

                            <p>{course.description}</p>
                            <div className="course-meta">
                                <p>
                                    <FaRegClock />
                                    <span>{course.duration}</span>
                                </p>

                                <p>
                                    <LuUsers />
                                    <span>{course.students} Enrolled</span>
                                </p>
                            </div>

                        </div>
                        <div className="course-buttons">
                            <NavLink className="course-view-link" to={`/student/course/${course.id}`}>
                                View Details
                            </NavLink>

                            <NavLink className="course-enroll-link">
                                Enroll
                            </NavLink>
                        </div>
                    </div>
                ))}

            </div>
            <div className="pagination">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    &lt;
                </button>

                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        className={currentPage === index + 1 ? "active" : ""}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    &gt;
                </button>
            </div>
        </>
    );
}
export default Courses