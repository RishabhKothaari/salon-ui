import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {bookServiceApi} from '../services/apiservice'
import Card from './Card'
function ChooseServiceSlot() {
  let {id, name} = useParams()
  const [chooseDate, setDate] = useState(new Date().toISOString().split('T')[0])
  const [error, setError] = useState(null)
  const [slotsIsLoaded, setSlotsLoaded] = useState(false)
  const [slots, setSlots] = useState([])
  const handleChange = e => {
    setDate(e.target.value)
  }

  const bookSlot = selectedSlot => {

  }
  const getSlotCardDetails = slot => {
    return {
      id: slot.id,
      name: slot.selectedService.name,
      h3: slot.stylistName,
      description: new Date(Date.parse(`${slot.slotFor}`)).toLocaleTimeString(),
      selectedService: slot.selectedService,
      slot: slot,
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    fetchSlots()
  }
  const fetchSlots = async () => {
    try {
      const {url, mode} = bookServiceApi(id, chooseDate)
      const result = await (await fetch(url, {mode: mode})).json()
      setSlots(result)
      setSlotsLoaded(true)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchSlots()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div style={{margin: '1rem auto'}}>
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="form-group custom-control  my-1 mr-sm-2">
            <label htmlFor="slotDate" style={{marginRight: '1rem'}}>
              Choose a Date for {name}
            </label>
            <input
              type="date"
              className="form-control mb-2 mr-sm-2"
              id="slotDate"
              value={chooseDate}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Show Slots
          </button>
        </form>
      </div>
      <div>
        <div style={{visibility: Boolean(error) ? 'visible' : 'hidden'}}>
          {error}
        </div>
        <div style={{visibility: !slotsIsLoaded ? 'visible' : 'hidden'}}>
          Loading...
        </div>
        <div className="row">
          {slots.map(slot => (
            <Card
              key={slot.id}
              details={getSlotCardDetails(slot)}
              action={bookSlot}
            />
          ))}
        </div>
      </div>
    </>
  )
}
export default ChooseServiceSlot
