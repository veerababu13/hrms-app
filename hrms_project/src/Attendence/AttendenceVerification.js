export default function AttendanceVerification(){
    return(
        <div className="Attendance_Verification p-2">
            <div className="d-flex row m-1 p-3">
                <div className="col-sm-3 text-center">
                    <div className="text-start"><label className="mb-2">Year</label></div>
                    <select className="w-100" >
                    <option value="2002"  >2002</option>
                    <option value="2003"  >2003</option>
                    <option value="2004"  >2004</option>
                    <option value="2005"  >2005</option>
                    <option value="2006"  >2006</option>
                    <option value="2007"  >2007</option>
                    <option value="2008"  >2008</option>
                    <option value="2009"  >2009</option>
                    <option value="2010"  >2010</option>
                </select>
                </div>
                <div  className="col-sm-3 text-center">
                <div className="text-start"><label className="mb-2">Month</label></div>
                <select className="w-100" >
                    <option value="January"  >January</option>
                    <option value="February"  >February</option>
                    <option value="March"  >March</option>
                    <option value="April"  >April</option>
                    <option value="May"  >May</option>
                    <option value="June"  >June</option>
                    <option value="July"  >July</option>
                    <option value="August"  >August</option>
                    <option value="September"  >September</option>
                </select>
                </div>
                <div  className="col-sm-3 text-center">
                <div className="text-start"><label className="mb-2">Select company</label></div>
                <select className="w-100 " >
                    <option value="ITPS TECH INFO PVT LTD"  >ITPS TECH INFO PVT LTD</option>
                </select>
                </div>
                <div className="col-sm-3 d-flex align-self-end">
                    <button className="btn btn-sm btn-dark">Filter</button>
                </div>
            </div>
        </div>
    )
}