import React from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import JobPostingCard from '../../components/JobPostingCard';

const JobPostingList = () => {
  const navigate = useNavigate();
  const navigateJob = (evt, postId) => {
    console.log(evt);
    navigate(`/jobDetails/${postId}`);
  }
  return (
    <main >
      <section className="posting-details-header"></section>
      <div className="company-card">
        <div className="company-logo"><label>img</label></div>
        <div className="company-name"> <label >Test2</label></div>
        <div className="company-website"> <label >Test3</label></div>
      </div>
      <section className="job-details">
        <label id='details-labels'>Date</label> - <label >Job Type</label><br />
        <div className='flex-div'>
          <h1>Job Title</h1>
          <Button
            className="apply-btn"
            text="Apply Now" />
        </div>
        <label>location</label>
        <section>
          <h1> Requirements</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
               ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.</p>
        </section>
        <section>
          <h1>What you will do?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
               ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
               ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.</p>
        </section>
      </section>
      <section className='apply-now'> Apply now</section>
    </main>
  )
}

export default JobPostingList;