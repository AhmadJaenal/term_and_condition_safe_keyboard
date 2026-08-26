// Bingkai ponsel ala iPhone. Isi layar dioper lewat children.
export default function PhoneMockup({ children, className = '', screenClassName = '' }) {
  return (
    <div
      className={`relative mx-auto w-[280px] rounded-[2.75rem] border border-black/10 bg-[#0d0f0e] p-2.5 shadow-[0_30px_70px_-20px_rgba(16,32,20,0.45)] sm:w-[300px] ${className}`}
    >
      {/* Dynamic island */}
      <div className="absolute left-1/2 top-4 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div
        className={`relative overflow-hidden rounded-[2.15rem] bg-[#101312] ${screenClassName}`}
      >
        {children}
      </div>
    </div>
  )
}
