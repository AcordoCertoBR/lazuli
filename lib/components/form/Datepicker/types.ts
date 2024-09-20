import { InputProps } from '../InputField'

type EventHandler = (value?: Date) => void

type DefaultValue = 'empty' | 'now' | Date

export type FormatAdapter = {
  /** mask typed date  */
  maskDate: (date: string) => string
  /** Validate a string in the format */
  validateFormat: (date: string) => boolean
  /** Validate if is a valid date */
  validate: (date: string) => boolean
  toDate: (dateStr: string) => Date
}

export type DatepickerProps = InputProps & {
  calendar?: boolean
  defaultDate?: Date
  style?: React.CSSProperties
  placeholder?: string
  value?: Date
  onChange?: EventHandler
  onBlur?: EventHandler
  /** Field default value */
  defaultValue?: DefaultValue
  format?: FormatAdapter
}

export type UseDatePickerProps = {
  onChange?: EventHandler
  disabled?: boolean
  value?: Date
  defaultValue?: DefaultValue
  format?: FormatAdapter
}
