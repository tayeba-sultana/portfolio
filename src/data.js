// ===== EDIT ALL YOUR CONTENT HERE =====
export const profile = {
  name: "Tayeba Sultana",
  role: "Web Developer",
  intro: "I’m a CSE undergraduate student and a Web Developer building modern web applications with React, Next.js, TypeScript, and MongoDB, with a keen interest in research and machine learning.",
  photo: "/photo_portfolio.jpg", // put your photo in /public/photo.jpg
  resume: "/projects/resume.pdf", // put your resume in /public/resume.pdf
  email: "staiba140@gmail.com",
  phone: "+880 1314 072286",
  whatsapp: "8801314072286", // digits only, with country code
  location: "Sylhet, Bangladesh",
  social: { github: "https://github.com/tayeba-sultana", linkedin: "https://www.linkedin.com/in/tayebasultana", discord: "https://discord.com/users/823810292215185409", facebook: "https://www.facebook.com/share/1LcynqR7eo/" },
};
export const about = {
// journey: "My journey into technology began with curiosity about how websites work and how ideas turn into real-world applications. Through continuous learning and hands-on projects, I explored frontend and backend development while developing a strong interest in research, machine learning, and emerging technologies.",
// work: "I build modern, responsive web applications using React, Next.js, TypeScript, and MongoDB. Alongside full-stack development, I'm passionate about academic research, particularly exploring machine learning, AI-driven solutions, and their potential to address real-world challenges.",
// journey: "What started as curiosity about technology gradually grew into a passion for building things with code. From learning the fundamentals of programming to developing full-stack projects, every experience has shaped my journey as a CSE student and continues to motivate me to explore new possibilities.",
// work: "I focus on building responsive, user-friendly web applications with React, Next.js, TypeScript, and MongoDB. Beyond development, my interests lie in academic research, particularly machine learning, artificial intelligence, and exploring innovative solutions to real-world problems.",
journey: "What started as curiosity about technology gradually grew into a passion for building things with code. Along the way, I explored full-stack development, practiced competitive programming to strengthen my problem-solving skills, and developed a keen interest in research and emerging technologies.",
work: "I build responsive, user-friendly web applications with React, Next.js, TypeScript, and MongoDB. Beyond development, I'm interested in academic research, particularly machine learning and artificial intelligence, and exploring innovative solutions to real-world problems.",
personal: "Beyond technology, I enjoy cooking, baking, travelling to new places, and reading books to expand my knowledge and explore new ideas. I'm naturally curious, love discovering different perspectives, and always enjoy learning something new.",
hobbies: ["Cooking", "Baking", "Travelling", "Reading"]
};
export const skills = {
  Frontend: [["HTML & CSS", 90], ["JavaScript", 85], ["React", 80], ["Tailwind CSS", 85]],
  Backend: [["Node.js", 70], ["Express", 70], ["MongoDB", 65], ["REST APIs", 75]],
  Tools: [["Git & GitHub", 85], ["Figma", 65], ["VS Code", 90], ["Vercel / Netlify", 80]],
};
export const education = [
 {
    title: "B.Sc. in Computer Science and Engineering",
    place: "Sylhet Engineering College",
    years: "2023 – Present",
    note: "Undergraduate student, currently pursuing my degree."
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    place: "SCHOLARSHOME",
    years: "2020 – 2022",
    note: "Science Group, GPA: 5.00"
  },
  {
    title: "Secondary School Certificate (SSC)",
    place: "SCHOLARSHOME",
    years: "2018 – 2020",
    note: "Science Group, GPA: 5.00"
  }

];
// export const experience = [
//   { title: "Frontend Developer Intern", place: "Company Name", years: "Jun 2025 – Dec 2025", points: ["Built reusable React components used across 5 pages.", "Cut page load time by 30% with image and code-splitting work.", "Worked with designers and backend engineers in weekly sprints."] },
// ];
// image: put screenshots in /public/projects/ and use "/projects/name.png"
export const projects = [
  { id: "book-vibe", title: "Book Vibe", image: "/projects/book-vibe.png", short: "A book discovery platform for exploring, browsing, and tracking your favorite books.",
    stack: ["React 19", "Next.js", "Tailwind CSS", "TypeScript"],
    desc: "Book Vibe is a book discovery platform where readers can explore popular books, discover new reads, and find their next favorite stories through an engaging and user-friendly interface.",
    live: "https://book-vibe-j8sx.vercel.app/", repo: "https://github.com/tayeba-sultana/book-vibe",
    challenges: [
  "Managing book data.",
  "Responsive UI design."
],
future: [
  "Book reviews and ratings.",
  "Personalized recommendations."
] },
  { id: "fit-log", title: "Fit Log", image: "/projects/fit-log.png", short: "A workout tracking app for planning exercises and logging daily fitness progress.",
     stack: ["React 19", "Next.js", "Tailwind CSS", "TypeScript"],
    desc: "FitLog helps users explore workouts, build daily workout plans, and track their fitness activities through a simple, focused interface.",
    challenges: [
  "Managing workout plans.",
  "Tracking exercise progress."
],

future: [
  "Weekly progress analytics.",
  "Workout history and goals."
] },
{ id: "react-dev", title: "Dev Stack", image: "/projects/react-dev.png", short: "A React-based developer resource platform for exploring useful tools and technologies.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    desc: "React Dev Stack helps developers discover and explore useful development tools, libraries, and resources through a clean interface.",
    live: "https://react-dev-stack-a5.netlify.app/", repo: "https://github.com/tayeba-sultana/React-Dev-Stack",
    challenges: [
  "Organizing developer resources.",
  "Creating a responsive UI."
],
future: [
  "Advanced search and filtering.",
  "More developer resources."
] },
{ id: "umeed-charity", title: "Umeed Charity Platform", image: "/projects/umeed.png", short: "A full-stack charity and community-support website",
    stack: ["HTML5", "CSS3", "JavaScript", "MySQL", "Php"],
    desc: "Umeed is a charity platform connecting donors, volunteers, and people in need through donations, blood drives, and community support.",
    live: "https://umeedcharity.site.je/?i=1", repo: "https://github.com/tayeba-sultana/umeed-charity-platform",
    challenges: [
  "Managing user roles and permissions.",
  "Tracking donations accurately.",
  "Handling multiple platform features."
],
future: [
  "Online payment integration.",
  "Real-time campaign updates.",
  "Improved blood donor matching."
] },
{ id: "bangla-news", title: "Bangla News 24", image: "/projects/bangla-news.png", short: "A Bengali news platform featuring the latest news across multiple categories.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Better Auth", "News API"],
    desc: "Bangla News 24 lets readers explore the latest news on politics, business, technology, sports, health, and more through a responsive interface.",
    live: "https://bangla-news-24-bay.vercel.app/", repo: "https://github.com/tayeba-sultana/bangla-news-24",
    challenges: [
   "Organizing news by category.",
  "Managing dynamic news content."
],
future: [
  "User bookmarks and saved news.",
  "Search and personalized feeds."
] },

];
