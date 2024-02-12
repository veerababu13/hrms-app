 function EmployeeImport(){
    return(
       <div className="my-5 ">
         <div className="Employee_Imports p-2 my-5">
       <div className="px-4 py-4  my-5">
            <div className="my-5">
                <label className="mb-4">Date<span className="text-danger">*</span></label>
                <input className="w-75 mb-5" type="Date"/>
                <label className="mb-3">Attach Excel<span className="text-danger">*</span></label>  
                <input className="w-75 mb-5" type="file"/> 
                <p>Sample file format.<span href="#" download className="text-danger"><i class="fa-solid fa-download"></i>Click here</span></p>
            </div>
            <div className="d-flex justify-content-evenly col-lg-9">
                <button className="btn  btn-secondary">Cancel</button>
                <button className="btn btn-outline-dark">Reset</button>
                <button className="btn btn-primary">Import</button>
            </div>
       </div>

        </div>

       </div>
    )
}
export default EmployeeImport;