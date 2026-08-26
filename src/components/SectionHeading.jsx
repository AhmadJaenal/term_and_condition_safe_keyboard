import Badge from './Badge.jsx'
import Reveal from './Reveal.jsx'

export default function SectionHeading({
  eyebrow,
  eyebrowIcon = 'Sparkles',
  title,
  desc,
  align = 'center',
  className = '',
}) {
  const alignCls = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left'
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignCls} ${className}`}>
      {eyebrow && <Badge icon={eyebrowIcon}>{eyebrow}</Badge>}
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {desc && <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{desc}</p>}
    </Reveal>
  )
}
