function AttendenceImport() {
    return(
        <div className='container-fluid'>
            <div>
                <div className='mt-5'>
                    <h1 className='mx-5'>Employee</h1>
                    <p className='mx-5'>Attendence Import</p>
                </div>
              
                <form style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <div className='w-50 m-auto p-5' >
                   
                   <label className='  m-auto '>Year<span className='text-danger'>*</span></label>
                    <select className='form-select border border-dark my-1  m-auto'>
                    <option value=''>--select year --</option>
                        <option value='2002'>2002</option>
                        <option value='2003'>2003</option>
                        <option value='2004'>2004</option>
                        <option value='2005'>2005</option>
                        <option value='2006'>2006</option>
                        <option value='2007'>2007</option>
                        <option value='2008'>2008</option>
                        <option value='2009'>2009</option>
                        <option value='2010'>2010</option>
                        <option value='2011'>2011</option>
                        <option value='2012'>2012</option>
                        <option value='2013'>2013</option>
                        <option value='2014'>2014</option>
                    </select>
                    <label className='  m-auto'>Month<span className='text-danger'>*</span></label>
                    <select class='form-select border border-dark my-1  m-auto'>
                    <option value=''>--select Month--</option>
                        <option value='january'>January</option>
                        <option value='february'>February</option>
                        <option value='march'>March</option>
                        <option value='april'>April</option>
                        <option value='may'>May</option>
                        <option value='june'>June</option>
                        <option value='july'>July</option>
                        <option value='august'>August</option>
                        <option value='september'>September</option>
                        <option value='october'>October</option>
                        <option value='november'>November</option>
                        <option value='december'>December</option>
                        
                    </select>
                    <label className='  m-auto'>CompanyName<span className='text-danger'>*</span></label>
                    <select class='form-select border border-dark my-1  m-auto'>
                    <option value=''>--select Company--</option>
                        <option value='hrms'>HRMS</option>
                        <option value='tcs'>Tcs</option>
                        <option value='deloitte'>Deloitte</option>
                        <option value='servicenow'>ServiceNow</option>
                    </select>
                    <label className=' m-auto'>Attach Excel<span className='text-danger'>*</span></label>
                    <input className='form-control border border-dark  m-auto' type='file' />
                    </div>
                    </form>
                <div className='text-center my-2'>
                <p className='text-danger mx-5 '>sample file format&nbsp;<span className='text-danger'><i class="fa-solid fa-download"></i> click here</span> </p>
                </div>

            </div>

          

        </div>
    )

}
export default AttendenceImport;