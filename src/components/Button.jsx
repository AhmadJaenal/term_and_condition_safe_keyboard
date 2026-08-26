import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

const VARIANTS = {
  primary:
    'bg-brand-500 text-white shadow-cta hover:bg-brand-600 focus-visible:outline-brand-600',
  dark: 'bg-[#161616] text-white hover:bg-black focus-visible:outline-black',
  outline:
    'bg-white text-ink ring-1 ring-line hover:ring-brand-400 hover:text-brand-700 focus-visible:outline-brand-500',
  ghost: 'bg-transparent text-brand-700 hover:bg-brand-50 focus-visible:outline-brand-500',
}

const SIZES = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  icon,
  iconRight,
  className = '',
  ...rest
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  const inner = (
    <>
      {icon && <Icon name={icon} className="h-4 w-4" strokeWidth={2.5} />}
      {children}
      {iconRight && <Icon name={iconRight} className="h-4 w-4" strokeWidth={2.5} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    )
  }
  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {inner}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {inner}
    </button>
  )
}
