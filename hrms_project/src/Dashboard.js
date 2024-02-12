

function Dashboard(){
    document.body.style.backgroundColor='white';
    //document.body.style.overflow='hidden';
    return (
        <div style={{marginLeft:'1%', marginTop:'10%',overFlow:'hidden',backgroundColor:'#cfe2f3',paddingBottom:'20px',paddingLeft:'10px',marginRight:'1%'}} className="four">
            <h5>Dashboard</h5>
            <div className='row '>
                <div className="col-sm-4">
                    <div className="py-4  text-white  " style={{backgroundColor:'#0096FF'}}>
                        <h5 className='mx-1'>Total employes</h5>
                        <h5 className='mx-1'>7</h5>
                        <div className="color_div1 mx-1">
                            <span className="dashboard_percentage1 "></span>
                        </div>
                  </div>
                </div>
                <div className="col-sm-4">
                    <div className="py-4 text-white " style={{backgroundColor:'#00FFFF'}}>
                        <h5 className='mx-1'>Total present</h5>
                        <h5 className='mx-1'>0</h5>
                        <div className="color_div2 mx-1">
                            <span className="dashboard_percentage2"></span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="py-4 text-white " style={{backgroundColor:'lightgreen',width:'95%'}}>
                        <h5 className='mx-1'>Total absent</h5>
                        <h5 className='mx-1'>7</h5>
                        <div className="color_div3 mx-1">
                            <span className="dashboard_percentage3"></span>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className='my-2'>department summary</h5>
            <div className="row">
                <div className="col-sm-3">
                    <div className='py-4' style={{backgroundColor:'white', textAlign:'center'}}>
                        <h3>Accounts</h3>
                        <h3>1</h3>
                    </div>
                </div>
                <div className="col-sm-3 ">
                    <div className='py-4' style={{backgroundColor:'white', textAlign:'center'}}>
                        <h3>Development</h3>
                        <h3>1</h3>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className='py-4' style={{backgroundColor:'white', textAlign:'center'}}>
                        <h3>Administrator</h3>
                        <h3>1</h3>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className='py-4' style={{backgroundColor:'white', textAlign:'center',width:'95%'}}>
                        <h3>sales</h3>
                        <h3>4</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;