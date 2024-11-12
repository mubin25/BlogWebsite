import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
    const[formData, setFromData] = useState({
        username:'',
        email:'',
        password:'',
    });
    
    const handleChange = (e) =>{
        setFromData({
            ...formData,[e.target.name]:e.target.value,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://your-backend-api.com/signup' ,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((Response) => Response.json())
        .then((data) => {
            console.log('Success', data);
        })
        .catch((error) => {
            console.log('Error', error);
        })
        console.log('Form Submitted', formData);
    };
  return (
    <>
        <div className='signup-container'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className='signup-form'>
            <div className='form-group'>
                <label>Username:</label>
                <input
                type='text' name='username' value={formData.username}
                onChange={handleChange}
                required/>
            </div>
            <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Sign Up</button>
        </form>
    </div>

    </>
  )
}

export default SignUp