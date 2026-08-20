import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppContext } from '../context';
import Button from './Button';
import Input from './Input';
import Loader from './Loader';

const PostedJobs = () => {
  const { user } = useAppContext();
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [jobPosts, setJobPosts] = useState([]);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formElements = event.target.elements;
    const newFormData = {};

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      const fieldName = element.getAttribute("name");
      if (fieldName) {
        newFormData[fieldName] = element.value;
      }
    }

    sendData(newFormData);
  };

  const sendData = (payload) => {
    setError('');

    axios.post('/jobposts/', { userId: user.id, ...payload })
      .then(() => {
        toggleEditMode();
        fetchNewPosts();
      })
      .catch(() => {
        setError('Failed to save job posting.');
      })
  }

  const fetchNewPosts = () => {
    setIsLoading(true);
    setError('');

    axios.get('/jobposts/', { params: { userId: user.id } })
      .then(({ data }) => {
        setJobPosts(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        setError('Failed to load your job postings.');
        setJobPosts([]);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const removeJob = (evt, id) => {
    setError('');

    axios.delete(`/jobposts/${id}`)
      .then(() => {
        fetchNewPosts();
      })
      .catch(() => {
        setError('Failed to delete job posting.');
      })
  }

  useEffect(() => {
    if (user.id) {
      fetchNewPosts();
    } else {
      setIsLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id])

  return (
    <div className='job-posting'>
      {error && <p className="error">{error}</p>}

      <div className="action-bar">
        {!isEditMode &&
          <Button
            type="button"
            onClick={toggleEditMode}
            className="js-btn primary"
            icon='fa-solid fa-plus'
            text='New' />
        }
      </div>

      {isEditMode ?
        <div className="new-job-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Title</label>
              <Input
                name="title"
                icon="fa-solid fa-briefcase"
                placeholder=""
                type="text"
                className="position__input" />
            </div>

            <div>
              <label>Job type</label>
              <select name="jobType" className="account-type">
                <option value="Full time">Full Time</option>
                <option value="Part time">Part Time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            <div>
              <label>Job distance</label>
              <select name="distance" className="account-type">
                <option value="Remote">Remote</option>
                <option value="On site">On site</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div>
              <label>Location</label>

              <Input
                name="location"
                placeholder=""
                type="text"
                className="position__input" />
            </div>

            <div>
              <label>Description</label>

              <textarea name="description" rows="10" cols="20" className='position__input'></textarea>
            </div>

            <div>
              <Button
                type="submit"
                className="js-btn primary"
                icon='fa-solid fa-save'
                text='Save Job' />

              <Button
                type="button"
                onClick={toggleEditMode}
                className="js-btn error"
                icon='fa-solid fa-xmark'
                text='Cancel' />
            </div>
          </form>
        </div>
        :
        <div className="job-list">
          {isLoading ?
            <Loader /> :
            <ul>
              {jobPosts.map(item => (
                <li key={item._id}>
                  <div className='list-item'>
                    <div className="details">
                      {item.title} || <span>{item.location}</span>
                    </div>

                    <div className="list-action">
                      <Button
                        type="button"
                        className="js-btn default"
                        icon='fa-solid fa-pencil'
                        text=''
                      />
                      <Button
                        type="button"
                        onClick={(event) => removeJob(event, item._id)}
                        className="js-btn error"
                        icon='fa-solid fa-trash'
                        text=''
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          }
        </div>
      }
    </div>
  )
}

export default PostedJobs
