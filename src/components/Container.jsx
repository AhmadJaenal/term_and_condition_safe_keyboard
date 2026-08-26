export default function Container({ as: As = 'div', className = '', children }) {
  return <As className={`container-page ${className}`}>{children}</As>
}
