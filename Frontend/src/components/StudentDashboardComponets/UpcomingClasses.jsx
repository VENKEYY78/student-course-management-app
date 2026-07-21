import "./Announcements.css";
import { FaCalendarAlt } from "react-icons/fa";

function UpcomingClasses() {
  const classes = [
    {
      course: "Web Development",
      topic: "JavaScript Basics",
      date: "12 May 2025",
      time: "10:00 AM",
    },
    {
      course: "Database Management",
      topic: "ER Diagram",
      date: "13 May 2025",
      time: "02:00 PM",
    },
    {
      course: "Operating Systems",
      topic: "Process Management",
      date: "14 May 2025",
      time: "11:00 AM",
    },
  ];

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h2>Upcoming Classes</h2>
        <button>View Schedule</button>
      </div>

      {classes.map((item, index) => (
        <div className="card-row" key={index}>
          <div className="left">
            <div className="icon blue">
              <FaCalendarAlt />
            </div>

            <div>
              <h3>{item.course}</h3>
              <p>Topic: {item.topic}</p>
            </div>
          </div>

          <div className="right">
            <strong>{item.date}</strong>
            <p>{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingClasses;