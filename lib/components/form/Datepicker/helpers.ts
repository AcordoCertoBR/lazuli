import { CalendarDate } from '@internationalized/date'
import { AUCalendarDateShape, DefaultValue, FormatAdapter } from './types'

export const DDMMYYYY: FormatAdapter = {
  placeholder: 'DD/MM/YYYY',
  maskDate(dateStr) {
    let fmtInputDate = dateStr
    fmtInputDate = fmtInputDate.replace(/\D/g, '') // Remove non-numeric characters

    if (fmtInputDate.length > 2) {
      fmtInputDate = `${fmtInputDate.slice(0, 2)}/${fmtInputDate.slice(2)}`
    }
    if (fmtInputDate.length > 5) {
      fmtInputDate = `${fmtInputDate.slice(0, 5)}/${fmtInputDate.slice(5)}`
    }
    return fmtInputDate
  },
  validateFormat(dateStr) {
    const pattern = /^\d{2}\/\d{2}\/\d{4}$/
    return pattern.test(dateStr)
  },
  toCalendarDate(dateStr) {
    const [date, month, year] = dateStr.split('/').map(Number)
    return { date, month, year }
  },

  toString(dateObj) {
    const fmtNumber = (digit: number) =>
      String(digit).length === 1 ? `0${digit}` : String(digit)
    const { date, month, year } = dateObj

    return `${fmtNumber(date)}/${fmtNumber(month)}/${year}`
  },
  validate(dateStr) {
    const [day, month, year] = dateStr.split('/').map(Number)
    const date = new Date(year, month - 1, day)

    return (
      date.getDate() === day &&
      date.getMonth() + 1 === month &&
      date.getFullYear() === year
    )
  },
}

export function dateToPickerFormat(date: Date) {
  const converted = new CalendarDate(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  )

  return converted
}

export function AUCalendarDate(
  date: number,
  month: number,
  year: number,
): AUCalendarDateShape {
  return {
    date,
    month,
    year,
  }
}

export function getDefaultDate(
  defaultDateProp: DefaultValue,
): AUCalendarDateShape | null {
  if (defaultDateProp == 'empty') return null
  if (defaultDateProp === 'now') {
    const now = new Date()
    return {
      date: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear(),
    }
  }

  return defaultDateProp
}
