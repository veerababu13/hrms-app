import Picture1 from './Picture1.png';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Sidenavbar(){
    const [isOpen,setIsOpen] = useState(false);
    const [isOpen1,setIsOpen1] = useState(false);
    const [isOpen2,setIsOpen2] = useState(false);
    const [isOpen3,setIsOpen3] = useState(false);
    const [isOpen4,setIsOpen4] = useState(false);
    const [isOpen5,setIsOpen5] = useState(false);
    const [isOpen6,setIsOpen6] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    const toggle1 = () => {
        setIsOpen1(!isOpen1);
    }
    const toggle2 = () => {
        setIsOpen2(!isOpen2);
    }
    const toggle3 = () => {
        setIsOpen3(!isOpen3);
    }
    const toggle4 = () => {
        setIsOpen4(!isOpen4);
    }
    const toggle5 = () => {
        setIsOpen5(!isOpen5);
    }
    const toggle6 = () => {
        setIsOpen6(!isOpen6);
    }
    return(
        <div style={{width:'20%',textAlign:'center',marginTop:'5%', backgroundColor:'#a6f0cd',paddingBottom:'150px',marginLeft:'7px'}}>
            <h4 style={{margin: '0px', padding:'0px'}}>ITPS<br></br></h4>
            <p>t e c h i n f o</p>
            <img src={Picture1} alt="this a profile" className='my-2'/>
            <div style={{textAlign:'left',width:'75%',marginLeft:'30px'}}>
                <h5 className="bg-dark-subtle rounded mb-2" > <div><i  class="fa fa-desktop px-1" aria-hidden="true"></i> Dashboard</div></h5>
                <h5 className="bg-dark-subtle rounded mb-2"onClick={toggle} ><div><i class="fa fa-user px-1" aria-hidden="true"></i> Employee &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{isOpen === false ?<i class="fa-solid fa-plus"></i>: <i class="fa-solid fa-minus"></i>}</div></h5>
                {isOpen && 
                    <ul style={{listStyle:'none'}}>
                        <li><Link  to="/employee-create" className='three'>Employee Create</Link></li>
                        <li><Link to="/employee-list" className='three'>Employee List</Link></li>
                        <li><Link to="/employee-import" className='three'>Employee Imports</Link></li>
                        <li><Link to="/award-list" className='three'>Awards List</Link></li>
                        <li><Link to="/notice-list" className='three'>Notice List</Link></li>
                    </ul>
                }
                <h5 className="bg-dark-subtle rounded mb-2" onClick={toggle1} ><div><i class="fa fa-book px-1" aria-hidden="true"></i>Attendance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{isOpen1 === false ?<i class="fa-solid fa-plus"></i>: <i class="fa-solid fa-minus"></i>}</div></h5>
                {isOpen1 && 
                    <ul style={{listStyle:'none'}}>
                        <li><Link className='three' to='/attendence-import'>Attendence Import</Link></li>
                        <li><Link className='three' to='/manual-punching'>Manual Punching</Link></li>
                        <li><Link className='three' to='/leave-application'>Leave Application</Link></li>
                        <li><Link className='three' to='/absent-detail'>Absent Details</Link></li>
                        <li><Link className='three' to='/attendence-verification'> Attendence Verification</Link></li>
                    </ul>
                }
                <h5 className="bg-dark-subtle rounded mb-2" onClick={toggle2} ><div><i class="fa fa-inr px-1" aria-hidden="true"></i> Payroll&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{isOpen2 === false ?<i class="fa-solid fa-plus"></i>: <i class="fa-solid fa-minus"></i>}</div></h5>
                {isOpen2 && 
                    <ul style={{listStyle:'none'}}>
                        <li><Link className='three' to='/pay-slip'> Payslip</Link></li>
                        <li><Link className='three' to='/salary-setup'>Salary Setup</Link></li>
                        <li><Link className='three' >Salary Process</Link></li>
                        <li><Link className='three' to='/employee-loan'>Employee Loan</Link></li>
                        <li><Link className='three'>Employee Conveyence</Link></li>
                        <li><Link className='three'>Tax File Upload</Link></li>
                    </ul>
                }
                <h5 className="bg-dark-subtle rounded mb-2" onClick={toggle3} ><div><i class="fa fa-bar-chart px-1" aria-hidden="true"></i> Reports&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{isOpen3 === false ?<i class="fa-solid fa-plus"></i>: <i class="fa-solid fa-minus"></i>}</div></h5>
                {isOpen3 && 
                    <ul style={{listStyle:'none'}}>
                        <li><Link className='three'> Attendence</Link></li>
                        <li><Link className='three'>Payslip Bulk Download</Link></li>
                        <li><Link className='three'> Monthly Salary </Link></li>
                        <li><Link className='three'> Yearly Salary</Link></li>
                        <li><Link className='three'>Salary Detuction Details</Link></li>
                    </ul>
                }
                <h5 className="bg-dark-subtle rounded mb-2" onClick={toggle4} ><div><i class="fa fa-briefcase px-1" aria-hidden="true"></i> Job&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{isOpen4 === false ?<i class="fa-solid fa-plus"></i>: <i class="fa-solid fa-minus"></i>}</div></h5>
                {isOpen4 && 
                    <ul style={{listStyle:'none'}}>
                        <li><Link className='three'> Candidate Create</Link></li>
                        <li><Link className='three'>Candidate List</Link></li>
                        <li><Link className='three'> Job Openings List</Link></li>
                        <li><Link className='three'> Trainings List </Link></li>
                    </ul>
                }
                <h5 className="bg-dark-subtle rounded mb-2" onClick={toggle5} ><div><i class="fa fa-film px-1" aria-hidden="true"></i> Masters&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{isOpen5 === false ?<i class="fa-solid fa-plus"></i>: <i class="fa-solid fa-minus"></i>}</div></h5>
                {isOpen5 && 
                    <ul style={{listStyle:'none'}}>
                        <li><Link className='three'> Company</Link></li>
                        <li><Link className='three'>  Location</Link></li>
                        <li><Link className='three'> Branch  </Link></li>
                        <li><Link className='three'> Department </Link></li>
                        <li><Link className='three'>  Department Assign</Link></li>
                    </ul>
                }
                <h5 className="bg-dark-subtle rounded mb-2" onClick={toggle6} ><div><i class="fa fa-th px-1" aria-hidden="true"></i> App Masters&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{isOpen6 === false ?<i class="fa-solid fa-plus"></i>: <i class="fa-solid fa-minus"></i>}</div></h5>     
                {isOpen6 && 
                    <ul style={{listStyle:'none'}}>
                        <li><Link className='three'> Add Users</Link></li>
                        <li><Link className='three'>  List Of Users</Link></li>
                        <li><Link className='three'>  Common Settings </Link></li>
                        <li><Link className='three'>  Roles</Link></li>
                    </ul>
                }
            </div>     
        </div>
    ) 
}
export default Sidenavbar;