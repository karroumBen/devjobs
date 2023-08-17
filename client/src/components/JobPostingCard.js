import React from 'react'
import companyLogo from '../assets/app-store.png';

const JobPostingCard = ({ post, onClick }) => {
  return (
    <article onClick={onClick} className="card" tabIndex={4}>
      <img
        src={post.employer.avatar}
        alt="company logo"
        className="card__image"
        width="50px"
        height="50px"
      />
      <div className="card__details">
        <span>5 days ago</span>&nbsp; <span>Full time</span>
        <h3>{post.title}</h3>
        <h4>{post.employer.username}</h4>
        <span>{post.location}</span>
      </div>
    </article>
  )
}

export default JobPostingCard