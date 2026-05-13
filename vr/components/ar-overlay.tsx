export default function AROverlay() {
  return (
    <>
      {/* Corner brackets - AR HUD frame */}
      <div className="absolute inset-0 pointer-events-none z-40">
        {/* Top Left */}
        <div className="absolute top-4 left-4">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M0 20V0H20" stroke="#F4C95D" strokeWidth="3" />
            <path d="M0 15V5H10" stroke="#B49FCC" strokeWidth="1" strokeOpacity="0.5" />
          </svg>
        </div>
        
        {/* Top Right */}
        <div className="absolute top-4 right-4">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M60 20V0H40" stroke="#F4C95D" strokeWidth="3" />
            <path d="M60 15V5H50" stroke="#B49FCC" strokeWidth="1" strokeOpacity="0.5" />
          </svg>
        </div>
        
        {/* Bottom Left */}
        <div className="absolute bottom-4 left-4">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M0 40V60H20" stroke="#F4C95D" strokeWidth="3" />
            <path d="M0 45V55H10" stroke="#B49FCC" strokeWidth="1" strokeOpacity="0.5" />
          </svg>
        </div>
        
        {/* Bottom Right */}
        <div className="absolute bottom-4 right-4">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M60 40V60H40" stroke="#F4C95D" strokeWidth="3" />
            <path d="M60 45V55H50" stroke="#B49FCC" strokeWidth="1" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          background: `radial-gradient(ellipse at center, transparent 40%, rgba(11, 16, 32, 0.8) 100%)`
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(#F4C95D 1px, transparent 1px),
            linear-gradient(90deg, #F4C95D 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </>
  )
}
