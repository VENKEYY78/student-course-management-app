import './StatsSection.css';
import coursesIcon from '../../../assets/icons/graduation_cap.png';
import studentsIcon from '../../../assets/icons/students.png';
import passedIcon from '../../../assets/icons/passed.png';
import branchesIcon from '../../../assets/icons/branches.png';
import placementsIcon from '../../../assets/icons/placements.png';

const StatsSection = () => {
  const stats = [
    { icon: coursesIcon, number: '120+', label: 'Courses', color: '#1a4fa3' },
    { icon: studentsIcon, number: '5000+', label: 'Students Enrolled', color: '#2e8b57' },
    { icon: passedIcon, number: '3000+', label: 'Passed Out Students', color: '#e67e22' },
    { icon: branchesIcon, number: '15+', label: 'Branches', color: '#8e44ad' },
    { icon: placementsIcon, number: '95%', label: 'Placements', color: '#16a085' },
  ];

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-card" key={i} style={{ borderColor: `${s.color}20`, backgroundColor: `${s.color}15` }}>
            <img src={s.icon} alt={s.label} />
            <span>
              <h3 style={{ color: s.color }}>{s.number}</h3>
              <p>{s.label}</p>
            </span>

          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
