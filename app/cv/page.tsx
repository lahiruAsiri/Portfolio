import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";
import {
  profile,
  cvSummary,
  experience,
  projects,
  stackGroups,
  education,
  certifications,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Lahiru Asiri - CV",
  description: "Curriculum vitae of Lahiru Asiri, Associate Software Engineer.",
};

const strip = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

// shorter issuer names so certification lines don't wrap in the two columns
const shortIssuer: Record<string, string> = {
  "University of Moratuwa (CODL)": "Univ. of Moratuwa",
};
const issuerOf = (name: string) => shortIssuer[name] ?? name;

export default function CVPage() {
  return (
    <>
      <PrintButton />

      <style>{`
        .cv {
          max-width: 780px;
          margin: 0 auto;
          padding: 46px 44px 72px;
          color: #000;
          background: #fff;
          font-family: "Times New Roman", Times, Georgia, serif;
          font-size: 14px;
          line-height: 1.4;
        }
        .cv a { color: #000; text-decoration: none; }

        /* header */
        .cv .head { display: flex; justify-content: space-between; align-items: flex-start; gap: 30px; }
        .cv .head .id { flex: 1 1 auto; min-width: 0; }
        .cv .head h1 { margin: 0; font-size: 32px; font-weight: 700; line-height: 1.1; }
        .cv .head .role { margin: 3px 0 0; font-size: 15px; font-weight: 700; }
        .cv .head .contact { margin: 9px 0 0; font-size: 13px; line-height: 1.85; word-spacing: 2px; }
        .cv .head .photo { width: 120px; height: 142px; flex: 0 0 auto; object-fit: cover; border: 1px solid #000; }

        /* section heading — identical for every section */
        .cv h2 {
          font-size: 15px; font-weight: 700; text-transform: uppercase;
          margin: 20px 0 8px; padding-bottom: 3px; border-bottom: 1.5px solid #000;
        }
        .cv section:first-of-type h2 { margin-top: 22px; }
        .cv p { margin: 0; }

        .cv .summary { font-size: 13.5px; line-height: 1.5; text-align: left; }

        /* experience / education entries */
        .cv .entry { margin-bottom: 12px; }
        .cv .entry:last-child { margin-bottom: 0; }
        .cv .entry .line { display: flex; justify-content: space-between; align-items: baseline; gap: 18px; }
        .cv .entry .who { font-weight: 700; font-size: 14px; }
        .cv .entry .date { font-weight: 700; font-size: 13px; white-space: nowrap; }
        .cv .entry .place { font-size: 13px; font-style: italic; margin-top: 1px; }
        .cv ul.bul { margin: 6px 0 0; padding-left: 18px; list-style: disc; }
        .cv ul.bul li { font-size: 13.5px; line-height: 1.42; margin-bottom: 2px; display: list-item; }
        .cv .tech { font-size: 12.5px; margin-top: 4px; }
        .cv .tech b, .cv .repo b { font-weight: 700; }

        /* skills — single column, hanging indent so wraps align */
        .cv ul.skills { margin: 0; padding-left: 18px; list-style: disc; }
        .cv ul.skills li { font-size: 13.5px; line-height: 1.55; margin-bottom: 2px; display: list-item; }
        .cv ul.skills li b { font-weight: 700; }

        /* projects — fully stacked, nothing on the right */
        .cv .proj-item { margin-bottom: 12px; }
        .cv .proj-item:last-child { margin-bottom: 0; }
        .cv .proj-item .name { font-weight: 700; font-size: 14px; }
        .cv .proj-item .desc { font-size: 13px; margin-top: 2px; }
        .cv .proj-item .repo { font-size: 12.5px; margin-top: 2px; }

        /* certifications — two even columns, real bullets, no cross-column gaps */
        .cv ul.certs {
          margin: 2px 0 0; padding: 0; list-style: none;
          columns: 2; column-gap: 32px;
        }
        .cv ul.certs li {
          font-size: 12.5px; line-height: 1.35; margin-bottom: 4px;
          padding-left: 14px; position: relative; white-space: nowrap;
          break-inside: avoid; -webkit-column-break-inside: avoid;
        }
        .cv ul.certs li::before { content: "•"; position: absolute; left: 0; top: 0; }

        @media print {
          @page { size: A4; margin: 12mm 13mm; }
          html, body { background: #fff !important; }
          .no-print { display: none !important; }
          .cv { max-width: none; margin: 0; padding: 0; font-size: 10.2pt; line-height: 1.32; }
          .cv .head h1 { font-size: 20pt; }
          .cv .head .photo { width: 96px; height: 114px; }
          .cv .head .contact { font-size: 9.2pt; line-height: 1.65; }
          .cv h2 { font-size: 10.5pt; margin: 11pt 0 4pt; break-after: avoid; }
          .cv section:first-of-type h2 { margin-top: 12pt; }
          .cv .entry { margin-bottom: 7pt; }
          .cv .proj-item { margin-bottom: 6pt; }
          .cv ul.bul li, .cv ul.skills li { font-size: 9.4pt; }
          .cv ul.certs li { font-size: 9.2pt; margin-bottom: 2.5px; }
          .cv .tech, .cv .proj-item .desc, .cv .proj-item .repo, .cv .entry .place { font-size: 8.8pt; }
          .cv .entry, .cv .proj-item, .cv ul.bul li, .cv ul.skills li, .cv ul.certs li { break-inside: avoid; }
          .cv .projects-section { break-before: page; }
        }
      `}</style>

      <main className="cv">
        <header className="head">
          <div className="id">
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="contact">
              {`${profile.email}  |  ${profile.phone}  |  ${profile.location}`}
              <br />
              <a href={profile.website}>{profile.websiteLabel}</a>
              {`  |  ${strip(profile.github)}  |  ${strip(profile.linkedin)}`}
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="photo" src="/portrait.jpg" alt="Lahiru Asiri" />
        </header>

        <section>
          <h2>Summary</h2>
          <p className="summary">{cvSummary()}</p>
        </section>

        <section>
          <h2>Experience</h2>
          {experience.map((e) => (
            <div className="entry" key={e.role + e.period}>
              <div className="line">
                <span className="who">
                  {e.role}, {e.company}
                </span>
                <span className="date">{e.period}</span>
              </div>
              <div className="place">{e.type}</div>
              <ul className="bul">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="tech">
                <b>Technologies:</b> {e.stack.join(", ")}
              </p>
            </div>
          ))}
        </section>

        <section>
          <h2>Education</h2>
          {education.map((ed) => (
            <div className="entry" key={ed.title}>
              <div className="line">
                <span className="who">{ed.title}</span>
                {ed.period && <span className="date">{ed.period}</span>}
              </div>
              <div className="place">
                {ed.meta}, {ed.place}
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2>Skills</h2>
          <ul className="skills">
            {stackGroups.map((g) => (
              <li key={g.title}>
                <b>{g.title}:</b> {g.items.join(", ")}
              </li>
            ))}
          </ul>
        </section>

        <section className="projects-section">
          <h2>Projects</h2>
          {projects.filter((p) => p.cv !== false).map((p) => (
            <div className="proj-item" key={p.title}>
              <div className="name">{p.title}</div>
              <p className="desc">{p.description}</p>
              <p className="tech">
                <b>Technologies:</b> {p.tech.join(", ")}
              </p>
              <p className="repo">
                <b>{p.repos ? "Repositories:" : "Repository:"}</b>{" "}
                {p.repos ? (
                  p.repos.map((r, i) => (
                    <span key={r.url}>
                      {i > 0 ? ", " : ""}
                      {r.label}: <a href={r.url}>{strip(r.url)}</a>
                    </span>
                  ))
                ) : (
                  <a href={p.link}>{strip(p.link)}</a>
                )}
              </p>
            </div>
          ))}
        </section>

        <section>
          <h2>Certifications</h2>
          <ul className="certs">
            {certifications.map((c) => (
              <li key={c.title + c.id}>
                {c.title}, {issuerOf(c.issuer)}, {c.year}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
