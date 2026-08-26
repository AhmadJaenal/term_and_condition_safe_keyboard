import Card from './Card.jsx'
import IconTile from './IconTile.jsx'

export default function FeatureCard({ icon, tone, title, desc }) {
  return (
    <Card hover className="flex h-full flex-col gap-4">
      <IconTile name={icon} tone={tone} size="lg" />
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-bold text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-ink-soft">{desc}</p>
      </div>
    </Card>
  )
}
