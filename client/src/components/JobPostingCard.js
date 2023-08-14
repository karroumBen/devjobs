import React from 'react'
import companyLogo from '../assets/app-store.png';

const JobPostingCard = () => {
  return (
    <article className="card" tabIndex={4}>
      <img
        src={companyLogo}
        alt="company logo"
        className="card__image"
        width="50px"
        height="50px"
      />
      <div className="card__details">
        <span>5 days ago</span>&nbsp; <span>Full time</span>
        <h3>Frontend engineer</h3>
        <h4>Xcompany</h4>
        <span>United States</span>
      </div>
    </article>
  )
}

export default JobPostingCard