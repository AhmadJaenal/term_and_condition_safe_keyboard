import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Check, ImageOff } from 'lucide-react'
import Section from '../components/Section.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { useI18n } from '../i18n/LanguageContext.jsx'

const AUTOPLAY_MS = 5000
const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function ScreenImage({ src, alt, comingLabel }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="flex h-full w-[240px] flex-col items-center justify-center gap-3 rounded-[2.5rem] border border-dashed border-line bg-paper-card px-6 text-center text-ink-muted">
        <ImageOff className="h-8 w-8" aria-hidden="true" />
        <p className="text-xs font-medium leading-relaxed">
          {comingLabel}
          <br />
          <span className="opacity-70">{src}</span>
        </p>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="block h-full w-auto max-w-full drop-shadow-[0_34px_64px_rgba(11,26,15,0.26)]"
    />
  )
}

export default function AppShowcase() {
  const { t } = useI18n()
  const screens = t('showcase.screens')
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)
  const count = screens.length
  const screen = screens[active]

  const go = useCallback((next) => setActive((next + count) % count), [count])
  const pick = (i) => {
    setActive(i)
    setPaused(true)
  }

  useEffect(() => {
    if (paused || reduceMotion()) return
    const t = setInterval(() => setActive((i) => (i + 1) % count), AUTOPLAY_MS)
    return () => clearInterval(t)
  }, [paused, count])

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 40) {
      go(active + (dx < 0 ? 1 : -1))
      setPaused(true)
    }
    touchX.current = null
  }
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') pick((active + 1) % count)
    else if (e.key === 'ArrowLeft') pick((active - 1 + count) % count)
  }

  return (
    <Section id="aplikasi" tone="card">
      <SectionHeading
        eyebrow={t('showcase.eyebrow')}
        eyebrowIcon="ScanSearch"
        title={
          <>
            {t('showcase.titleLead')}{' '}
            <span className="text-brand-600">{t('showcase.titleAccent')}</span>
          </>
        }
        desc={t('showcase.desc')}
      />

      <Reveal className="mt-14">
        <div
          className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Tab list + detail layar aktif */}
          <div
            role="tablist"
            aria-label={t('a11y.appScreensLabel')}
            onKeyDown={onKeyDown}
            className="order-2 flex flex-col gap-2.5 lg:order-1"
          >
            {screens.map((s, i) => {
              const on = i === active
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  id={`tab-${s.id}`}
                  aria-selected={on}
                  aria-controls={`panel-${s.id}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => pick(i)}
                  className={`rounded-2xl border p-4 text-left transition-all ${
                    on
                      ? 'border-brand-400 bg-brand-50 shadow-card'
                      : 'border-line bg-paper-card hover:border-brand-200 hover:bg-brand-50/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
                        on ? 'bg-brand-500 text-white' : 'bg-brand-100 text-brand-700'
                      }`}
                    >
                      <Icon name={s.icon} className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <span className={`text-sm font-bold ${on ? 'text-brand-800' : 'text-ink'}`}>
                      {s.tab}
                    </span>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      on ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm font-semibold text-ink">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.caption}</p>
                      <ul className="mt-3 flex flex-col gap-1.5">
                        {s.points.map((p) => (
                          <li key={p} className="flex gap-2 text-xs text-ink-soft">
                            <Check
                              className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-500"
                              strokeWidth={3}
                            />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Perangkat */}
          <div className="order-1 flex flex-col items-center gap-5 lg:order-2">
            <div
              className="relative w-full max-w-[300px]"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-10 bottom-10 -z-10 rounded-full bg-brand-300/25 blur-3xl"
              />
              <div
                key={active}
                role="tabpanel"
                id={`panel-${screen.id}`}
                aria-labelledby={`tab-${screen.id}`}
                className="flex h-[600px] select-none items-center justify-center motion-safe:animate-slide-in"
              >
                <ScreenImage
                  src={screen.src}
                  alt={screen.title}
                  comingLabel={t('showcase.screenshotComing')}
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  go(active - 1)
                  setPaused(true)
                }}
                aria-label={t('a11y.prevScreen')}
                className="absolute -left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper-card text-ink shadow-card transition hover:border-brand-300 hover:text-brand-700 sm:flex lg:-left-6"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => {
                  go(active + 1)
                  setPaused(true)
                }}
                aria-label={t('a11y.nextScreen')}
                className="absolute -right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper-card text-ink shadow-card transition hover:border-brand-300 hover:text-brand-700 sm:flex lg:-right-6"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              {screens.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => pick(i)}
                  aria-label={`${t('a11y.showScreen')} ${s.tab}`}
                  aria-current={i === active}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? 'w-6 bg-brand-500' : 'w-2 bg-brand-200 hover:bg-brand-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
