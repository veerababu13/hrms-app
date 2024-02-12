// MultiStepForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function  EmployeeCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Step 1: Basic Details
    employeeNo: '',
    fullName: '',
    fatherName: '',
    email: '',
    mobile: '',
    gender: '',
    designation: '',
    department: '',
    address:'',
    city:'',
    pin:'',
    // Step 2: Education Qualification
    collegeName: '',
    specification: '',
    cgpa: '',
    graduationYear: '',
    awardName: '',
    gift: '',
    awardDate: '',
    joinDate: '',
    // Step 3: Bank Details
    bankName: '',
    accNo: '',
    ifscCode: '',
    salary: '',
    loanName: '',
    loanDate: '',
    loanAmount: '',
  });
  const[imageData,setImageData] = useState(null);
  const [step, setStep] = useState(1);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert the uploaded image to a Base64 string
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageData(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const handleSubmi = () => {
    const allUserDataArray= JSON.parse(localStorage.getItem('allUserData')) || [];
    const userKey = Math.random().toString(36).substring(7);
    allUserDataArray.push({userKey,formData,imageData});
    localStorage.setItem('allUserData', JSON.stringify(allUserDataArray));
        navigate('/employee-list');
  };
  return (
    <div>
      <form noValidate onSubmit={handleSubmi} validtae>
        <div className="step-navigation">
          <div className={`step ${step === 1 ? 'active' : ''} pointer `}>
            Basic Details
          </div>
          <div className={`step ${step === 2 ? 'active' : ''} pointer`}>
            Education Qualification
          </div>
          <div className={`step ${step === 3 ? 'active' : ''} pointer`}>
            Bank Details
          </div>
        </div>
        {step === 1 && (
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-6 my-5 '>
                <div className='mx-5'>
                  <label>Emp No<span className="text-danger">*</span></label>
                  <input type='text' className="mb-3 w-75" name='employeeNo' value={formData.employeeNo}  onChange={handleInputChange} />
                  <label>Full Name<span className="text-danger">*</span></label>
                  <input type="text" name="fullName" className="mb-3 w-75" value={formData.fullName} onChange={handleInputChange}required/>
                  <label>Father Name<span className="text-danger">*</span></label>
                  <input type="text" name="fatherName" className='w-75 mb-3' value={formData.fatherName}onChange={handleInputChange}required/>
                  <label>Email<span className="text-danger">*</span></label>
                  <input type="email" name="email" className='mb-3 w-75' value={formData.email}  onChange={handleInputChange} required />
                  <label>Mobile<span className="text-danger">*</span></label>
                  <input type="tel" name="mobile"className='mb-3 w-75' value={formData.mobile} onChange={handleInputChange} required/>
                  <label>Gender <span className="text-danger">*</span></label>
                  <select  name="gender" className='mb-3  border-top-0 w-75 five ' value={formData.gender} onChange={handleInputChange}required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className='col-sm-6 my-5'>
                <label>Address <span className="text-danger">*</span></label>
                <input type="text" name="address"className='mb-3 w-75' value={formData.address} onChange={handleInputChange} required/>
                <label>City <span className="text-danger">*</span></label>
                <input type="text" name="city"className='mb-3 w-75' value={formData.city} onChange={handleInputChange} required/>
                <label>Pin <span className="text-danger">*</span></label>
                <input type="text" name="pin"className='mb-3 w-75' value={formData.pin} onChange={handleInputChange} required/>
                <label>Designation <span className="text-danger">*</span></label>
                <input type="text" name="designation"className='mb-3 w-75' value={formData.designation} onChange={handleInputChange} required/>
                <label>department <span className="text-danger">*</span></label>
                <input type="text" name="department"className='mb-3 w-75' value={formData.department} onChange={handleInputChange} required/>
                <label>Photo <span className="text-danger">*</span></label>
                <input type="file" className='mb-3 w-75' accept='image' onChange={handleImageUpload} required/>
              </div>
            </div>
            <button className='btn btn-primary float-end' onClick={handleNext}>Next</button>
          </div>
        )}
        {step === 2 && (
          <div className='container-fluid mx-auto'>
            <div className='m-5'>
              <label>College Name <span className='text-danger'>*</span></label>
              <input type="text" name="collegeName" className='w-50 mb-3' value={formData.collegeName} onChange={handleInputChange} required/>
              <label>Specification<span className='text-danger'>*</span></label>
              <input type="text" name="specification"  className='w-50 mb-3' value={formData.specification} onChange={handleInputChange} required/>
              <label>CGPA<span className='text-danger'>*</span></label>
              <input type="text" name="cgpa" className='w-50 mb-3' value={formData.cgpa} onChange={handleInputChange} required/>
              <label>Year of Graduation<span className='text-danger'>*</span> </label>
              <input type="text" name="graduationYear" className='w-50 mb-3' value={formData.graduationYear} onChange={handleInputChange}  required/>
              <label>Award Name<span className='text-danger'>*</span> </label>
              <input type="text" name="awardName" className='w-50 mb-3' value={formData.awardName}  onChange={handleInputChange} required/>
              <label>Gift<span className='text-danger'>*</span></label>
              <input type="text" name="gift" className='w-50 mb-3' value={formData.gift} onChange={handleInputChange}/>
              <label>Award Date<span className='text-danger'>*</span></label>
              <input type="date" name="awardDate" className='w-50 mb-3' value={formData.awardDate} onChange={handleInputChange}required/><br></br>
              <label>joinDate <span className="text-danger">*</span></label>
                <input type="date" name="joinDate"className='mb-3 w-50' value={formData.joinDate} onChange={handleInputChange} required/>
              <div className='text-center'>
                <button onClick={handlePrev} className='btn btn-primary float-right mx-2'>Previous</button>
                <button onClick={handleNext} className='btn btn-primary float-right mx-2'>Next</button>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div  className='m-5'>
              <label>Bank Name<span className='text-danger'>*</span></label>
              <input type="text" name="bankName" value={formData.bankName} className='w-50 mb-3' onChange={handleInputChange} required/>
              <label>Account Number<span className='text-danger'>*</span></label>
              <input type="text" name="accNo" className='w-50 mb-3' value={formData.accNo} onChange={handleInputChange} required/>
              <label>IFSC Code<span className='text-danger'>*</span></label>
              <input type="text" name="ifscCode" className='w-50 mb-3' value={formData.ifscCode}onChange={handleInputChange} required/>
              <label>Salary<span className='text-danger'>*</span></label>
              <input type="text" name="salary" value={formData.salary} className='w-50 mb-3' onChange={handleInputChange} required/>
              <label>Loan Name<span className='text-danger'>*</span></label>
              <input type="text" name="loanName" value={formData.loanName} className='w-50 mb-3' onChange={handleInputChange} required/>
              <label>Loan Date<span className='text-danger'>*</span></label>
              <input type="date" name="loanDate" value={formData.loanDate} className='w-50 mb-3' onChange={handleInputChange}required/>
              <label>Loan Amoun<span className='text-danger'>*</span></label>
              <input type="text"className='w-50 mb-3'name='loanAmount' value={formData.loanAmount} onChange={handleInputChange} required  />
              
             
              <div className='text-center'>
                <button className='btn btn-primary m-3' onClick={handlePrev}>Previous</button>
                <button  className='btn btn-primary m-3' >Submit</button> 
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
export default EmployeeCreate;
