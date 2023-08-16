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
    <main>
    <section className="search-bar">
      <Input
        icon="fa-solid fa-magnifying-glass icon"
        placeholder="Filter by title, company, expterise"
        type="text"
        className="position__input" />

      <Input
        icon="fa-solid fa-location-dot icon"
        placeholder="Filter by location ..."
        type="text"
        className="position__input" />

      <Button
        className="js-btn primary"
        icon="fa-solid fa-magnifying-glass"
        text="Search" />
    </section>

    <section className="job-postings">
    {[1,2,3,4,5,6,7,8,9,10,11].map((post) =>
      <JobPostingCard postId={post} key={post} onClick={(event) => navigateJob(event, post)}/>
    )}
    </section>
  </main>
  )
}

export default JobPostingList;