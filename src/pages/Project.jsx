import { Link, useParams } from "react-router-dom";
import { HiArrowLeft, HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data";
import { Cover } from "../components/Sections";

const Block = ({ title, children }) => (
  <section className="mt-10"><h2 className="text-xl font-bold mb-3">{title}</h2>{children}</section>
);
const List = ({ items }) => <ul className="list-disc pl-5 space-y-1.5 text-muted">{items.map((i) => <li key={i}>{i}</li>)}</ul>;

export default function Project() {
  const p = projects.find((x) => x.id === useParams().id);
  if (!p) return (
    <div className="pt-36 pb-24 text-center"><h1 className="text-2xl font-bold">Project not found</h1>
      <Link to="/#projects" className="text-brand-dark underline mt-4 inline-block">Back to projects</Link></div>
  );
  return (
    <main className="pt-28 pb-20 max-w-4xl mx-auto px-5">
      <Link to="/#projects" className="inline-flex items-center gap-2 text-brand-dark font-semibold"><HiArrowLeft />Back to projects</Link>
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-5 mb-6">{p.title}</h1>
      <Cover p={p} className="w-full aspect-16/8 rounded-2xl" />
      <div className="flex flex-wrap gap-3 mt-6">
        {/* <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-full"><HiExternalLink />Live project</a>
        <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-slate-300 hover:border-brand font-semibold px-6 py-3 rounded-full"><FaGithub />GitHub repository</a> */}
        {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-full"><HiExternalLink />Live project</a>}
        {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-slate-300 hover:border-brand font-semibold px-6 py-3 rounded-full"><FaGithub />GitHub repository</a>}
      </div>
      <Block title="Tech stack"><div className="flex flex-wrap gap-2">{p.stack.map((t) => <span key={t} className="px-3 py-1 rounded-full bg-brand-soft text-brand-dark text-sm font-medium">{t}</span>)}</div></Block>
      <Block title="Description"><p className="text-muted leading-relaxed max-w-prose">{p.desc}</p></Block>
      <Block title="Challenges faced"><List items={p.challenges} /></Block>
      <Block title="Improvements and future plans"><List items={p.future} /></Block>
    </main>
  );
}
