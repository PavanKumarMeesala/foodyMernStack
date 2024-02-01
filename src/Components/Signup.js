import {useState} from react;
import 

function SignUp(){
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., API call)
    console.log('Form submitted:', formData);
  };
return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className='header'>Foody Partner</h2>
        <div className="form-group">
          <input
            type="text"
            name="Owner Name"
            value={formData.OwnerName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="BusninessName"
            value={formData.BusninessName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>
        <div className='form-group'>
          <input
            type="text"
            name="GSTIN"
            value={formData.GSTIN}
            onChange={handleChange}
            placeholder='GSTIN Number'
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;