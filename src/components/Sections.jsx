import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaDiscord, FaFacebook, FaWhatsapp } from "react-icons/fa";
// import { HiDownload, HiArrowRight, HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { profile, about, skills, education, projects } from "../data";
import { HiDownload, HiArrowRight, HiMail, HiPhone, HiLocationMarker, HiCode, HiLightningBolt, HiHeart } from "react-icons/hi";
export function Cover({ p, className = "" }) {
  const [bad, setBad] = useState(false);
  if (bad || !p.image)
    return <div className={`grid place-items-center bg-linear-to-br from-night to-brand text-white font-bold text-xl p-4 text-center ${className}`}>{p.title}</div>;
  return <img src={p.image} alt={`${p.title} screenshot`} onError={() => setBad(true)} className={`object-cover ${className}`} />;
}

const Sec = ({ id, title, sub, alt, children }) => (
  <section id={id} className={`py-20 ${alt ? "bg-white" : ""}`}>
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>
      <div className="w-14 h-1 bg-accent rounded mt-3 mb-4" />
      {sub && <p className="text-muted max-w-2xl mb-10">{sub}</p>}
      {children}
    </div>
  </section>
);

export function Hero() {
  const s = profile.social;
  const icons = [[s.github, FaGithub, "GitHub"], [s.linkedin, FaLinkedin, "LinkedIn"], [s.discord, FaDiscord, "Discord"], [s.facebook, FaFacebook, "Facebook"]];
  return (
    <section id="home" className="bg-night text-white pt-32 pb-24 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center relative">
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-slate-300">Hi, I’m</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-1">{profile.name}</h1>
          <p className="text-2xl font-bold text-brand mt-3">{profile.role}</p>
          <p className="text-slate-300 mt-4 max-w-lg mx-auto md:mx-0">{profile.intro}</p>
          <div className="flex flex-wrap gap-3 mt-7 justify-center md:justify-start">
            {/* <a href={profile.resume} download className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark px-6 py-3 rounded-full font-semibold"><HiDownload />Download resume</a> */}
            <a
  href={profile.resume}
  download="Tayeba-Sultana-Resume.pdf"
  className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark px-6 py-3 rounded-full font-semibold"
>
  <HiDownload />
  Download resume
</a>
            <Link to="/#projects" className="inline-flex items-center gap-2 border border-slate-600 hover:border-brand px-6 py-3 rounded-full font-semibold">View projects <HiArrowRight /></Link>
          </div>
          <div className="flex gap-3 mt-7 justify-center md:justify-start">
            {icons.map(([href, Icon, label]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-11 h-11 grid place-items-center rounded-full border border-slate-600 hover:bg-brand hover:border-brand transition"><Icon /></a>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2 justify-self-center w-full max-w-xs">
          <div className="aspect-square rounded-[42%_58%_55%_45%/50%_45%_55%_50%] overflow-hidden border-4 border-brand bg-slate-800">
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// export function About() {
//   return (
//     <Sec id="about" title="About me" alt>
//       <div className="grid md:grid-cols-2 gap-8 text-muted leading-relaxed">
//         <div className="space-y-4">
//           <p><b className="text-ink">My journey:</b> <br /> {about.journey}</p>
//           <p><b className="text-ink">Work I enjoy:</b> <br /> {about.work}</p>
//         </div>
//         <div className="space-y-4">
//           <p><b className="text-ink">Outside code:</b> <br />{about.personal}</p>
//           <div className="flex flex-wrap gap-2">{about.hobbies.map((h) => <span key={h} className="px-3 py-1 rounded-full bg-brand-soft text-brand-dark text-sm font-medium">{h}</span>)}</div>
//         </div>
//       </div>
//     </Sec>
//   );
// }
// export function About() {
//   const cards = [
//     [HiCode, "My journey", about.journey],
//     [HiLightningBolt, "Work I enjoy", about.work],
//     [HiHeart, "Outside code", about.personal],
//   ];
//   return (
//     <Sec id="about" title="About me" sub="A little about who I am, how I got here and what I like doing." alt>
//       <div className="grid md:grid-cols-3 gap-6">
//         {cards.map(([Icon, title, text]) => (
//           <div key={title} className="bg-slate-50 border border-slate-200 border-t-4 border-t-brand rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition">
//             <span className="w-12 h-12 grid place-items-center rounded-xl bg-brand text-white text-2xl mb-4"><Icon /></span>
//             <h3 className="font-bold text-lg mb-2">{title}</h3>
//             <p className="text-muted leading-relaxed">{text}</p>
//           </div>
//         ))}
//       </div>
//       {/* <div className="mt-8 rounded-2xl bg-night p-6 flex flex-col sm:flex-row sm:items-center gap-4">
//         <p className="font-bold text-white shrink-0">Hobbies:</p>
//         <div className="flex flex-wrap gap-2">
//           {about.hobbies.map((h) => <span key={h} className="px-4 py-1.5 rounded-full bg-brand/20 text-brand-soft border border-brand/40 text-sm font-medium">{h}</span>)}
//         </div>
//       </div> */}
//             <div className="mt-8 flex flex-wrap items-center gap-2">
//         <span className="text-sm font-semibold text-muted mr-1">Hobbies:</span>
//         {about.hobbies.map((h) => <span key={h} className="px-3 py-1 rounded-full bg-brand-soft text-brand-dark text-sm font-medium">{h}</span>)}
//       </div>
//     </Sec>
//   );
export function About() {
  const cards = [
    [HiCode, "My journey", about.journey],
    [HiLightningBolt, "Work I enjoy", about.work],
    [HiHeart, "Outside code", about.personal, true],
  ];
  return (
    <Sec id="about" title="About me" sub="A little about who I am, how I got here and what I like doing." alt>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map(([Icon, title, text, showHobbies]) => (
          <div key={title} className="bg-slate-50 border border-slate-200 border-t-4 border-t-brand rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition flex flex-col">
            <span className="w-11 h-11 grid place-items-center rounded-xl bg-brand text-white text-xl mb-4"><Icon /></span>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted leading-relaxed">{text}</p>
            {/* {showHobbies && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {about.hobbies.map((h) => <span key={h} className="px-2.5 py-0.5 rounded-full bg-brand-soft text-brand-dark text-xs font-medium">{h}</span>)}
              </div>
            )} */}
                        {showHobbies && (
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-dark mb-2">Hobbies</p>
                <div className="flex flex-wrap gap-1.5">
                  {about.hobbies.map((h) => <span key={h} className="px-2.5 py-0.5 rounded-full bg-brand-soft text-brand-dark text-xs font-medium">{h}</span>)}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Sec>
  );
}

export function Skills() {
  return (
    <Sec id="skills" title="Skills" sub="The tools I use to build things, grouped by area.">
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([cat, list]) => (
          <div key={cat} className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-4">{cat}</h3>
            {list.map(([name, v]) => (
              <div key={name} className="mb-4">
                <div className="flex justify-between text-sm font-medium mb-1"><span>{name}</span><span className="text-muted">{v}%</span></div>
                <div className="h-2 rounded-full bg-brand-soft" role="img" aria-label={`${name} ${v} percent`}><div className="h-2 rounded-full bg-brand" style={{ width: `${v}%` }} /></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Sec>
  );
}

const Timeline = ({ items }) => (
  <div className="border-l-2 border-brand ml-2 pl-6 space-y-8">
    {items.map((e) => (
      <article key={e.title} className="relative">
        <span className="absolute -left-8.25 top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-white" />
        <h3 className="font-bold text-lg">{e.title}</h3>
        <p className="text-sm text-brand-dark font-medium">{e.place} · {e.years}</p>
        {e.note && <p className="text-muted mt-1">{e.note}</p>}
        {e.points && <ul className="list-disc pl-5 text-muted mt-2 space-y-1">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>}
      </article>
    ))}
  </div>
);
export const Education = () => <Sec id="education" title="Education" alt><Timeline items={education} /></Sec>;
// export const Experience = () => <Sec id="experience" title="Experience"><Timeline items={experience} /></Sec>;

export function Projects() {
  return (
    <Sec id="projects" title="Projects" sub="A few things I’m proud of. Open any card for the full story." alt>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((p) => (
          <article key={p.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col hover:shadow-lg hover:border-brand transition">
            <Cover p={p} className="w-full aspect-video" />
            <div className="p-5 flex flex-col gap-3 flex-1">
              <h3 className="font-bold text-xl">{p.title}</h3>
              <p className="text-muted flex-1">{p.short}</p>
              <Link to={`/projects/${p.id}`} className="self-start inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-5 py-2.5 rounded-full">View details <HiArrowRight /></Link>
            </div>
          </article>
        ))}
      </div>
    </Sec>
  );
}

export function Contact() {
   const rows = [
    [HiMail, "Email", profile.email, `mailto:${profile.email}`],
    profile.phone && [HiPhone, "Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
    profile.whatsapp && [FaWhatsapp, "WhatsApp", profile.phone || profile.whatsapp, `https://wa.me/${profile.whatsapp}`],
    [HiLocationMarker, "Location", profile.location, null],
  ].filter(Boolean);
  return (
    <Sec id="contact" title="Get in touch" sub="Have a project or a role in mind? Reach me directly.">
      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
        {rows.map(([Icon, label, value, href]) => {
          const inner = (<><span className="w-11 h-11 grid place-items-center rounded-xl bg-brand-soft text-brand-dark text-xl"><Icon /></span><span><b className="block">{label}</b><span className="text-muted break-all">{value}</span></span></>);
          const cls = "flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-2xl";
          return href ? <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={`${cls} hover:border-brand transition`}>{inner}</a> : <div key={label} className={cls}>{inner}</div>;
        })}
      </div>
    </Sec>
  );
}

export const Footer = () => (
  <footer className="bg-night text-slate-400 text-center text-sm py-8">
    © {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
  </footer>
);
