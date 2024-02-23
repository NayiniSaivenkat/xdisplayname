// import './App.css';
// import React, { useState } from 'react';

// function App() {
//   const [formData, setFormData] = useState({
//     FirstName: "",
//     LastName: ""
//   });
//   const [submitedData, setSubmitedData] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevVal) => ({
//       ...prevVal,
//       [name]: value
//     }));
//   }

//   const submit = (e) => {
//     e.preventDefault();
//     if (formData.FirstName && formData.LastName) {
//       const submittedFormData = {
//         FirstName: formData.FirstName,
//         LastName: formData.LastName
//       };
//       setSubmitedData(submittedFormData);
//     }
//   }

//   return (
//     <form onSubmit={submit}>
//       <h1>Full Name Display</h1>
//       <label>
//         First Name:
//         <input
//           type="text"
//           name='FirstName'
//           value={formData.FirstName}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Last Name:
//         <input
//           type="text"
//           name='LastName'
//           value={formData.LastName}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <button type='submit'>Submit</button>
//       {submitedData &&
//         (
//           <div>
//             <p>Full Name: {submitedData.FirstName} {submitedData.LastName}</p>
//           </div>
//         )
//       }
//     </form>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() !== '' && lastName.trim() !== '') {
      setFullName(`Full Name: ${firstName} ${lastName}`);
      setFormError('');
    } else {
      setFullName('');
      setFormError('Please fill out both fields.');
    }
  };

  return (
    <div className="centered-form">
      <h2>Full Name Display</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <button type="submit">
          Submit
        </button>

        {formError && <div className="error">{formError}</div>}
      </form>

      {fullName && (
        <div className="full-name">{fullName}</div>
      )}
    </div>
  );
};

export default App;
