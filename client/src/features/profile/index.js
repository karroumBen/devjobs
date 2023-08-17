import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context';
import Button from '../../components/Button';
import Input from '../../components/Input';
import PostedJobs from '../../components/PostedJobs';

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    avatar: user.avatar,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="profile container">
      <section className="action-bar">
        <Button
          onClick={() => navigate('/')}
          className="js-btn default"
          icon="fa-solid fa-arrow-left"
          text="Go back" />

        <Button
          className="js-btn primary"
          icon="fa-solid fa-save"
          text="Update" />
      </section>

      <section className="main-info">
        <div className='title'>
          <h2>General Informations</h2>
        </div>
        
        <form>
          <div>
              <label>Name</label>
              <Input
                value={formData.name}
                name="name"
                icon="fa-solid fa-mail"
                placeholder=""
                type="text"
                className="position__input"
                onChange={handleInputChange} />
            </div>

            <div>
              <label>Email</label>
              <Input
                value={formData.email}
                name="email"
                placeholder=""
                type="mail"
                className="position__input"
                onChange={handleInputChange} />
            </div>

            <div>
              <label>Avatar</label>
              <Input
                value={formData.avatar}
                name="avatar"
                placeholder=""
                type="text"
                className="position__input"
                onChange={handleInputChange} />
            </div>
        </form>
      </section>

      <section className="saved-job-application">
        { user.role === 'employer' ? 
          <PostedJobs /> :
          <><h3>job applied for</h3></>
        }
      </section>
    </div>
  )
}

export default Profile