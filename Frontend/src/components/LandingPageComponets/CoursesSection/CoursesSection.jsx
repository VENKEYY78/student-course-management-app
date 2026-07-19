import './CoursesSection.css';

import csImg from '../../../assets/cse.jpg';
import ecImg from '../../../assets/eee.jpg';
import mechImg from '../../../assets/mech.jpg';
import civilImg from '../../../assets/civil.jpg';
import businessImg from '../../../assets/cse.jpg';

import { NavLink } from 'react-router-dom';


const CoursesSection = () => {
    const courses = [
        { title: 'Computer Science Engineering', img: csImg },
        { title: 'Electronics & Communication', img: ecImg },
        { title: 'Mechanical Engineering', img: mechImg },
        { title: 'Civil Engineering', img: civilImg },
        { title: 'Business Administration', img: businessImg },

    ];
    return (
        <>
            <section className="courses-section">
                <h2>Explore Our Popular Courses</h2>
                <div className="courses-grid" id='courses'>
                    {courses.map((course, index) => (
                        <div className="course-card" key={index}>
                            <img src={course.img} alt={course.title} />

                            <h3>{course.title}</h3>
                            <NavLink to="/my-courses" className="view-link">View Course →</NavLink>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default CoursesSection