import React from 'react'

const Tile = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
)

const LogoTile = ({ src, alt }) => (
  <Tile className="flex items-center justify-center p-10">
    <img src={src} alt={alt} className="h-16 object-contain" />
  </Tile>
)

const PortraitTile = ({ src, alt }) => (
  <Tile>
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </Tile>
)

const QuoteTile = ({ quote, name, title }) => (
  <div className="bg-orange-50 rounded-2xl border border-orange-100 shadow-sm h-full p-6 sm:p- text-left">
    <div className="text-3xl leading-none text-gray-800 sm:hidden">“</div>
    <p className="text-gray-700 text-sm sm:text-base mt-2">
      {quote}
    </p>
    <div className="mt-2">
      <p className="font-semibold text-gray-900 text-sm">{name}</p>
      <p className="text-gray-600 text-xs">{title}</p>
    </div>
  </div>
)

const Testimonials = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What Clients Say
        </h2>

        {/* Grid mirrors the reference with consistent square tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[220px]">
          {/* Row 1 */}
          <PortraitTile src="/clientsay1.png" alt="Client" />
          <LogoTile src="/clientsay2.png" alt="Mercedes" />
          <div className="lg:col-span-2">
            <QuoteTile
              quote="The team at Small Copper built our app seamlessly and ahead of schedule. Their innovative approach made the whole process effortless."
              name="Aarav Sharma"
              title="CEO, Nexaro Technologies"
            />
          </div>

          {/* Row 2 */}
          <LogoTile src="/clientsay3.png" alt="UNIQLO" />
          <PortraitTile src="/clientsay4.png" alt="Client" />
          <LogoTile src="/clientsay5.png" alt="BBC" />
          <PortraitTile src="/clientsay6.png" alt="Client" /> 

          {/* Row 3 */}
          <div className="lg:col-span-2">
            <QuoteTile
              quote="Our website redesign improved customer engagement from day one. We’re impressed with Small Copper’s professionalism and ongoing support."
              name="Emily Johnson"
              title="Director, BrightEdge Solutions"
            />
          </div>
          <PortraitTile src="/clientsay7.png" alt="Client" />
          <PortraitTile src="/clientsay8.png" alt="Client" />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
