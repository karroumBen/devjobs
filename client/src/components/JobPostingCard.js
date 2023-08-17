import React from 'react'
import { formatDistance, parseISO  } from 'date-fns'

const JobPostingCard = ({ post, onClick }) => {
  const formatDate = (date) => {
    return formatDistance(parseISO(date), new Date(), { addSuffix: true })
  }
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
        <span>{formatDate(post.postedDate)}</span>&nbsp; <span>{post.jobType}</span>
        <h3>{post.title}</h3>
        <h4>{post.employer.username}</h4>
        <span>{post.location}</span>
      </div>
    </article>
  )
}

export default JobPostingCard