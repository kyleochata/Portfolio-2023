import { useState, useEffect } from 'react'
import profilePic from './images/profile-pic.png'
import KeResume from '/resume.pdf'
import { projectData } from './ProjectData'

/* ── Hooks ───────────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.35 }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])
  return active
}

/* ── Nav ─────────────────────────────────────────────────── */
const NAV_LINKS = [
  { id: 'about',    label: 'About'    },
  { id: 'skills',   label: 'Skills'   },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact'  },
]

function Nav({ active }) {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header className={`site-nav${scrolled ? ' site-nav--raised' : ''}`}>
      <div className="site-nav__inner">
        <button className="site-nav__logo" onClick={() => scrollTo('hero')}>
          <span className="brace">{'{'}</span>KE<span className="brace">{'}'}</span>
        </button>

        <nav className={`site-nav__links${mobileOpen ? ' site-nav__links--open' : ''}`}>
          {NAV_LINKS.map(l => (
            <button
              key={l.id}
              className={`nav-link${active === l.id ? ' nav-link--active' : ''}`}
              onClick={() => scrollTo(l.id)}
            >
              {l.label}
            </button>
          ))}
          <a className="nav-resume" href={KeResume} download="Kyle_Etrata_Resume">
            Resume ↓
          </a>
        </nav>

        <button
          className={`hamburger${mobileOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

/* ── Terminal ────────────────────────────────────────────── */
const CODE = [
  [{ t: 'kw', v: 'package' }, { t: 'txt', v: ' ' }, { t: 'pkg', v: 'main' }],
  [],
  [{ t: 'kw', v: 'import' }, { t: 'txt', v: ' (' }],
  [{ t: 'txt', v: '  ' }, { t: 'str', v: '"net/http"' }],
  [{ t: 'txt', v: '  fhir ' }, { t: 'str', v: '"github.com/google/fhir/go"' }],
  [{ t: 'txt', v: ')' }],
  [],
  [{ t: 'kw', v: 'func' }, { t: 'txt', v: ' ' }, { t: 'fn', v: 'HandlePatient' }, { t: 'txt', v: '(' }],
  [{ t: 'txt', v: '  w http.ResponseWriter,' }],
  [{ t: 'txt', v: '  r *http.Request) {' }],
  [],
  [{ t: 'cmnt', v: '  // Read FHIR R4 Patient resource' }],
  [{ t: 'txt', v: '  id := vars(r)[' }, { t: 'str', v: '"id"' }, { t: 'txt', v: ']' }],
  [{ t: 'txt', v: '  pt := store.' }, { t: 'fn', v: 'GetPatient' }, { t: 'txt', v: '(id)' }],
  [{ t: 'txt', v: '  fhir.' }, { t: 'fn', v: 'WriteResource' }, { t: 'txt', v: '(w, pt)' }],
  [{ t: 'txt', v: '}' }],
]

function FhirTerminal() {
  return (
    <div className="terminal">
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--r" />
        <span className="terminal__dot terminal__dot--y" />
        <span className="terminal__dot terminal__dot--g" />
        <span className="terminal__filename">fhir_handler.go</span>
      </div>
      <pre className="terminal__body">
        <code>
          {CODE.map((line, li) => (
            <span key={li} className="terminal__line">
              {line.length === 0
                ? ' '
                : line.map((tok, ti) => (
                    <span key={ti} className={`tok tok--${tok.t}`}>{tok.v}</span>
                  ))}
              {li === CODE.length - 1 && <span className="terminal__cursor" />}
            </span>
          ))}
        </code>
      </pre>
      <div className="terminal__lang">
        <span className="terminal__badge terminal__badge--go">Go</span>
        <span className="terminal__badge terminal__badge--fhir">FHIR R4</span>
      </div>
    </div>
  )
}

/* ── Hero ────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--teal" />
        <div className="hero__glow hero__glow--blue" />
      </div>

      <div className="hero__inner container">
        <div className="hero__text">
          <p className="hero__eyebrow">Healthcare · FHIR · Open Source</p>
          <h1 className="hero__name">
            Kyle<br />
            <span className="hero__name-outline">Etrata</span>
          </h1>
          <div className="hero__title">
            <span className="badge badge--go">Go</span>
            <span className="badge badge--py">Python</span>
            <span className="badge badge--fhir">FHIR R4 / R5</span>
            <span className="badge badge--web">Full Stack</span>
          </div>
          <p className="hero__bio">
            Building interoperable healthcare systems and modern web applications.
            Background in medicine and clinical research, now focused on
            FHIR&#8209;compliant APIs and data pipelines.
          </p>
          <div className="hero__actions">
            <button
              className="btn btn--primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </button>
            <a className="btn btn--ghost" href={KeResume} download="Kyle_Etrata_Resume">
              Resume ↓
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <FhirTerminal />
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}

/* ── About ───────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="section-label reveal">About</p>

        <div className="about__grid">
          <div className="about__img-wrap reveal">
            <div className="about__img-ring" />
            <img src={profilePic} alt="Kyle Etrata" className="about__img" />
          </div>

          <div className="about__content">
            <h2 className="section-title reveal">
              Medicine meets<br />
              <span className="text-teal">software</span>
            </h2>

            <div className="about__body reveal">
              <p>
                I'm a full-stack developer with a background in STEM and clinical medicine.
                After years working in medical device sales and pursuing an M.D. at SGU,
                I pivoted to software — drawn by the same love of problem-solving, with
                the ability to build systems that scale.
              </p>
              <p>
                Today I specialize in <strong>FHIR development</strong> — building healthcare
                interoperability systems using <strong>Go</strong> and <strong>Python</strong>.
                I care about writing clean, standards-compliant code that makes clinical data
                accessible and useful.
              </p>
              <p>
                Outside of healthtech, I build full-stack web applications with React,
                Node.js, and modern cloud tooling.
              </p>
            </div>

            <div className="about__facts reveal">
              <div className="fact">
                <span className="fact__label">Background</span>
                <span className="fact__value">Medicine · Biology</span>
              </div>
              <div className="fact">
                <span className="fact__label">Focus</span>
                <span className="fact__value">FHIR · Go · Python</span>
              </div>
              <div className="fact">
                <span className="fact__label">Education</span>
                <span className="fact__value">LMU B.S. · SGU M.D. · UCI Full Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Skills ──────────────────────────────────────────────── */
const SKILL_GROUPS = [
  {
    category: 'Healthcare / FHIR',
    accent: 'teal',
    skills: ['FHIR R4 / R5', 'HL7 v2', 'SMART on FHIR', 'CDS Hooks', 'SNOMED CT', 'ICD-10'],
  },
  {
    category: 'Languages',
    accent: 'blue',
    skills: ['Go', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Backend & APIs',
    accent: 'blue',
    skills: ['REST', 'GraphQL', 'Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Frontend',
    accent: 'gold',
    skills: ['React', 'HTML5', 'CSS3', 'Tailwind', 'D3.js'],
  },
  {
    category: 'Tools & Infra',
    accent: 'muted',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Linux'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="section-label reveal">Skills</p>
        <h2 className="section-title reveal">Technical Toolkit</h2>
        <div className="skills__grid">
          {SKILL_GROUPS.map(group => (
            <div key={group.category} className={`skill-group skill-group--${group.accent} reveal`}>
              <h3 className="skill-group__title">{group.category}</h3>
              <div className="skill-group__tags">
                {group.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Projects ────────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  return (
    <article
      className={`project-row${project.type === 'fhir' ? ' project-row--fhir' : ''}`}
      style={{ '--i': index }}
    >
      <span className="project-row__num" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="project-row__body">
        <div className="project-row__top">
          <div className="project-row__heading">
            <h3 className="project-row__title">{project.title}</h3>
            <div className="project-row__badges">
              {project.type === 'fhir' && (
                <span className="project-badge project-badge--fhir">FHIR</span>
              )}
              {project.placeholder && (
                <span className="project-badge project-badge--wip">In Dev</span>
              )}
            </div>
          </div>
          <div className="project-row__links">
            {project.githubRepo && (
              <a
                href={project.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub ↗
              </a>
            )}
            {project.liveSite && (
              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link--live"
              >
                Live Site ↗
              </a>
            )}
          </div>
        </div>

        <div className="project-row__tags">
          {project.tags.map(t => (
            <span key={t} className="skill-tag skill-tag--sm">{t}</span>
          ))}
        </div>

        <p className="project-row__desc">{project.description}</p>
      </div>
    </article>
  )
}

function Projects() {
  const [filter, setFilter] = useState('all')
  const FILTERS = [
    { id: 'all',  label: 'All'              },
    { id: 'fhir', label: 'FHIR / Healthcare' },
    { id: 'web',  label: 'Web Apps'         },
  ]
  const filtered = filter === 'all' ? projectData : projectData.filter(p => p.type === filter)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="section-label reveal">Projects</p>
        <h2 className="section-title reveal">Selected Work</h2>

        <div className="projects__filters reveal">
          {FILTERS.map(f => (
            <button
              key={f.id}
              className={`filter-btn${filter === f.id ? ' filter-btn--active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects__list" key={filter}>
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}

/* ── Contact ─────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="section-label reveal">Contact</p>
        <h2 className="section-title reveal">Get In Touch</h2>
        <p className="contact__intro reveal">
          Open to FHIR development roles, healthtech consulting, and interesting
          full-stack projects. Feel free to reach out.
        </p>
        <div className="contact__links reveal">
          <a href="mailto:kyleochata@gmail.com" className="contact-link">
            <span className="contact-link__label">Email</span>
            <span className="contact-link__value">kyleochata@gmail.com ↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kyle-etrata"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-link__label">LinkedIn</span>
            <span className="contact-link__value">linkedin.com/in/kyle-etrata ↗</span>
          </a>
          <a
            href="https://github.com/kyleochata"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="contact-link__label">GitHub</span>
            <span className="contact-link__value">github.com/kyleochata ↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ──────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <span className="footer__logo">
            <span className="brace">{'{'}</span>KE<span className="brace">{'}'}</span>
          </span>
          <span className="footer__copy">
            © {new Date().getFullYear()} Kyle Etrata
          </span>
        </div>
      </div>
    </footer>
  )
}

/* ── App ─────────────────────────────────────────────────── */
const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'contact']

export default function App() {
  const active = useActiveSection(SECTION_IDS)
  useScrollReveal()

  return (
    <div className="portfolio">
      <Nav active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
