
import './CourseFilters.css';

  // import { CiSearch } from "react-icons/ci";

  function CourseFilters({
    search,
    setSearch,
    department,
    setDepartment,
    duration,
    setDuration,
    setCurrentPage
    
  }

  ) {
    return (
      <>
        <div className='filter-container'>
          <div className='browse-filter-title'>
            <p>Browse Courese</p>
            <p>Expore available courses and enroll in the ones that interest you.</p>
          </div>
          <div className='filter-inputs'>

            <input type="text" placeholder="Search courses by title, instructor or keyword..." className='search-title'
             value={search}
             onChange={(e)=>{
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
           
             />
            <select className='department-input'
            value={department}
            onChange={(e)=>{setDepartment(e.target.value);
              setCurrentPage(1);
            }}
            >
              <option value="">All Departments</option>
              <option>Computer Science</option>
              <option>Data Science</option>
              <option>Design</option>
            </select>

            <select className='duration-input'
             value={duration}
             onChange={(e)=>{setDuration(e.target.value);
              setCurrentPage(1);

             }}>
              <option value="">All Durations</option>
              <option>1 Month</option>
              <option>2 Months</option>
              <option>3 Months</option>
              <option>6 Months</option>
            </select>

            {/* <button className='filter-search-btn'>
              <CiSearch />
              <span> Search</span>
              
            </button> */}

          </div>
        </div>
      </>
    );
  }
  export default CourseFilters;