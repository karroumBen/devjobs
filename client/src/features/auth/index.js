import React, { useState } from 'react'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAppContextUpdater } from '../../context';

const Auth = () => {
  const { setIsAuthenticated, setUser } = useAppContextUpdater();
  const navigate = useNavigate();
  const { action } = useParams();
  let isRegister = action === "register";

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const formElements = event.target.elements;
    const newFormData = {};
    const newErrors = {};

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      const fieldName = element.getAttribute("name");
      if (fieldName) {
        newFormData[fieldName] = element.value;
        if (!element.value) {
          newErrors[fieldName] = "This field is required.";
        }
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      sendData(newFormData);
    }
  };

  const sendData = (payload) => {
    const url = isRegister ? '/users/register': '/users/login';
    axios.post(url, payload)
    .then(({ data }) => {
      const { token } = data;
      localStorage.setItem('token', token);
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      setUser(data);
      navigate("/");
    })
    .catch((error) => {
      console.log({ error });
    })
  }

  return (
    <div className="register">
      <div className="register__form">
        <form method='post' onSubmit={ (evt) => handleSubmit(evt) }>
          {
            isRegister ? 
            <>
              <div>
                <label>Name</label>
                <Input
                  name="name"
                  icon="fa-solid fa-mail"
                  placeholder=""
                  type="text"
                  className="position__input" />

                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              
              <div>
                <label>Account type</label>
                <select name="type" className="account-type">
                  <option value="candidate">Candidate</option>
                  <option value="employer">Employer</option>
                </select>
              </div>
            </> : <></>
          }

          <div>
            <label>Email</label>

            <Input
              name="email"
              patter=""
              icon="fa-solid fa-mail"
              placeholder=""
              type="mail"
              className="position__input" />
            
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div>
            <label>Password</label>

            <Input
              name="password"
              icon="fa-solid fa-mail"
              placeholder=""
              type="password"
              className="position__input" />

            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <Button
            className="js-btn primary"
            icon="fa-solid fa-right-to-bracket"
            text={isRegister ? "Register" : "Login"} />
        </form>
      </div>
    </div>
  )
}

export default Auth