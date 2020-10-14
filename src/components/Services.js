import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {servicesApi} from '../services/apiservice'
import Card from './Card'

function Services() {
  const [error, setError] = useState(null)
  const [servicesIsLoaded, servicesLoaded] = useState(false)
  const [services, servicesList] = useState([])
  let history = useHistory()

  const chooseService = service => {
    //Route to book choosen service
    history.push(`/bookservice/${service.id}/${service.name}`)
  }
  const getCardDetails = service => {
    return {
      id: service.id,
      name: service.name,
      h3: `$${service.price}`,
      description: service.description,
      footer: `${service.timeInMinutes} minutes`,
      service: service,
    }
  }

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const {url, mode} = servicesApi()
        const result = await (
          await fetch(url, {
            mode: mode,
          })
        ).json()
        servicesList(result)
        servicesLoaded(true)
      } catch (error) {
        setError(error.message)
      }
    }
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
          <Card
            key={service.id}
            details={getCardDetails(service)}
            action={chooseService}
          />
        ))}
      </>
    )
  }
}
export default Services
