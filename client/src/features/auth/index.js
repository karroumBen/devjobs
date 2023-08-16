import React from 'react'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useParams } from 'react-router-dom';

const Auth = () => {
  
  const { action } = useParams();
  let isRegister = action === "register";
  console.log(action);

  return (
    <div className="register">
      <div className="register__form">
        <form>
          {
            isRegister ? 
            <>
              <label>Name</label>

              <Input
                icon="fa-solid fa-mail"
                placeholder=""
                type="mail"
                className="position__input" />
              
              <label>Account type</label>
              <select name="type" className="account-type">
                <option value="personal">Personal</option>
                <option value="company">Company</option>
              </select>
            </> : <></>
          }

          <label>Email</label>

          <Input
            icon="fa-solid fa-mail"
            placeholder=""
            type="mail"
            className="position__input" />

          <label>Password</label>

          <Input
            icon="fa-solid fa-mail"
            placeholder=""
            type="password"
            className="position__input" />

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