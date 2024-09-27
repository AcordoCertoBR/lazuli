type ErrorMessageProps = {
  hasError?: boolean
  message?: string
}

export const FieldErrorMessage = ({ hasError, message }: ErrorMessageProps) => {
  if (!hasError || !message) return null

  return <p className="au-field__error-message">{message}</p>
}
