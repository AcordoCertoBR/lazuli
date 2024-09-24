import classNames from 'classnames'
import { useContext } from 'react'
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  Heading,
  DatePickerStateContext,
  CalendarStateContext,
} from 'react-aria-components'

type DatepickerCalendarProps = {
  isVisible: boolean
  toggleCalendar: () => void
}

const Sub = () => {
  const stateCalendar = useContext(CalendarStateContext)
  console.log({ stateCalendar })
  return <button onClick={stateCalendar.focusNextPage}>lala</button>
}

export const DatepickerCalendar = ({
  isVisible,
  toggleCalendar,
}: DatepickerCalendarProps) => {
  const componentClass = classNames('au-datepicker__calendar', {
    'au-datepicker__calendar--visible': isVisible,
  })

  const fmtWeekday = (day: string) => {
    const capitalized = `${day.charAt(0).toUpperCase()}${day.slice(1)}`
    return capitalized.replace('.', '')
  }
  const statePicker = useContext(DatePickerStateContext)

  console.log({ statePicker })

  return (
    <div className={componentClass}>
      <div
        className="au-datepicker__calendar-backdrop"
        onClick={toggleCalendar}
      />
      <div className="au-datepicker__calendar-card">
        <Calendar className="au-datepicker__calendar-base">
          <div className="au-datepicker__header">
            <Heading />
            <Sub />
          </div>
          <CalendarGrid
            className="au-datepicker__calendar-grid"
            weekdayStyle="short">
            <CalendarGridHeader>
              {(day) => (
                <CalendarHeaderCell className="au-datepicker__calendar-weekday">
                  {fmtWeekday(day)}
                </CalendarHeaderCell>
              )}
            </CalendarGridHeader>
            <CalendarGridBody>
              {(date) => (
                <CalendarCell
                  className="au-datepicker__calendar-day"
                  date={date}
                />
              )}
            </CalendarGridBody>
          </CalendarGrid>
        </Calendar>
      </div>
    </div>
  )
}
