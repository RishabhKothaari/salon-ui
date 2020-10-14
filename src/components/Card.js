import React from 'react'

function Card({details, action}) {
  const handleClick = e => {
    e.preventDefault()
    action(details)
  }
  return (
    <div
      className="card text-center"
      style={{width: '21rem', margin: '1rem'}}
      key={details.id}
    >
      {/* <img className="card-img-top" src="..." alt="Card image cap" />
       */}
      <div className="card-header">{details.name}</div>
      <h3 style={{margin: 'inherit'}}>{details.h3}</h3>
      <div className="card-body">
        <p className="card-text">{details.description}</p>
        <button className="btn btn-outline-primary" onClick={handleClick}>
          Book Now
        </button>
      </div>
      <p>{details.footer}</p>
    </div>
  )
}
export default Card
