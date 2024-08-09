
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Sidenavbar from './Sidenavbar';
import EmployeeCreate from './employees/EmployeeCreate';
import EmployeeList from './employees/EmployeeList';
import EmployeeImport from './employees/EmployeeImport';
import AwardList from './employees/AwardsList';
import NoticeList from './employees/NoticeList';
import AttendenceImport from './Attendence/AttendenceImport';
import ManualPunching from './Attendence/ManualPunching';
import LeaveApplication from './Attendence/LeaveApplication';
import AbsentDetails from './Attendence/AbsentDetails';
import AttendanceVerification from './Attendence/AttendenceVerification';
import SalarySetup from './PayRoll/SalarySetup';
import Payslip from './PayRoll/PaySlip';
import EmployeeLoan from './PayRoll/EmployeeLoan';
import RestDemo from './employees/RestDemo';



function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Check if the current location is the login page
    setIsUserLoggedIn(location.pathname !== '/');
   
  }, [location.pathname]);
 
  return (
    <div className='app'>
      {isUserLoggedIn && <Sidenavbar/>}
    <div style={{width: isUserLoggedIn ? '80%' : '100%'}}>
     <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/employee-create' element={<EmployeeCreate/>} />
      <Route path='/employee-list' element={<EmployeeList/>} />
      <Route path='/employee-import' element={<EmployeeImport/>} />
      <Route path='/award-list' element={<AwardList/>} />
      <Route path='/notice-list' element={<NoticeList/>} />
      <Route path='/attendence-import' element={<AttendenceImport/>} />
      <Route path='/manual-punching' element={<ManualPunching/>}></Route>
      <Route path='/leave-application' element={<LeaveApplication/>}></Route>
      <Route path='/absent-detail' element={<AbsentDetails/>}></Route>
      <Route path='/attendence-verification' element={<AttendanceVerification/>}></Route>
      <Route path='/salary-setup' element={<SalarySetup/>}></Route>
      <Route path='/pay-slip' element={<Payslip/>}></Route>
      <Route path='/employee-loan' element={<EmployeeLoan/>}></Route>
      <Route path='/rest-demo' element={<RestDemo/>}></Route>
     
     
      

     </Routes>
     </div>
    </div>
  );
}

export default App;

