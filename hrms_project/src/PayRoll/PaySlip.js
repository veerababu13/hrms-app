export default function Payslip(){
    return(
        <div className="Payslip p-2 ">
        <div className="m-2 p-2">
            <div className="d-flex">
            <div className="me-3">
                <label>Year</label>
               <select>
                <option value={2002}>2002</option>
                <option value={2003}>2003</option>
                <option value={2004}>2004</option>
                <option value={2005}>2005</option>
                <option value={2006}>2006</option>
                <option value={2007}>2007</option>
                <option value={2008}>2008</option>
               </select>
            </div>
            <div className="me-3">
                <label>Month Up</label>
                <select>
                <option value={'January'}>January</option>
                <option value={'February'}>February</option>
                <option value={'March'}>March</option>
                <option value={'April'}>April</option>
                <option value={'May'}>May</option>
                <option value={'June'}>June</option>
                <option value={'July'}>July</option>
               </select>
            </div>
            <div className="me-3">
                <label>Year</label>
                <select>
                <option value={'VIVEKANADHA'}>IND000052-VIVEKANANDHA</option>
               </select>
            </div>
            <div className="d-flex me-3">
                <button className="btn btn-sm btn-primary align-self-center">Filter</button>
            </div>

            <div className="d-flex align-items-center me-3 icon">
                <i class="fa-solid fa-file-pdf"></i>
                <i class="fa-solid fa-print"></i>
            </div>
            </div>
        </div>
        </div>
    )
}