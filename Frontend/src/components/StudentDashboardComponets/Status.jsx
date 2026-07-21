import './Status.css';
import { FaBookOpen } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function Status() {
    const stats = [
        { icon: FaBookOpen, number: '3', title: 'My Courses', label: 'Enrolled Courses', color: '#1a4fa3' },
        { icon: FaCheckSquare, number: '15', title: 'Total Enrollments', label: 'All Your Enrollments', color: '#2e8b57' },
        { icon: FaCalendarAlt, number: '3', title: 'Upcoming Classes', label: 'Next 7 Days', color: '#8e44ad' },
        { icon: FaUserCircle, number: '85%', title: 'Branches', label: 'Across All Courses', color: '#CE8239' },
    ];

    return (
        <section className="stu-db-stats-section">
            <div className="stu-db-stats-grid">
                {stats.map((s, i) => {
                    const Icon = s.icon;

                    return (
                        <div
                            className="stu-db-stat-card"
                            key={i}
                            style={{
                                borderColor: `${s.color}20`,
                                backgroundColor: `${s.color}10`,
                            }}
                        >
                            <div
                                className="icon-box"
                                style={{
                                    backgroundColor: `${s.color}20`,
                                    color: s.color,
                                }}
                            >
                                <Icon size={30} />
                            </div>
                            <span className='stu-status-info'>
                                <h3 style={{ color: s.color }}>{s.number}</h3>
                                <p>{s.title}</p>
                                <p>{s.label}</p>
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Status;