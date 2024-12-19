import React, { useState } from 'react';
import "../css/General.css";
import { supabase } from '../config/supabaseClient';

import Footer from './Footer';

function Ask1() {
  // State to store form data
  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    birthday: '',
    address: '',
    age: '',
    contact_number: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, middle_name, last_name, birthday, address, age, contact_number } = formData;

    // Insert data into Supabase
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          name,
          middle_name,
          last_name,
          birthday,
          address,
          age,
          contact_number
        }
      ]);

    if (error) {
      console.error('Error inserting data: ', error);
    } else {
      console.log('Data inserted successfully:', data);
    }
  };

  return (

    <div className="ask-bg">
      <div className="ask-bg-blur">
        <div className=" pt-10">
          <h1 className='text-center'>Hello shin, I want to know you more</h1>
          <h2 className='text-center'>Answer honestly, please haha</h2>

          <form onSubmit={handleSubmit} className="mt-6 flex justify-center">
            <div>
                <div className="form-group">
                    <p>First Name:</p>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                    />
                </div>
                <div className="form-group">
                    <p>Middle name:</p>
                <input
                    type="text"
                    name="middle_name"
                    value={formData.middle_name}
                    onChange={handleChange}
                    placeholder="Middle Name"
                />
                </div>
                <div className="form-group">
                    <p>Last name:</p>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                />
                </div>
                <div className="form-group">
                    <p>Birthday:</p>
                <input
                    type="date"
                    name="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                    placeholder="Birthday"
                    required
                />
                </div>
                <div className="form-group">
                    <p>Address:</p>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                />
                </div>
                <div className="form-group">
                    <p>Age:</p>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Age"
                    required
                />
                </div>
                <div className="form-group">
                    <p>Number b haha</p>
                <input
                    type="text"
                    name="contact_number"
                    value={formData.contact_number}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    required
                />
                </div>

                <div className='flex justify-center'>
                    <button type="submit" className="submit-btn">
                        Submit
                    </button>
                </div>
            </div>
          </form>
          <div className='mt-[100px]'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ask1;
