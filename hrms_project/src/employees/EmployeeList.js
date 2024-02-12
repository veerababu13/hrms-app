import {useState, useEffect} from 'react';
import React from 'react';
function EmployeeList(){
  
  const [allUserDataArray, setAllUserDataArray] = useState(
    JSON.parse(localStorage.getItem('allUserData')) || []);
    const [filter, setFilter] = useState('all');
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 5;
    const handleDelete = (userKey) => {
    // Remove the item with the specified userKey from local storage
    const updatedData = allUserDataArray.filter((data) => data.userKey !== userKey);
    localStorage.setItem('allUserData', JSON.stringify(updatedData));
    // Update the state to trigger a re-render
    setAllUserDataArray(updatedData);
  };
  
  useEffect(() => {
    const updatedData =
      filter === 'all'
        ? allUserDataArray
        : allUserDataArray.filter(({ formData }) => formData.department.toLowerCase() === filter.toLowerCase());
         setFilteredData(updatedData);
    }, [allUserDataArray, filter]
  );

  const filteredDataWithSearch =
  searchTerm.trim() === ''
    ? filteredData:filteredData.filter(({ formData }) =>formData.employeeNo.toLowerCase().includes(searchTerm.toLowerCase()));
  const departments = [
   'all',
    'sales',
    'administrator',
    'accounts',
    'it'
    // Add more departments as needed
  ];

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = filteredDataWithSearch.slice(indexOfFirstResult, indexOfLastResult);
  const totalPages = Math.ceil(filteredDataWithSearch.length / resultsPerPage);
  if(currentResults.length<=0) {
    return (
      <div className='text-center h1'>
        no data to show
      </div>
    )
  }

  if(currentResults.length > 0) {
    return(
      <div className='mx-3'>
        <div className='mt-5 '>
          <h5>Employeelist</h5>
            <p className='small'>Showing {indexOfFirstResult + 1} - {Math.min(indexOfLastResult, filteredDataWithSearch.length)} of {filteredDataWithSearch.length} results</p>
            <p className='p-0 m-0  h6'>company</p>
            <select
              id="departmentFilter"
              className='five  p-1'
              value={filter}
              onChange={(e) => setFilter(e.target.value)}>
            
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
            <button className='btn btn-dark text-white mx-1'>filter</button>
            <div className='text-end'>
              <input
                type="text"
                placeholder="Search by Employee No"
                className='w-25 border border-dark my-1'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <table className='employeeListTable mb-1' border={1}>
              <thead>
                <th>profile</th>
                <th>joinDate</th>
                <th>Emp no</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Designation</th>
                <th>email</th>
                <th>mobile</th>
                <th>department</th>
                <th>delete</th>
              </thead>
              <tbody>
             {currentResults.map(({ userKey, formData, imageData }, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td>
                      {imageData && (
                        <img src={imageData} alt="Stored" style={{ maxWidth: '50px', borderRadius: '50%' }} />
                      )}
                    </td>
                    <td>{formData?.joinDate}</td>
                    <td>{formData?.employeeNo}</td>
                    <td>{formData?.fullName}</td>
                    <td>{formData?.gender}</td>
                    <td>{formData?.designation}</td>
                    <td>{formData?.email}</td>
                    <td>{formData?.mobile}</td>
                    <td>{formData?.department}</td>
                    <td>
                      <button onClick={() => handleDelete(userKey)} className='text-danger bg-dark'>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                  {index !== currentResults.length - 1 && (
                    <tr style={{ borderBottom: '1px solid #ccc' }}>
                      <td colSpan={2} style={{ padding: 0, margin: 0 }}>
                        {}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
         </table>
         <div className='text-end'>
            {Array.from({ length: totalPages }, (_, index) => (
              <span className='bg-secondary m-1 px-1 text-white ' key={index} onClick={() => setCurrentPage(index + 1)} style={{cursor:'pointer'}}>
                {index + 1}
              </span>
            ))}
         </div>
        </div>
      </div>
    )
  }
        
} 
export default EmployeeList;
