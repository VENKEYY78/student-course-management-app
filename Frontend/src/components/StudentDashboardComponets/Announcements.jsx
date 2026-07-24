import "./Announcements.css";
import { FaBullhorn } from "react-icons/fa";

function Announcements() {
  const announcements = [
    {
      title: "Holiday Notice",
      description: "The college will remain closed on 15th May 2025.",
      date: "10 May 2025",
      color: "#8B5CF6",
    },
    {
      title: "New Course Added",
      description: "Machine Learning course is added. Check it out!",
      date: "08 May 2025",
      color: "#EF4444",
    },
    {
      title: "Exam Schedule Released",
      description: "Check your exam schedule in the announcements section.",
      date: "05 May 2025",
      color: "#EF4444",
    },
  ];

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h2>Recent Announcements</h2>
        <button>View All</button>
      </div>

      {announcements.map((item, index) => (
        <div className="card-row" key={index}>
          <div className="left">
            <div
              className="icon"
              style={{ background: `${item.color}20`, color: item.color }}
            >
              <FaBullhorn />
            </div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>

          <span>{item.date}</span>
        </div>
      ))}
    </div>
  );
}

export default Announcements;