'use client'

import { useState } from 'react'

interface IPhoneMockupProps {
  screens: React.ReactNode[]
}

export function IPhoneMockup({ screens }: IPhoneMockupProps) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col items-center gap-4">
      {/* iPhone frame */}
      <div className="relative w-[260px] select-none">
        {/* Outer shell */}
        <div className="relative bg-[#1A1A1A] rounded-[44px] p-[3px] shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
          {/* Side buttons (decorative) */}
          <div className="absolute -left-[3px] top-[90px] w-[3px] h-[32px] bg-[#3A3A3A] rounded-l-sm" />
          <div className="absolute -left-[3px] top-[132px] w-[3px] h-[56px] bg-[#3A3A3A] rounded-l-sm" />
          <div className="absolute -left-[3px] top-[198px] w-[3px] h-[56px] bg-[#3A3A3A] rounded-l-sm" />
          <div className="absolute -right-[3px] top-[140px] w-[3px] h-[72px] bg-[#3A3A3A] rounded-r-sm" />

          {/* Inner bezel */}
          <div className="bg-black rounded-[42px] overflow-hidden">
            {/* Dynamic Island */}
            <div className="flex justify-center pt-3 pb-1 bg-black">
              <div className="w-[90px] h-[28px] bg-black border border-[#2A2A2A] rounded-full" />
            </div>

            {/* Screen */}
            <div className="bg-white overflow-hidden" style={{ height: '520px' }}>
              <div className="relative w-full h-full overflow-hidden">
                {screens.map((screen, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{ opacity: active === i ? 1 : 0, pointerEvents: active === i ? 'auto' : 'none' }}
                  >
                    {screen}
                  </div>
                ))}
              </div>
            </div>

            {/* Home indicator */}
            <div className="flex justify-center py-2 bg-white">
              <div className="w-[100px] h-[4px] bg-black/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="flex gap-2">
        {screens.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full transition-colors ${active === i ? 'bg-mare' : 'bg-linha'}`}
            aria-label={`Tela ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
