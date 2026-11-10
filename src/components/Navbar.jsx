import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX, HiDownload } from "react-icons/hi";
import { profile } from "../data";

const links = ["home", "about", "skills", "education", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => {
      let cur = "home";
      links.forEach((id) => { const el = document.getElementById(id); if (el && el.offsetTop - 120 <= window.scrollY) cur = id; });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const item = (id) => (
    <Link key={id} to={`/#${id}`} onClick={() => setOpen(false)}
      className={`px-3 py-2 rounded-lg text-sm font-medium capitalize transition ${active === id ? "text-brand-dark bg-brand-soft" : "text-muted hover:text-ink hover:bg-slate-100"}`}>{id}</Link>
  );
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto h-16 px-5 flex items-center justify-between">
        {/* <Link to="/#home" className="font-extrabold text-lg text-ink">{profile.name}<span className="text-brand">.</span></Link> */}
        <Link to="/#home" className="font-extrabold text-lg text-ink"><span className="text-brand">&lt;/&gt;</span> Portfolio</Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map(item)}
          {/* <a href={profile.resume} download className="ml-3 inline-flex items-center gap-1.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-4 py-2 rounded-full"><HiDownload />Resume</a> */}
        <a
  href={profile.resume}
  target="_blank"
  rel="noopener noreferrer"
  className="ml-3 inline-flex items-center gap-1.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-4 py-2 rounded-full"
>
  <HiDownload />
  Resume
</a>
        </div>
        <button className="md:hidden text-2xl p-2" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <HiX /> : <HiMenuAlt3 />}</button>
      </nav>
      {open && <div className="md:hidden flex flex-col gap-1 p-4 bg-white border-t border-slate-200">{links.map(item)}</div>}
    </header>
  );
}
