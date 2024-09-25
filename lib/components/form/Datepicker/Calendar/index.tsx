import classNames from 'classnames'
import { useContext, useEffect, useRef } from 'react'
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DatePickerStateContext,
  DateValue,
} from 'react-aria-components'
import { CalendarHeader } from '../CalendarHeader'

import { useOutsideClick } from '../../../../core/hooks/useOutsideClick'
import { BREAKPOINT_MD } from '../../../../main'

import './styles.scss'

type DatepickerCalendarProps = {
  isVisible: boolean
  toggleCalendar: () => void
  onChange: (date: DateValue) => void
}

export const DatepickerCalendar = ({
  isVisible,
  toggleCalendar,
  onChange,
}: DatepickerCalendarProps) => {
  const rootEl = useRef<HTMLDivElement>(null)
  const { listenOutsideClick } = useOutsideClick({
    rootEl,
    breakpoint: BREAKPOINT_MD,
    onLoseFocusCB: toggleCalendar,
  })

  const componentClass = classNames('au-datepicker__calendar', {
    'au-datepicker__calendar--visible': isVisible,
  })

  useEffect(() => {
    if (isVisible) {
      listenOutsideClick()
    }
  }, [isVisible])

  const fmtWeekday = (day: string) => {
    const capitalized = `${day.charAt(0).toUpperCase()}${day.slice(1)}`
    return capitalized.replace('.', '')
  }
  const statePicker = useContext(DatePickerStateContext)

  console.log({ statePicker })

  return (
    <div className={componentClass} ref={rootEl}>
      <div
        className="au-datepicker__calendar-backdrop"
        onClick={toggleCalendar}
      />
      <div className="au-datepicker__calendar-card">
        <Calendar
          className="au-datepicker__calendar-base"
          onChange={(date) => onChange(date)}>
          <CalendarHeader />
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
