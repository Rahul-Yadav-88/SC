import { NavLink } from "react-router-dom"

const Footer = () => {
  const footerData = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development" },
        { label: "Mobile App Development" },
        { label: "Cloud & DevOps" },
        { label: "AI & Machine Learning" },
        { label: "UI/UX Design" },
        { label: "IT Consulting" },
      ],
    },
    {
      title: "Contact Info",
      links: [
        {
          label: "Address: E-304, 6th Floor, GSPL Tower, Mohali, 140307, PB, IN",
          href: "https://www.google.com/maps/place/GSPL+Tower/@30.6987419,76.6911621,17z/data=!4m6!3m5!1s0x390feffaea0e29d5:0x1fa5fa633af789af!8m2!3d30.6987483!4d76.6911508!16s%2Fg%2F11h2jrt0j7?hl=en&entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D",
        },
        { label: "Phone: +91 9056322296", href: "tel:+91905632296" },
        { label: "Email: hr@smallcooper.com", href: "mailto:hr@smallcooper.com" },
      ],
    },
  ]

  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61581231893295" },
    { label: "Google", href: "https://www.google.com/search?q=Small+Copper&stick=H4sIAAAAAAAA_-NgU1I1qDC2NEhLTTMzT7MwNja1MDS2MqiwMEhNNjE0TTRMMTdMTjQ0WcTKE5ybmJOj4JxfUJBaBACgLcogOAAAAA&hl=en&mat=CfVqjw2YaOc5ElcBTVDHntv41XsHavw8iHMjZihd1clogL_oF8TZAqFKxFvVCaiHXhuX_EkV43pQDdSVkbfFgxBUH9P_f7nWsjmUK40StGil9xp3mVbtS9wMKj6eLfe2N6Q&authuser=4" },
    // { label: "Instagram", href: "#" },
    // { label: "GitHub", href: "#" },
    // { label: "YouTube", href: "#" },
  ]

  return (
    <footer className="bg-[#020202] text-white z-50 ">
      {/* ---- Top Section ---- */}
      <div className="responsivewidth max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-6">
        {/* Logo + Brand */}
        <div className="">
          <img src="logo2.png" alt="Logo" className="w-48" />
        </div>

        {/* Dynamic Columns */}
        {footerData.map((section, index) => (
          <div key={index}>
            <h3 className="font-bold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, i) =>
                link.href ? (
                  <li key={i}>
                    {/* External links use <a>, internal pages use <NavLink> */}
                    {link.href.startsWith("http") || link.href.startsWith("tel:") || link.href.startsWith("mailto:") ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {link.label}
                      </a>
                    ) : (
                      <NavLink to={link.href} className="hover:underline">
                        {link.label}
                      </NavLink>
                    )}
                  </li>
                ) : (
                  <li key={i}>{link.label}</li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      {/* ---- Divider ---- */}
      <div className="border-t border-gray-600"></div>

      {/* ---- Bottom Section ---- */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm py-4 px-6">
        <p>© 2025 Small Copper. All Rights Reserved.</p>

        <div className="flex space-x-4 mt-3 md:mt-0">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={`${i !== socialLinks.length - 1 ? "border-r border-gray-500 pr-4" : ""} hover:underline`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
