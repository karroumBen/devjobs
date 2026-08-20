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
  const isRegister = action === "register";

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitError('');

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
    const url = isRegister ? '/users/register' : '/users/login';
    setIsSubmitting(true);

    axios.post(url, payload)
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(data));
        setIsAuthenticated(true);
        setUser(data);
        navigate("/");
      })
      .catch((error) => {
        const message = error.response?.data?.message
          || error.response?.data?.error
          || 'Something went wrong. Please try again.';
        setSubmitError(typeof message === 'string' ? message : 'Something went wrong. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <div className="register">
      <div className="register__form">
        <form onSubmit={handleSubmit}>
          {isRegister ?
            <>
              <div>
                <label htmlFor="auth-name">Name</label>
                <Input
                  name="name"
                  icon="fa-solid fa-user"
                  placeholder=""
                  type="text"
                  className="position__input" />

                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <div>
                <label htmlFor="auth-type">Account type</label>
                <select name="type" className="account-type">
                  <option value="candidate">Candidate</option>
                  <option value="employer">Employer</option>
                </select>
              </div>
            </>
            : null}

          <div>
            <label htmlFor="auth-email">Email</label>

            <Input
              name="email"
              icon="fa-solid fa-envelope"
              placeholder=""
              type="email"
              className="position__input" />

            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div>
            <label htmlFor="auth-password">Password</label>

            <Input
              name="password"
              icon="fa-solid fa-lock"
              placeholder=""
              type="password"
              className="position__input" />

            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          {submitError && <p className="error">{submitError}</p>}

          <Button
            type="submit"
            className="js-btn primary"
            icon="fa-solid fa-right-to-bracket"
            text={isSubmitting ? "Please wait..." : (isRegister ? "Register" : "Login")} />
        </form>
      </div>
    </div>
  )
}

export default Auth
