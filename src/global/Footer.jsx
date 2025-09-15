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
      links: [{ label: "Address" }, { label: "Phone: +91 98765 43210" }, { label: "Email: hello@smallcopper.com" }],
    },
  ]

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "YouTube", href: "#" },
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
                    <NavLink to={link.href}>{link.label}</NavLink>
                  </li>
                ) : (
                  <li key={i}>{link.label}</li>
                ),
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
              className={`${i !== socialLinks.length - 1 ? "border-r border-gray-500 pr-4" : ""}`}
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
