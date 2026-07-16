import { useState } from 'react';
import './BrowseCourse.css';

/* ---------- tiny inline icon set (no external icon library needed) ---------- */
const Icon = {
  Menu: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
    </svg>
  ),
  Bell: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" />
    </svg>
  ),
  Chevron: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
    </svg>
  ),
  Clock: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Users: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Book: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20V4H6.5A2.5 2.5 0 004 6.5v13z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 19.5A2.5 2.5 0 006.5 22H20" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Arrow: ({ dir = 'left' }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      style={{ transform: dir === 'right' ? 'rotate(180deg)' : 'none' }}>
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const MENU_ITEMS = [
  { label: 'Dashboard', icon: '▦' },
  { label: 'Browse Courses', icon: '☰' },
  { label: 'My Courses', icon: '🎓' },
  { label: 'Enrollments', icon: '📋' },
  { label: 'Profile', icon: '👤' },
  { label: 'Settings', icon: '⚙' },
];

const CATEGORY_COLORS = {
  'Computer Science': ['#1f3c88', '#c0392b', '#e67e22'],
  'Data Science': ['#1e8f5f'],
  'Design': ['#c0399f'],
};

function getBadgeColor(course) {
  const palette = CATEGORY_COLORS[course.department] || ['#1f3c88'];
  return palette[course.id % palette.length];
}

function BrowseCourses() {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');
  const [duration, setDuration] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const courses = [
    {
      id: 1,
      title: 'Web Development',
      instructor: 'Srinivasan B',
      department: 'Computer Science',
      duration: '3 Months',
      students: 120,
      description: 'Learn HTML, CSS, JavaScript, React and build modern websites.',
    },
    {
      id: 2,
      title: 'Database Management',
      instructor: 'Priya Sharma',
      department: 'Computer Science',
      duration: '2 Months',
      students: 95,
      description: 'Understand SQL, database design, normalization and more.',
    },
    {
      id: 3,
      title: 'Data Structures',
      instructor: 'Rahul Kumar',
      department: 'Data Science',
      duration: '2 Months',
      students: 60,
      description: 'Master data structures and algorithms with real world examples.',
    },
    {
      id: 4,
      title: 'Java Programming',
      instructor: 'Anita Singh',
      department: 'Computer Science',
      duration: '2 Months',
      students: 40,
      description: 'Learn core Java concepts and build console-based applications.',
    },
    {
      id: 5,
      title: 'Operating Systems',
      instructor: 'Meera Mehta',
      department: 'Computer Science',
      duration: '2 Months',
      students: 45,
      description: 'Learn OS concepts, processes, threads, memory and more.',
    },
    {
      id: 6,
      title: 'UI/UX Design Basics',
      instructor: 'Priya Verma',
      department: 'Design',
      duration: '1 Month',
      students: 35,
      description: 'Learn the basics of UI/UX design and create awesome interfaces.',
    },
    {
      id: 7,
      title: 'Computer Networks',
      instructor: 'Karan Mehta',
      department: 'Computer Science',
      duration: '3 Months',
      students: 50,
      description: 'Understand network protocols, OSI model, TCP/IP and more.',
    },
    {
      id: 8,
      title: 'Python Programming',
      instructor: 'Srinivasan B',
      department: 'Computer Science',
      duration: '3 Months',
      students: 70,
      description: 'Learn Python programming from basics to advanced.',
    },
    {
      id: 9,
      title: 'Web Development',
      instructor: 'Srinivasan B',
      department: 'Computer Science',
      duration: '3 Months',
      students: 120,
      description: 'Learn HTML, CSS, JavaScript, React and build modern websites.',
    },
    { 
      id: 10,
      title: 'Database Management',
      instructor: 'Priya Sharma',
      department: 'Computer Science',
      duration: '2 Months',
      students: 95,
      description: 'Understand SQL, database design, normalization and more.',
    },
    {
      id: 11,
      title: 'Data Structures',
      instructor: 'Rahul Kumar',
      department: 'Data Science',
      duration: '2 Months',
      students: 60,
      description: 'Master data structures and algorithms with real world examples.',
    },
    {
      id: 12,
      title: 'Java Programming',
      instructor: 'Anita Singh',
      department: 'Computer Science',
      duration: '2 Months',
      students: 40,
      description: 'Learn core Java concepts and build console-based applications.',
    },
    {
      id: 13,
      title: 'Operating Systems',
      instructor: 'Meera Mehta',
      department: 'Computer Science',
      duration: '2 Months',
      students: 45,
      description: 'Learn OS concepts, processes, threads, memory and more.',
    },
    {
      id: 14,
      title: 'UI/UX Design Basics',
      instructor: 'Priya Verma',
      department: 'Design',
      duration: '1 Month',
      students: 35,
      description: 'Learn the basics of UI/UX design and create awesome interfaces.',
    },
    {
      id: 15,
      title: 'Computer Networks',
      instructor: 'Karan Mehta',
      department: 'Computer Science',
      duration: '3 Months',
      students: 50,
      description: 'Understand network protocols, OSI model, TCP/IP and more.',
    },
    {
      id: 16,
      title: 'Python Programming',
      instructor: 'Srinivasan B',
      department: 'Computer Science',
      duration: '3 Months',
      students: 70,
      description: 'Learn Python programming from basics to advanced.',
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    const matchesDepartment = department === '' || course.department === department;
    const matchesDuration = duration === '' || course.duration === duration;
    return matchesSearch && matchesDepartment && matchesDuration;
  });

  const coursesPerPage = 8;
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  return (
    <div className="browse-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <div className="logo-icon">🎓</div>
          <div>
            <h2>ABC College</h2>
            <span>Student Portal</span>
          </div>
        </div>

        <nav className="menu">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`menu-item ${item.label === 'Browse Courses' ? 'active' : ''}`}
            >
              <span className="menu-icon">{item.icon}</span>
              {item.label}
            </div>
          ))}
          <hr />
          <div className="menu-item logout">
            <span className="menu-icon">⏻</span>
            Logout
          </div>
          </nav>

        <div className="sidebar-promo">
          <div className="promo-icon">📚</div>
          <h4>Expand Your Knowledge</h4>
          <p>Browse and enroll in courses that help you grow your skills and build your future.</p>
        </div>

      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="header-left">
            <span className="hamburger"><Icon.Menu /></span>
          </div>

          <div className="header-right">
            <div className="notification">
              <Icon.Bell />
              <span className="notif-badge">3</span>
            </div>

            <div className="profile">
              <div className="profile-image">RK</div>
              <div className="profile-info">
                <h4>Rahul Kumar</h4>
                <p>Student</p>
              </div>
              <Icon.Chevron />
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="content">
          <div className="page-heading">
            <h1>Browse Courses</h1>
            <p>Explore available courses and enroll in the ones that interest you.</p>
          </div>

          <div className="search-container">
            <div className="search-input-wrap">
              <Icon.Search />
              <input
                type="text"
                placeholder="Search courses by title, instructor or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select value={department} onChange={(e) => setDepartment(e.target.value)}>
              <option value="">All Departments</option>
              <option>Computer Science</option>
              <option>Data Science</option>
              <option>Design</option>
            </select>

            <select value={duration} onChange={(e) => setDuration(e.target.value)}>
              <option value="">All Durations</option>
              <option>1 Month</option>
              <option>2 Months</option>
              <option>3 Months</option>
              <option>6 Months</option>
            </select>

            <button className="search-btn">
              <Icon.Search /> Search
            </button>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="course-grid">
              {currentCourses.map((course) => (
                <div className="course-card" key={course.id}>
                  <div className="course-image">
                    <Icon.Book />
                  </div>
                    <span
                      className="category-badge"
                      style={{ backgroundColor: getBadgeColor(course) }}
                    >
                      {course.department}
                    </span>
                  <div>
                  </div>
                  <h3>{course.title}</h3>
                  <p className="instructor-line">
                    <Icon.Users /> {course.instructor}
                  </p>
                  <p className="course-desc">{course.description}</p>

                  <div className="course-meta">
                    <span><Icon.Clock /> {course.duration}</span>
                    <span><Icon.Users /> {course.students} Enrolled</span>
                  </div>

                  <div className="card-buttons">
                    <button className="details-btn">View Details</button>
                    <button className="enroll-btn">Enroll</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-course">
              <h3>No Courses Found</h3>
              <p>Try changing the search or filters</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="page-arrow"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <Icon.Arrow dir="left" />
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={currentPage === index + 1 ? 'active-page' : ''}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className="page-arrow"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <Icon.Arrow dir="right" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BrowseCourses;