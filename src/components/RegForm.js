import React, { useEffect, useState } from "react";
import Axios from "axios";


function RegForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:5000/api/auth', formData);
      console.log(response);
      props.onReload(() => { return true });
    } catch (error) {
      console.error("Error occurred while submitting form:", error);
    }
  };

  return (

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="pass">Password:</label>
        <input type="password" id="pass" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <button type="submit" >Submit</button>
    </form>
  );
}

export default RegForm;
