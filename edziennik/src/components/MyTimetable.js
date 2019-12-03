import React from 'react'
import { Subtitle, Button } from 'bloomer'
import textToColor from '../helpers/textToColor'

const daysSchedules = [
  [{hours: 2, text: 'JS'}, {hours: 1, text: 'HTML'}, {hours: 5, text: 'CSS'}],
  [{hours: 5, text: 'JS'}, {hours: 2, text: 'HTML'}, {hours: 1, text: 'CSS'}],
  [{hours: 2, text: 'JS'}, {hours: 3, text: 'HTML'}, {hours: 3, text: 'CSS'}],
  [{hours: 2, text: 'React'}, {hours: 1, text: 'HTML'}, {hours: 1, text: 'CSS'}],
  [{hours: 2, text: 'HTML'}, {hours: 6, text: 'CSS'}],
  [],
  []
]

const ONE_HOUR_IN_PIXELS = 80

const Day = (props) => (
  <div style={{ flex: 1 }}>
    <Subtitle
      isSize={3}
      hasTextAlign="centered">
        {props.children}
    </Subtitle>
  </div>
)

const Days = () => {
  return (
    <div style={{
      width: '100%',
      display: 'flex'
    }}>
      <Day>Monday</Day>
      <Day>Tuesday</Day>
      <Day>Wednesday</Day>
      <Day>Thursday</Day>
      <Day>Friday</Day>
      <Day>Saturday</Day>
      <Day>Sunday</Day>
    </div>
  )
}

const DaySchedule = props => {
  const {daySchedules} = props
  const scheduledHours = daySchedules.reduce((acc, daySchedule) => {
    return acc + daySchedule.hours
  }, 0)

  const oneDayInPixels = 8 * ONE_HOUR_IN_PIXELS + 'px' // 480px
  return <div style={{ flex: 1, height: oneDayInPixels, background: 'white' }}>
    {daySchedules.map((daySchedule, index) => {
      return <DayScheduleItem key={index} text={daySchedule.text} hours={daySchedule.hours} />
    })}
    {scheduledHours < 8 ? <Button isFullWidth isColor="info">+</Button> : null}
  </div>
}
  
const DayScheduleItem = props => {
  const {text = '', hours = 2} = props
  const color = textToColor(text)
  console.log(color)
  
  return <div style={{
    width: '100%',
    height: ONE_HOUR_IN_PIXELS * hours + 'px',
    background: color,
    boxSizing: 'border-box',
    border: '2px solid black',
    borderCollapse: 'collapse',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div style={{ padding: '8px', background: "white", color: "black", display: "inline", margin: '16px', borderRadius: "8px"}}>
      {text}
    </div>
  </div>
}

const MyTimetable = props => {
  return <div>
    <Days />
    <div style={{display: 'flex', border: '2px solid black', boxSizing: 'border-box'}}>
      {daysSchedules.map((daySchedules, index) => {
        return <DaySchedule key={index} daySchedules={daySchedules} />
      })}
    </div>
  </div>
}

export default MyTimetable