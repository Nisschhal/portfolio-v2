export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-3">
      <nav className="flex gap-1 p-0.5 rounded-full border border-white/15 bg-white/10 backdrop-blur">
        <a href="/" className="nav-item">
          Home
        </a>
        <a href="/projects" className="nav-item">
          Projects
        </a>
        <a href="/about" className="nav-item">
          About
        </a>
        {/* Mimicking active state */}
        <a
          href="/contact"
          className="nav-item bg-white text-black hover:bg-white/70 hover:text-gray-900 "
        >
          Contact
        </a>
      </nav>
    </div>
  )
}
