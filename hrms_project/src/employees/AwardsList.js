import React, { useState, useEffect } from 'react';
import './style.css';

const AwardList = () => {

  const [formData, setFormData] = useState({
    employeeName: '',
    employeeNo: '',
    awardName: '',
    gift: '',
    awardDate: '',
  });


  const [formDetails, setFormDetails] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditing,setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [showDelete,setShowDelete] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const rowsPerPage = 5;

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('awardList')) || [];
    setFormDetails(userData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      const updatedDetails = [...formDetails];
      updatedDetails[editIndex] = formData;
      setFormDetails(updatedDetails);
      localStorage.setItem('awardList', JSON.stringify(updatedDetails));
      setEditIndex(null);
      setIsEditing(false);
      setIsFormVisible(false);
    } else {
      const details = [...formDetails,formData];
      setFormDetails(details);
      localStorage.setItem('awardList', JSON.stringify(details));
      setIsFormVisible(false);
    }
    setFormData({
      employeeName: '',
      employeeNo: '',
      awardName: '',
      gift: '',
      awardDate: '',
    });
    
  };

  const toggleFormVisibility = () => {
    setIsFormVisible((prevVisibility) => !prevVisibility);
    setEditIndex(null);
    setFormData({
      employeeName: '',
      employeeNo: '',
      awardName: '',
      gift: '',
      awardDate: '',
    });
  };

  const editForm = (index) => {
    setIsEditing(true);
    setFormData(formDetails[index]);
    setEditIndex(index);
    setIsFormVisible(true);
  };

  
  const deleteTableRow = () => {
    const deleteDetails = [...formDetails];
    deleteDetails.splice(deleteIndex,1);
    setFormDetails(deleteDetails);
    localStorage.setItem('awardList', JSON.stringify(deleteDetails));
    setShowDelete(false);
  }

  const openDeleteConfirmation = (index) => {
    setDeleteIndex(index);
    setShowDelete(true);
  }

  const closeDeleteConfirmation = () => {
    setDeleteIndex(null);
    setShowDelete(false);
  }

  const endRow = currentPage * rowsPerPage ;
  const startRow = endRow - rowsPerPage;

  const filteredDetails = formDetails.filter((detail) => {
    const awardDate = new Date(detail.awardDate);
    return (
      (startDate === '' || awardDate >= new Date(startDate)) &&
      (endDate === '' || awardDate <= new Date(endDate)) &&
      detail.employeeNo.includes(searchTerm)
    );
  });

   const visibleDetails = filteredDetails.slice(startRow, endRow);
  const handleResetFilter = () => {
    setStartDate('');
    setEndDate('');
    setSearchTerm('');
    setCurrentPage(1); // Reset to the first page after resetting
  };

  return (
    <div style={{marginTop:'8%'}}>
      <div  style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className='w-75  m-auto p-0'>
        <div className='float-end'>
          <button className='btn btn-secondary my-1' style={{marginRight:'200px'}} onClick={toggleFormVisibility}>
            {isFormVisible ? 'Add Awards' : 'Add Awards'}
          </button>
        </div>
        {isFormVisible && (
          <div className="modal" style={{ display: 'block' }}>
            <div className="modal-content" style={{ width: '50%' }}>
              <span className="close" onClick={toggleFormVisibility} style={{cursor:'pointer'}}>
                &times;
              </span>
              <form onSubmit={handleSubmit} style={{ width: '50%', margin: '0 auto' }}>
                <label>
                 Employee Name:
                  <input
                    type="text"
                    name="employeeName"
                    className='form-control border border-dark'
                    value={formData.employeeName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                  Employee No:
                  <input
                    type="text"
                    name="employeeNo"
                    className='form-control border border-dark'
                    value={formData.employeeNo}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                 Award Name:
                  <input
                    type="text"
                    name="awardName"
                    className='form-control border border-dark'
                    value={formData.awardName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                 Gift:
                  <input
                    type="text"
                    className='form-control border border-dark'
                    name="gift"
                    value={formData.gift}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                  Award Date:
                  <input
                    type="date"
                    name="awardDate"
                    className='form-control border border-dark'
                    value={formData.awardDate}
                    onChange={handleChange}
                    required
                  />
                </label>
                <br />
                <div className='text-center'>
                <button className='btn btn-info' type="submit">{editIndex !== null ? 'Update' : 'Submit'}</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className='mt-5 mx-5'>
          <div style={{marginLeft:'10%'}}>
            <h2 className=''>Award List</h2>
            Showing {startRow + 1} to {Math.min(endRow, filteredDetails.length)} of {filteredDetails.length} 
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-4'>
            <div className='float-end mt-2'>
              <label>date from</label>
              <input type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
            </div>
          </div>
          <div className='col-sm-6'>
            <label>date upto</label>
            <div className='d-flex'>
              <input type='date' className='w-25' value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
              <button className='mx-1 btn btn-secondary' onClick={() => filteredDetails}>filter</button>
              <button className='btn btn-light' onClick={handleResetFilter}>reset</button>
            </div>
          </div>
        </div>
        
      <div className='w-25 search-bar my-1' style={{ marginLeft: '600px' }}>
        <label>
          Search by Employee No:
          <input
            className='border border-dark my-1'
            type='text'
            value={searchTerm}
            onChange={(e) =>setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      {formDetails.length > 0 && (
        <div>
          <table className='employeeListTable '>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee No</th>
                <th>Award Name</th>
                <th>Gift</th>
                <th>Award Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {visibleDetails.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.employeeName}</td>
                  <td>{detail.employeeNo}</td>
                  <td>{detail.awardName}</td>
                  <td>{detail.gift}</td>
                  <td>{detail.awardDate}</td>
                  <td>
                    <button
                      type="button"
                      className='btn btn-success'
                      onClick={() => editForm(index)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                      type="button"
                      className='btn btn-danger mx-1'
                      onClick={() => openDeleteConfirmation(index)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      { showDelete && (
        <div className="popup">
          <div className="popup-content">
            <p>Are you sure you want to delete this entry?</p>
            <button  className='btn btn-danger mx-1' onClick={deleteTableRow}>Yes</button>
            <button className='btn btn-info mx-1' onClick={closeDeleteConfirmation}>No</button>
          </div>
        </div>
      )}

      <div className="text-center my-2">
        {Array.from({ length: Math.ceil(filteredDetails.length / rowsPerPage) }, (_, index) => (
          <span className='bg-secondary mx-1 px-1 text-white ' key={index} onClick={() => setCurrentPage(index + 1)} style={{cursor:'pointer'}}>
            {index + 1}
          </span>
       ))} 
      </div>
    </div>

    </div>
  );
};

export default AwardList;
