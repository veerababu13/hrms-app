import axios from 'axios';
import { useState, useEffect } from 'react';

const RestDemo = () => {
  const [formData, setFormData] = useState({
    employeeName: '',
    award: '',
    name: ''
  });
  const [employeeData, setEmployeeData] = useState([]);
  const [edite, setEdite] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = () => {
    axios.get('http://localhost:8080/employees/h')
      .then(response => {
        setEmployeeData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing && edite !== null) {
      axios.put(`http://localhost:8080/employees/${edite}`, formData)
        .then(response => {
          console.log(response);
          fetchEmployeeData(); // Refresh employee data after successful update
        })
        .catch(error => console.log(error));
      setEdite(null);
      setEditing(false);
    } else {
      axios.post('http://localhost:8080/employees/awardp', formData)
        .then(response => {
          console.log(response);
          fetchEmployeeData(); // Refresh employee data after successful addition
        })
        .catch(error => {
          console.log(error);
        });
    }

    // Reset the form after submission
    setFormData({
      employeeName: '',
      award: '',
      name: ''
    });
  };

  const employeeDataDelete = (id) => {
    axios.delete(`http://localhost:8080/employees/${id}`)
      .then(response => {
        console.log(response);
        fetchEmployeeData(); // Refresh employee data after deletion
      })
      .catch(error => {
        console.log(error);
      });
  };

  const edit = (id) => {
    const index = employeeData.findIndex(emp => emp.id === id);
    if (index !== -1) {
      setEdite(id);
      setFormData(employeeData[index]);
      setEditing(true);
    } else {
      console.error('Employee not found for editing.');
    }
  };

  return (
    <div className="container">
      <div className="row">
        {employeeData.map((emp, index) => (
          <div className='col-sm-4 ' key={emp.id}>
            <div className='d-flex shadow-lg p-1 m-2 bg-body rounded'>
              <div>
                <p>Employee ID: <span className='text-primary'>{emp?.id}</span></p>
                <p>Employee Name: <span className='text-primary'>{emp?.employeeName}</span></p>
                <p>Employee Award: <span className='text-primary'>{emp?.award}</span></p>
              </div>
              <div>
                <button onClick={() => employeeDataDelete(emp.id)}>Delete</button>
                <button onClick={() => edit(emp.id)}>Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='py-1'>
        <form onSubmit={handleSubmit} className='mt-4'>
          <label>employeeName</label>
          <input type='text' value={formData.employeeName} onChange={handleChange} name='employeeName' className='form-control' />
          <label>award</label>
          <input type='text' value={formData.award} onChange={handleChange} name='award' className='form-control' />
          <label>name</label>
          <input type='text' value={formData.name} onChange={handleChange} name='name' className='form-control' />
          <div className='text-center'>
            <button type='submit' className='btn btn-primary m-3'>{editing ? 'Update' : 'Add'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestDemo;
