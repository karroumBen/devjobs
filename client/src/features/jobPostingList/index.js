import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import JobPostingCard from '../../components/JobPostingCard';

const JobPostingList = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paramSet, setParamsSet] = useState({
    name: '',
    location: '',
  });

  const navigate = useNavigate();
  const navigateJob = (evt, postId) => {
    navigate(`/jobDetails/${postId}`);
  }

  const fetchNewPosts = () => {
    axios.get('/jobposts/', { params: { paramSet }})
    .then(({ data }) => {
      setJobPosts([...data]);
    })
    .catch((error) => {
      console.log({ error });
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setParamsSet({
      ...paramSet,
      [name]: value,
    });
  };

  const performSearch = () => {
    fetchNewPosts();
  };

  useEffect(() => {
    fetchNewPosts();
  }, [])
  
  return (
    <main>
    <section className="search-bar">
      <Input
        onChange={handleInputChange}
        name="name"
        icon="fa-solid fa-magnifying-glass icon"
        placeholder="Filter by title, company, expterise"
        type="text"
        className="position__input" />

      <Input
        name="location"
        onChange={handleInputChange}
        icon="fa-solid fa-location-dot icon"
        placeholder="Filter by location ..."
        type="text"
        className="position__input" />

      <Button
        onClick={performSearch}
        className="js-btn primary"
        icon="fa-solid fa-magnifying-glass"
        text="Search" />
    </section>

    <section className="job-postings">
      {
        isLoading ?
        <Loader /> :
        <>
        {
          jobPosts.map(post => {
            return <JobPostingCard
                      post={post}
                      key={post._id}
                      onClick={(event) => navigateJob(event, post._id)}/>
          })}
        </>
      }
    </section>
  </main>
  )
}

export default JobPostingList;