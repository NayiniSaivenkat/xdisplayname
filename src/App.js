import './App.css';
import React,{useState} from 'react';

function App() {
  const [formData,setFormData]=useState([{
    FirstName:"",
    LastName:""
  }]);
  const [submitedData,setSubmitedData]=useState(null);
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prevVal)=>({
      ...prevVal,
      [name]:value
    }))
  }
  const submit=(e)=>{
    e.preventDefault();
    if(formData.FirstName && formData.LastName){
    setSubmitedData(formData)
    }
  }

  return (
    <form onSubmit={submit}>
      <h1>Full Name Display</h1>
      <label>
        First Name:
        <input 
        type="text"
        name='FirstName'
        value={formData.FirstName}
        onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Last Name:
        <input 
        type="text"
        name='LastName'
        value={formData.LastName}
        onChange={handleChange}
        />
      </label>
      <br/>
      <button type='submit'>Submit</button>
      {submitedData && 
      (
        <div>
          <p>Full Name: {submitedData.FirstName} {submitedData.LastName}</p>
        </div>
      )
      }
    </form>
    
  );
}

export default App;
