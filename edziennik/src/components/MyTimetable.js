import React from 'react'
import { Subtitle, Columns, Column } from 'bloomer'

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
  const oneDayInPixels = 8 * ONE_HOUR_IN_PIXELS + 'px' // 480px
  return <div style={{ flex: 1, height: oneDayInPixels, background: 'yellow' }}>
    <DayScheduleItem hours={1}/>
    <DayScheduleItem hours={2}/>
    <DayScheduleItem hours={1}/>
    <DayScheduleItem hours={4}/>
  </div>
}
  
const DayScheduleItem = props => {
  return <div style={{
    width: '100%',
    height: ONE_HOUR_IN_PIXELS * props.hours + 'px',
    background: 'lightgrey',
    boxSizing: 'border-box',
    border: '2px solid black',
    borderCollapse: 'collapse'
  }}>
    JS
  </div>
}

const MyTimetable = props => {
  return <div>
    <Days />
    <div style={{display: 'flex', border: '2px solid black', boxSizing: 'border-box'}}>
      <DaySchedule/>
      <DaySchedule/>
      <DaySchedule/>
      <DaySchedule/>
      <DaySchedule/>
      <DaySchedule/>
      <DaySchedule/>
    </div>
  </div>
}

export default MyTimetable