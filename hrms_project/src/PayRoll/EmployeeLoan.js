import {useState, useEffect} from 'react';
import './employeeloan.css';
function EmployeeLoan(){
    const [formData,setFormdadta] = useState({
        employeeName:'',
        empCode:'',
        cardNo:'',
        loanName:'',
        amount:'',
        interestRate:'',
        emiPay:'',
        loanDate:'',
        loanType:'',
        loanStatus:''
    });
    const [formDetails,setFormDetails] = useState([]);
    const [isFormVisible,setIsFormVisible]= useState(false);
    const [editIndex,setEditIndex] = useState(null);
    const [isEditing,setIsEditing] = useState(false);
    const [deleteIndex,setDeleteIndex] = useState(null);
    const [showDelete,setShowDelete] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');
    const [currentPage,setCurrentPage]= useState(1);
    const rowsPerPage = 5;
        useEffect(() => {
            const data = JSON.parse(localStorage.getItem('loanData')) || [];
            setFormDetails(data);
        },[])

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormdadta(prevdata => ({
            ...prevdata,
            [name]: value
       }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isEditing){
            const updata = [...formDetails];
            updata[editIndex] = formData;
            setFormDetails(updata);
            localStorage.setItem('loanData',JSON.stringify(updata));
            setEditIndex(null);
            setIsFormVisible(false);
            setIsEditing(false);
            
        }
        else{
        const details = [...formDetails,formData];
        setFormDetails(details);
        localStorage.setItem('loanData',JSON.stringify(details));
        console.log(details);
        setIsFormVisible(false);
        }
        setFormdadta({
            employeeName:'',
            empCode:'',
            cardNo:'',
            loanName:'',
            amount:'',
            interestRate:'',
            emiPay:'',
            loanDate:'',
            loanType:'',
            loanStatus:''
        })
          
    }

    const filterbysearch = formDetails.filter((detail) => {
        return detail.empCode.includes(searchTerm);
    })

    const showForm = () => {
            setIsFormVisible((previsible) =>  !previsible);
    }
    const edit = (index) => {
        setIsEditing(true);
        setFormdadta(formDetails[index]);
        setEditIndex(index);
        setIsFormVisible(true);
    }
    const deletel = () => {
        const deleteDetails = [...formDetails];
        deleteDetails.splice(deleteIndex,1);
        setFormDetails(deleteDetails);
        localStorage.setItem('loanData',JSON.stringify(deleteDetails));
        setShowDelete(false);
    }
    const showDeleteConfirmation = (index) => {
        setDeleteIndex(index);
        setShowDelete(true);
    }
    const DelehideteConfirmation = () => {
        console.log('working');
       
        setShowDelete(false);
        setDeleteIndex(null);
    }
    const paginate = (pagenumer) =>{
           setCurrentPage(pagenumer)
    }

     const indexOfLastRow = currentPage * rowsPerPage;
     const indexOfFirstRow =   indexOfLastRow - rowsPerPage ;
     const currentRows =  filterbysearch.slice(indexOfFirstRow,indexOfLastRow);
     console.log(currentRows);
     console.log(filterbysearch);

    return(
       <div>
        <div>
            <button className='btn btn-secondary' onClick={showForm}>Add loan</button>
        </div>
        {isFormVisible && (
          <div className='fdata'>
            <div className='fdata-content'>
                <span className='close' onClick={showForm} style={{cursor:'pointer'}}>&times;</span>
                <form>
                    <label>EmployeeName</label>
                    <input type='text' name='employeeName'className='form-control border border-dark'  value={formData.employeeName} onChange={handleChange} required/>
                    <label>EmployeeCode</label>
                    <input type='text' name='empCode' className='form-control border border-dark'  value={formData.empCode} onChange={handleChange} required/>
                    <label>cardNo</label>
                    <input type='text' name='cardNo'className='form-control border border-dark'  value={formData.cardNo} onChange={handleChange} required/>
                    <label>LoanName</label>
                    <input type='text' name='loanName'className='form-control border border-dark'  value={formData.loanName} onChange={handleChange} required/>
                    <label>amount</label>
                    <input type='text' name='amount' className='form-control border border-dark'  value={formData.amount} onChange={handleChange} required/>
                    <label>interestRate</label>
                    <input type='text' name='interestRate'className='form-control border border-dark'  value={formData.interestRate} onChange={handleChange} required/>
                    <label>emiPay</label>
                    <input type='text' name='emiPay' className='form-control border border-dark'  value={formData.emiPay} onChange={handleChange} required/>
                    <label>loanDate</label>
                    <input type='date' name='loanDate' className='form-control border border-dark'  value={formData.loanDate} onChange={handleChange} required/>
                    <label>loanType</label>
                    <input type='text' name='loanType' className='form-control border border-dark' value={formData.loanType} onChange={handleChange} required/>
                    <label>loanStatus</label>
                    <select name='loanStatus' className='form-select border border-dark' value={formData.loanStatus} onChange={handleChange} required>
                    <option value=''></option>
                        <option value='active'>Active</option>
                        <option value='inactive'>Inactive</option>
                    </select>
                    <div className='text-center my-1'>
                    <button className='btn btn-primary' onClick={handleSubmit}>{isEditing? 'update': 'submit'}</button>
                    </div>
                   
                    
                   
                </form>
            </div>
          </div>
         )}
         <p>showing {indexOfFirstRow + 1} to {Math.min(indexOfLastRow,filterbysearch.length)}  of {filterbysearch.length} </p>
         <div>
            <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='form-control w-25 border border-dark float-end'/>
         </div>
         <div style={{width:'95%'}}>
            <table className='employeeListTable ' >
                <thead>
                
                    <th>EmployeeName</th>
                    <th>EmployeeCode</th>
                    <th>cardNo</th>
                    <th>loanName</th>
                    <th>amount</th>
                    <th>interestRate</th>
                    <th>emiPay</th>
                    <th>loanData</th>
                    <th>loanType</th>
                    <th>loanStatus</th>
                    <th>action</th>
                    
                   
                </thead>
                <tbody>
                    {currentRows.map((loandetail,index) => (
                        <tr key={index}>
                            
                            <td>{loandetail.employeeName}</td>
                            <td>{loandetail.empCode}</td>
                            <td>{loandetail.cardNo}</td>
                            <td>{loandetail.loanName}</td>
                            <td>{loandetail.amount}</td>
                            <td>{loandetail.interestRate}</td>
                            <td>{loandetail.emiPay}</td>
                            <td>{loandetail.loanDate}</td>
                            <td>{loandetail.loanType}</td>
                            <td>{loandetail.loanStatus}</td>
                            <td><button onClick={()=> edit(index)}>edit</button></td>
                            <td><button onClick={()=> showDeleteConfirmation(index)}>delete</button></td>
                            
                            
                        </tr>
                    ))}
                </tbody>
            </table>
         </div>
         {showDelete && (
            <div  className='delete-popup'>
                <div className='delete-popup-content text-center'>
                    <p>are you sure to delete this row</p>
                    <button className='btn btn-danger mx-1' onClick={deletel}>yes</button>
                    <button className='btn btn-info' onClick = {DelehideteConfirmation}>no</button>

                </div>

            </div>
         )}
         <div>
         <div className='text-center'>
            {Array.from({length : Math.ceil(filterbysearch.length/rowsPerPage)},(_,index) => (
       
                 <span key={index}  onClick={() => paginate(index+1)} className='mx-1 d-inline-block'>{index+1}</span>
               
            ) )}
                    </div>
         </div>
       </div>
    )
}
export default EmployeeLoan;