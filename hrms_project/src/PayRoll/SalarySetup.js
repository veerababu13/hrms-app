import { useState,useEffect } from "react";
import './salaraysetup.css'
function SalarySetup() {
    const [formData,setFormData] = useState({
        employeeName:'',
        empCode:'',
        cardNo:'',
        department:'',
        designation:'',
        companyName:'',
        salaryAmount:'',
        effectiveDate:''
    });
    const [formDetails,setFormDetails] = useState([]);
    const [formVisibile,setFormVisible] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [isEditing,setIsEditing] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [showDeleteConfirmation,setShowDeleteConfirmation] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    const handleChange = (e) => {
        const{name,value} = e.target;
        setFormData((prevdata) => ({
            ...prevdata,
            [name]:value
        }));
    }
    useEffect(() => {
        const salarydetailsArray = JSON.parse(localStorage.getItem('salarysetup')) || [];
        setFormDetails(salarydetailsArray);
    },[])
    const handleSubmit = (event) => {
        event.preventDefault();
        if(isEditing){
            const updatedDetails = [...formDetails];
            updatedDetails[editIndex] = formData;
            setFormDetails(updatedDetails);
            localStorage.setItem('salarysetup', JSON.stringify(updatedDetails));
            setEditIndex(null);
            setFormVisible(false);
            setIsEditing(false);
        }
        else{
        const details = [...formDetails,formData];
        setFormDetails(details);
        localStorage.setItem('salarysetup', JSON.stringify(details));
        console.log(details);
        setFormVisible(false);
        }
        setFormData({
            employeeName:'',
            empCode:'',
            cardNo:'',
            department:'',
            designation:'',
            companyName:'',
            salaryAmount:'',
            effectiveDate:''
        })
    }
    const edit = (index) => {
        setIsEditing(true);
        setFormData(formDetails[index]);
        setEditIndex(index);
        setFormVisible(true);
    }
    const deleterow = () => {
        const deletedetails = [...formDetails];
        deletedetails.splice(deleteIndex,1);
        setFormDetails(deletedetails);
        localStorage.setItem('salarysetup',JSON.stringify(deletedetails));
        setShowDeleteConfirmation(false);
    }
    const openDeleteConfirmation = (index) => {
        setDeleteIndex(index);
        setShowDeleteConfirmation(true);
    }
    const closeDeleteConfirmation = () => {
        setDeleteIndex(null);
        setShowDeleteConfirmation(false);
        console.log('closed');
    }
    const toggleForm = () => {
        setFormVisible((previsible) => !previsible);
        setFormData({
        employeeName:'',
        empCode:'',
        cardNo:'',
        department:'',
        designation:'',
        companyName:'',
        salaryAmount:'',
        effectiveDate:''
        })
    }
    const filteredDetails = formDetails.filter(detal => {
        return(
            detal.employeeName.includes(searchTerm)
        )
    })
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredDetails.slice(indexOfFirstRow,indexOfLastRow);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
    
    return(
        <div className="container-fluid">
            <button onClick={toggleForm} className="float-end">
                {formVisibile?'add salary setup': 'add salary setup'}
            </button>
          {formVisibile &&
            <div className="showForm" >
               <div className="showForm-content">
                <span className="close" onClick={toggleForm} style={{cursor:'pointer'}}>&times;</span>
               <form>
                    <label>EmployeeName</label>
                    <input type="text" className='form-control border border-dark' name='employeeName' value={formData.employeeName} onChange={handleChange} />
                    <label>empCode</label>
                    <input type="text" className='form-control border border-dark' name='empCode' value={formData.empCode} onChange={handleChange} />
                    <label>cardNo</label>
                    <input type="text" className='form-control border border-dark' name='cardNo' value={formData.cardNo} onChange={handleChange} />
                    <label>department</label>
                    <input type="text" className='form-control border border-dark' name='department' value={formData.department} onChange={handleChange} />
                    <label>designation</label>
                    <input type="text" className='form-control border border-dark' name='designation' value={formData.designation} onChange={handleChange} />
                    <label>companyName</label>
                    <input type="text" className='form-control border border-dark' name='companyName' value={formData.companyName} onChange={handleChange} />
                    <label>salaryAmount</label>
                    <input type="text" className='form-control border border-dark' name='salaryAmount' value={formData.salaryAmount} onChange={handleChange} />
                    <label>effectiveDate</label>
                    <input type="date" className='form-control border border-dark' name='effectiveDate' value={formData.effectiveDate} onChange={handleChange} />
                    <button className="btn btn-primary"  onClick={handleSubmit}>{ isEditing? 'update':'submit'}</button>
                </form>

               </div>
            </div>}
            <div className='mt-4 mx-5'>
        <div >
          <h2 className='mx-5'>Notice List</h2>
          <p className="mx-5">
          Showing {indexOfFirstRow+1} to {Math.min(indexOfLastRow,filteredDetails.length)} of  {filteredDetails.length}
        </p>
            
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
            <div>
                <table className="employeeListTable">
                    <thead>
                        <th>EmployeeName</th>
                        <th>empCode</th>
                        <th>cardNo</th>
                        <th>department</th>
                        <th>designation</th>
                        <th>companyName</th>
                        <th>salary amt</th>
                        <th>effectiveDate</th>
                        <th>action</th>
                    </thead>
                    <tbody>
                        {currentRows.map((details,index) => (
                            <tr key={index}>
                                <td>{details.employeeName}</td>
                                <td>{details.empCode}</td>
                                <td>{details.cardNo}</td>
                                <td>{details.department}</td>
                                <td>{details.designation}</td>
                                <td>{details.companyName}</td>
                                <td>{details.salaryAmount}</td>
                                <td>{details.effectiveDate}</td>
                                <td><button    className='btn btn-success' onClick={() => edit(index)}> <i className="fa-solid fa-pen-to-square"></i></button>
                                <button className='btn btn-danger mx-1' onClick={() => openDeleteConfirmation(index)}> <i className="fa-solid fa-trash"></i></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="text-center my-2">
         {Array.from({length:Math.ceil(filteredDetails.length/rowsPerPage)},(_,index) => (
          
            <span className='bg-secondary mx-1 px-1 text-white ' key={index} onClick={()=> paginate(index)} style={{cursor:'pointer'}}> {index+1}
        
          </span>
          ))}
        
      </div>
           {showDeleteConfirmation && (
           <div className="dpop-up ">
            <div className="d-pop-content">
            <p>Are you sure you want to delete this entry?</p>
            <button  className='btn btn-danger mx-1' onClick={deleterow}>Yes</button>
            <button className='btn btn-info mx-1' onClick={closeDeleteConfirmation}>No</button>
            </div>

           </div>
            )}

        </div>
    )
    
}
export default SalarySetup;