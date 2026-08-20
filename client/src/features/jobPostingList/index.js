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
  const [error, setError] = useState('');
  const [paramSet, setParamsSet] = useState({
    name: '',
    location: '',
  });

  const navigate = useNavigate();

  const navigateJob = (evt, postId) => {
    navigate(`/jobDetails/${postId}`);
  }

  const fetchNewPosts = () => {
    setIsLoading(true);
    setError('');

    axios.get('/jobposts/', { params: { paramSet } })
      .then(({ data }) => {
        setJobPosts(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        setError('Failed to load job postings.');
        setJobPosts([]);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      <section className="search-bar">
        <Input
          onChange={handleInputChange}
          name="name"
          icon="fa-solid fa-magnifying-glass icon"
          placeholder="Filter by title, company, expertise"
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
          type="button"
          onClick={performSearch}
          className="js-btn primary"
          icon="fa-solid fa-magnifying-glass"
          text="Search" />
      </section>

      <section className="job-postings">
        {error && <p className="error">{error}</p>}
        {isLoading ?
          <Loader /> :
          jobPosts.map(post => (
            <JobPostingCard
              post={post}
              key={post._id}
              onClick={(event) => navigateJob(event, post._id)} />
          ))
        }
      </section>
    </main>
  )
}

export default JobPostingList;
