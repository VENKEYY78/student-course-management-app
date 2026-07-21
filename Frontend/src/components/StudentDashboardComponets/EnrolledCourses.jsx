import "./EnrolledCourses.css";

import {
  FaCode,
  FaDatabase,
  FaCog,
  FaUserTie,
  FaCalendarAlt,
  FaEye,
  FaEllipsisV,
  FaArrowRight,
} from "react-icons/fa";

function EnrolledCourses() {
  const courses = [
    {icon: FaCode,title: "Web Development",code: "WD101", instructor: "Mr. Sharma",date: "10 May 2025",progress: 90, color: "#3B82F6",},
    {icon: FaDatabase,title: "Database Management",code: "DB201",instructor: "Mr. Iyer",date: "15 May 2025",progress: 75,color: "#16A34A",},
    {icon: FaCog,title: "Operating Systems",code: "OS301",instructor: "Ms. Mehta",date: "18 May 2025",progress: 60,color: "#8B5CF6",},
  ];

  return (
    <section className="courses">
      <div className="courses-header">
        <h2>My Enrolled Courses</h2>

        <button className="view-all">
          View All Courses
          <FaArrowRight />
        </button>
      </div>

      <div className="table-head">
        <p>Course</p>
        <p>Instructor</p>
        <p>Joined On</p>
        <p>Progress</p>
        <p>Action</p>
      </div>

      {courses.map((course, index) => {
        const Icon = course.icon;

        return (
          <div className="course-row" key={index}>
            <div className="course-info">
              <div
                className="course-icon"
                style={{
                  color: course.color,
                  background: `${course.color}15`,
                }}
              >
                <Icon size={30} />
              </div>

              <div>
                <h3>{course.title}</h3>
                <span>{course.code}</span>
              </div>
            </div>

            <div className="instructor">
              <FaUserTie />
              <span>{course.instructor}</span>

              <small>Instructor</small>
            </div>

            <div className="joined">
              <FaCalendarAlt />
              {course.date}
            </div>

            <div className="progress">
              <strong>{course.progress}%</strong>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="action">
              <button className="details">
                <FaEye />
                View Details
              </button>

              <FaEllipsisV className="menu" />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default EnrolledCourses;