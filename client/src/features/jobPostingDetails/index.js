import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import { formatDistance, parseISO } from 'date-fns'

const JobPostingDetails = () => {
  const { postId } = useParams();

  const [postDetails, setPostDetails] = useState(null);
  const [employerInfo, setEmployerInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const formatDate = (date) => {
    return formatDistance(parseISO(date), new Date(), { addSuffix: true })
  }

  useEffect(() => {
    let cancelled = false;

    const loadDetails = async () => {
      setIsLoading(true);
      setError('');

      try {
        const { data } = await axios.get(`/jobposts/${postId}/`);
        if (cancelled) return;

        setPostDetails(data);
        const { data: employerData } = await axios.get(`/users/${data.employer}/`);
        if (cancelled) return;

        setEmployerInfo(employerData);
      } catch {
        if (!cancelled) {
          setPostDetails(null);
          setEmployerInfo({});
          setError('Unable to load job details. Please try again.');
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    loadDetails();

    return () => {
      cancelled = true;
    };
  }, [postId]);

  const apply = () => {
    alert("Applied successfully!");
  }

  if (isLoading) {
    return (
      <main className="body-color">
        <Loader />
      </main>
    );
  }

  if (error || !postDetails) {
    return (
      <main className="body-color">
        <p className="error">{error || 'Job not found.'}</p>
      </main>
    );
  }

  return (
    <main className='body-color'>
      <section className="posting-details-header"></section>
      <div className="company-card">
        <div className="company-logo"><img src={employerInfo.avatar} alt='Company logo'/></div>
        <div className="company-name"> <label>{employerInfo.username}</label></div>
        <div className="company-website"> <label>{employerInfo.email}</label></div>
      </div>
      <section className="job-details">
        <label id='details-labels'>{formatDate(postDetails.postedDate)}</label> - <label>{postDetails.jobType}</label><br />
        <div className='flex-div'>
          <h1>{postDetails.title}</h1>
          <Button
            type="button"
            onClick={apply}
            className="js-btn primary"
            text="Apply Now" />
        </div>
        <label>{postDetails.location}</label>
        <section>
          <h1>Requirements</h1>
          <p>{postDetails.description}</p>
        </section>
      </section>
      <section className='apply-now'>
        <Button
          type="button"
          onClick={apply}
          className="js-btn primary"
          text="Apply Now" />
      </section>
    </main>
  )
}

export default JobPostingDetails;
