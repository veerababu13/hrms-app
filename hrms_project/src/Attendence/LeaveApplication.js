import { useState ,useEffect} from "react";
import '../employees/style.css';
const LeaveApplication = () => {
  const [formData, setFormData] = useState({
    employeeName: '',
    empCode: '',
    cardNo: '',
    fromDate: '',
    department:'',
    toDate:'',
    noOfDaysLeave:'',
    leaveType:'',
    leaveStatus:''
    
  });
  const [formDetails, setFormDetails] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [startDate,setStartDate] = useState('');
  const [endDate,setEndDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage,setCurrentPage] = useState(1);
  const [rowsPerPage,setRowsPerPage] = useState(5);
  const [deleteIndex,setDeleteIndex] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    try {
      const detailsArray = JSON.parse(localStorage.getItem('leaveformsubmission')) || [];
      console.log(detailsArray);
      if (Array.isArray(detailsArray)) {
        setFormDetails(detailsArray);
      } 
      else {
        console.error('leaveformsubmission is not an array:', detailsArray);
        // If 'leaveformsubmission' is not an array, set an empty array
        localStorage.setItem('leaveformsubmission', JSON.stringify([]));
        setFormDetails([]);
      }
    } 
    catch (error) {
      console.error('Error parsing leaveformsubmission from localStorage:', error);
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }; 
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        const updatedDetails = [...formDetails];
        updatedDetails[editIndex] = formData;
        setFormDetails(updatedDetails);
        localStorage.setItem('leaveformsubmission', JSON.stringify(updatedDetails));
        setEditIndex(null);
        setFormVisible(false);
        setIsEditing(false);
      } 
      else {
        const details = [...formDetails, formData];
        setFormDetails(details);
        localStorage.setItem('leaveformsubmission', JSON.stringify(details));
        setFormVisible(false);
      }
      setFormData({
        employeeName: '',
        empCode: '',
        cardNo: '',
        fromDate: '',
        department:'',
        toDate:'',
        noOfDaysLeave:'',
        leaveType:'',
        leaveStatus:''
      });
    }
    catch (error) {
       console.error('Error handling form submission:', error);
    }
  };
  //to handle the form visibility
  const formVisibility = () => {
    setFormVisible((visible) => !visible);
    setFormData({
      employeeName: '',
      empCode: '',
      cardNo: '',
      fromDate: '',
      department: '',
      toDate:'',
      noOfDaysLeave:'',
      leaveType:'',
      leaveStatus:''
    });
  };
  //to enable editing the details in the table
  const editForm = (index) => {
    setIsEditing(true);
    setFormData(formDetails[index]);
    setEditIndex(index);
    setFormVisible(true);
  };
  //to delete a row in the table
  const deleterow = (index) => {
    const deleteDetails = [...formDetails];
    deleteDetails.splice(deleteIndex,1);
    setFormDetails(deleteDetails);
    localStorage.setItem('leaveformsubmission',JSON.stringify(deleteDetails));
    setShowDeleteConfirmation(false);
  }
  const filterByDate = () => {
    const filteredDetails = formDetails.filter((item) => {
      const itemDate = new Date(item.fromDate);
      return (
        (startDate === '' || itemDate >= new Date(startDate)) &&
        (endDate  ==='' || itemDate <= new Date(endDate)) &&
        (searchTerm ==='' || item.cardNo === searchTerm)
      );
    });
    return filteredDetails;
  };
  const resetFilter = () => {
       setStartDate('');
       setEndDate('');
       setSearchTerm('');
  }
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filterByDate().slice(indexOfFirstRow,indexOfLastRow);

  const paginate = (pagenumber) =>{
    setCurrentPage(pagenumber);
  }
  const openDeleteConfirmation = (index) => {
    setDeleteIndex(index);
   setShowDeleteConfirmation(true);
  }
  const closeDeleteConfirmation = () => {
    setDeleteIndex(null);
   setShowDeleteConfirmation(false);
  }
    

  
  return(
    <div style={{marginTop:'8%'}}>
      <div  style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className='w-75  m-auto p-0'>
      <div className='float-end'>
        <button className='btn btn-secondary my-1' style={{marginRight:'200px'}} onClick={formVisibility}>
          {formVisible? 'Add Leave Application':'Add Leave Application'}
        </button>
      </div>
      {formVisible && (
        <div className="modal" style={{display:'block'}}>
          <div className="modal-content w-50">
            <span className="close" onClick={formVisibility} style={{cursor:'pointer'}}>&times;</span>
            <form onSubmit={handleSubmit}  className='m-auto' style={{width:'50%'}}>
              <label>employeeName</label>
              <input type='text' className='form-control border border-dark' name='employeeName' value={formData.employeeName} onChange={handleChange} required/><br></br>
              <label>empCode</label>
              <input type='text' className='form-control border border-dark' name='empCode' value={formData.empCode} onChange={handleChange} required/><br></br>
              <label>cardNo</label>
              <input type='text' name='cardNo'  className='form-control border border-dark'value={formData.cardNo} onChange={handleChange} required />
              <label>fromDate</label>
              <input type='date' className='form-control border border-dark'  name='fromDate' value={formData.fromDate} onChange={handleChange} required/><br></br>
              <label>department</label>
              <input type='text' className='form-control border border-dark'  name='department' value={formData.department} onChange={handleChange} required/><br></br>
              <label>toDate</label>
              <input type='date' className='form-control border border-dark'  name='toDate' value={formData.toDate} onChange={handleChange} required/><br></br>
              <label>No of Days Leave</label>
              <input type='text' className='form-control border border-dark'  name='noOfDaysLeave' value={formData.noOfDaysLeave} onChange={handleChange} required/><br></br>
              <label>Leave Type</label>
              <input type='text' className='form-control border border-dark'  name='leaveType' value={formData.leaveType} onChange={handleChange} required/><br></br>
              <label>toDate</label>
              <select  className='form-select border border-dark'  name='leaveStatus' value={formData.leaveStatus} onChange={handleChange} required>
                   <option value='approved' >Approved</option>
                   <option value='not approved'>not approved</option>
                </select>
                <br></br>
              <div className="text-center">
                <button className="btn btn-info" type='submit'>{isEditing?'update':'submit'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className='mt-4 mx-5'>
        <div >
          <h2 className='mx-5'> Leave Application List</h2>
          <p className="mx-5">
          Showing {indexOfFirstRow + 1} to {Math.min(indexOfLastRow, filterByDate().length)} of {filterByDate().length} 
        </p>
            
        </div>
      </div>
      <div className='row'>
          <div className='col-sm-4'>
            <div className='float-end mt-1'>
              <label>date from</label>
              <input type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
            </div>
          </div>
          <div className='col-sm-6'>
            <label>date upto</label>
            <div className='d-flex'>
              <input type='date' className='w-25' value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
              <button className='mx-1 btn btn-secondary' onClick={() => filterByDate}>filter</button>
              <button className='btn btn-light' onClick={() => resetFilter()} >reset</button>
            </div>
          </div>
        </div>
        <div className='w-25 search-bar my-2' style={{ marginLeft: '600px' }}>
        <label>
          <p className="h6 d-inline">Filter by cardNo:</p>
          <input
            className='border border-dark my-1 form-control'
            type='text'
            value={searchTerm}
            onChange={(e) =>setSearchTerm(e.target.value)}
              
           /> 
           
        </label>
      </div>
      <div>
        <table className="employeeListTable p-5">
          <thead >
            <th>employeeName</th>
            <th>empCode</th>
            <th>cardNo</th>
            <th>department</th>
            <th>fromDate</th>
            <th>toDate</th>
            <th>No of Days Leave</th>
            <th>Leave Type</th>
            <th>Leave Status</th>
            <th>action</th>
          </thead>
          <tbody>
            {currentRows.map((fileld,index) => (
              <tr key={index}>
                <td>{fileld.employeeName}</td>
                <td>{fileld.empCode}</td>
                <td>{fileld.cardNo}</td>
                <td>{fileld.fromDate}</td>
                <td>{fileld.department}</td>
                <td>{fileld.fromDate}</td>
                <td>{fileld.toDate}</td>
                <td>{fileld.noOfDaysLeave}</td>
                <td>{fileld.leaveType}</td>
                <td>{fileld.leaveStatus}</td>
                <td><button className="btn btn-success" onClick={() => editForm(index)}><i className="fa-solid fa-pen-to-square"></i> </button>
                <button className="btn btn-danger mx-1" onClick={() => openDeleteConfirmation(index)}> <i className="fa-solid fa-trash"></i> </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center my-2">
       
          {Array.from({ length: Math.ceil(filterByDate().length / rowsPerPage) }, (_, index) => (
            <span className='bg-secondary mx-1 px-1 text-white ' key={index} onClick={() => paginate(index + 1)} style={{cursor:'pointer'}}>
            {index + 1}
          </span>
          ))}
        
      </div>
      {showDeleteConfirmation && (
        <div className="popup">
          <div className="popup-content">
          <p>Are you sure you want to delete this record?</p>
          <button className="btn btn-danger mx-1" onClick={deleterow}>Yes</button>
          <button className="btn btn-info mx-1" onClick={closeDeleteConfirmation}>No</button>
        </div>
        </div>
      )}
      </div>
    
    </div>
  )
}
export default LeaveApplication;