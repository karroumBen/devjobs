import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Button from '../../components/Button';
import Loader from '../../components/Loader';


const JobPostingDetails = () => {
  const { postId } = useParams();

  const [postDetails, setPostDetails] = useState();
  const [employerInfo, setEmployerInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [employerId, setEmployerId] = useState()

  const getDetails = () => {
    console.log();
    axios.get(`/jobposts/${postId}/`)
      .then(({ data }) => {
        console.log("employer", data);
        setEmployerId(data.employer)
        setPostDetails(data);
        return data.employer
      }).then((employer) => {
        getEmployerInfo(employer);

      })
      .catch((error) => {
        console.log({ error });
      })

  }
  const getEmployerInfo = (employer) => {
    console.log("employer ID", employer);
    axios.get(`/users/${employer}/`)
      .then(({ data }) => {
        console.log(data);
        console.log(data.avatar);
        setEmployerInfo(data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.log({ error });
      })

  }



  useEffect(() => {
    getDetails();
  }, [])


  return (

    <main className='grey-background'>
      {isLoading ?
        <Loader /> :
        <>
          <section className="posting-details-header"></section>
          <div className="company-card">
            <div className="company-logo"><img src={employerInfo.avatar} /></div>
            <div className="company-name"> <label >{employerInfo.username}</label></div>
            <div className="company-website"> <label >{employerInfo.email}</label></div>
          </div>
          <section className="job-details">
            <label id='details-labels'>{postDetails.postedDate}</label> - <label >{postDetails.jobType}</label><br />
            <div className='flex-div'>
              <h1>{postDetails.title}</h1>
              <Button
                className="apply-btn"
                text="Apply Now" />
            </div>
            <label>{postDetails.location}</label>
            <section>
              <h1> Requirements</h1>
              <p>{postDetails.description}</p>
            </section>
            <section>
              <h1>What you will do?</h1>
              <p>{postDetails.description}</p>
            </section>
          </section>
          <section className='apply-now'> Apply now</section>
        </>
      }
    </main>
  )
}

export default JobPostingDetails;