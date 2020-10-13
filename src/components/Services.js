import React, {useState} from 'react'
import {useEffect} from 'react'

function Services() {
  const [error, setError] = useState(null)
  const [servicesIsLoaded, servicesLoaded] = useState(false)
  const [services, servicesList] = useState([])
  const fetchServices = async () => {
    try {
      const result = await (
        await fetch('http://localhost:8080/api/services/services', {
          mode: 'cors',
        })
      ).json()
      servicesList(result)
      servicesLoaded(true)
    } catch (error) {
      console.log('error while fetching services ', error)
      setError(error)
    }
  }
  useEffect(() => {
    fetchServices()
  }, [])
  if (error) {
    return <div className="error">{error}</div>
  } else if (!servicesIsLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <>
        {services.map(service => (
          <div
            className="card text-center"
            style={{width: '21rem', margin: '1rem'}}
          key={service.id}>
            {/* <img className="card-img-top" src="..." alt="Card image cap" />
             */}
            <div className="card-header">{service.name}</div>
            <h3 style={{margin:'inherit'}}>${service.price}</h3>
            <div className="card-body">
              <p className="card-text">{service.description}</p>
              <button className="btn btn-outline-primary"> Book Now </button>
            </div>
            <p>{service.timeInMinutes} minutes</p>
          </div>
        ))}
      </>
    )
  }
}
export default Services
