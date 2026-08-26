// Kartu dasar putih dengan border + shadow lembut. Dipakai ulang di banyak section.
export default function Card({ as: As = 'div', className = '', hover = false, children, ...rest }) {
  return (
    <As
      className={`rounded-3xl border border-line bg-paper-card p-6 shadow-card ${
        hover ? 'transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-card-hover' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </As>
  )
}
