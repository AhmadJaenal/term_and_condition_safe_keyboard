import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import FaqItem from '../components/FaqItem.jsx'
import { FAQ } from '../data/content.js'

export default function Faq() {
  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="Pertanyaan Umum"
        eyebrowIcon="MessageSquareWarning"
        title={
          <>
            Yang sering <span className="text-brand-600">ditanyakan</span>
          </>
        }
      />

      <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
        {FAQ.map((item) => (
          <FaqItem key={item.q} {...item} />
        ))}
      </div>
    </Section>
  )
}
