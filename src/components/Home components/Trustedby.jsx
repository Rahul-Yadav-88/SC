import React, { useMemo } from 'react'

const TrustedBy = () => {
  const companies = [
    { name: 'IPSUM', logo: '/trust1.png' },
    { name: 'Logoipsum', logo: '/trust2.png' },
    { name: 'Company', logo: '/trust3.png' },
    { name: 'Logoipsum Alt', logo: '/trust4.png' },
    { name: 'Logo', logo: '/trust1.png' },
  ]

  const marquee = useMemo(() => [...companies, ...companies], [companies])

  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#262626]">Trusted by</h2>

        {/* Marquee logos row */}
        <div className="relative mt-14">
          <div
            className="overflow-hidden"
            style={{ WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)', maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}
          >
            <div className="flex items-center gap-12 px-2 min-w-max animate-[scrollx_25s_linear_infinite] hover:[animation-play-state:paused]">
              {marquee.map((company, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-10 sm:h-12 md:h-14 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
