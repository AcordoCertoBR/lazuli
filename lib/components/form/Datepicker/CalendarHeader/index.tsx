import { IconChevronLeft, IconChevronRight } from '../../../icons'
import { Segment } from '../Segment'
import { CalendarDate } from '@internationalized/date'

import { months } from './constants'
import { useCalendarHeader } from './hook'

import './styles.scss'

type CalendarHeaderProps = {
  defaultFocusDate?: CalendarDate
}

export const CalendarHeader = ({ defaultFocusDate }: CalendarHeaderProps) => {
  const {
    focusNextPage,
    focusPreviousPage,
    focusedDate,
    handleFocusNewMonth,
    yearsOptions,
    handleFocusNewYear,
  } = useCalendarHeader({ defaultFocusDate })

  return (
    <div className="au-datepicker__header" aria-label="Anterior">
      <button
        className="au-datepicker__header-navigation-btn"
        onClick={focusPreviousPage}>
        <IconChevronLeft />
      </button>
      <div className="au-datepicker__header-segments">
        <Segment
          currentValue={focusedDate.month}
          mobileTitle="Escolha o mês"
          onSelect={handleFocusNewMonth}
          options={months}
        />
        <Segment
          currentValue={focusedDate.year}
          mobileTitle="Escolha o ano"
          onSelect={handleFocusNewYear}
          options={yearsOptions}
        />
      </div>
      <button
        className="au-datepicker__header-navigation-btn"
        aria-label="Próximo"
        onClick={focusNextPage}>
        <IconChevronRight />
      </button>
    </div>
  )
}
