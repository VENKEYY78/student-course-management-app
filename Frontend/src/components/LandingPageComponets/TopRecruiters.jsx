import './TopRecruiters.css';

import tcs from '../../assets/recruiters/tcs.png';
import infosys from '../../assets/recruiters/infosys.png';
import wipro from '../../assets/recruiters/wipro.png';
import accenture from '../../assets/recruiters/accenture.png';
import capgemini from '../../assets/recruiters/capgemini.png';
import amazon from '../../assets/recruiters/amazon.png';
import hcl from '../../assets/recruiters/hcl.png';
import cognizant from '../../assets/recruiters/cognizant.png';

function TopRecruiters() {
  const recruiters = [
    { name: 'TCS', logo: tcs },
    { name: 'Infosys', logo: infosys },
    { name: 'Wipro', logo: wipro },
    { name: 'Accenture', logo: accenture },
    { name: 'Capgemini', logo: capgemini },
    { name: 'Amazon', logo: amazon },
    { name: 'HCL', logo: hcl },
    { name: 'Cognizant', logo: cognizant },
  ];

  return (
    <section className="recruiters-section">
      <h2>Our Top Recruiters</h2>
      <div className="recruiters-grid">
        {recruiters.map((r, i) => (
          <div className="recruiter-card" key={i}>
            <img src={r.logo} alt={r.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopRecruiters;
