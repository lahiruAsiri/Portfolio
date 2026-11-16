import fs from "node:fs";
import path from "node:path";
import { Document, Page, Text, View, Image, Link, StyleSheet } from "@react-pdf/renderer";
import {
  profile,
  cvSummary,
  experience,
  projects,
  stackGroups,
  education,
  certifications,
} from "@/lib/data";

/*
 * Server-rendered CV PDF (served at /Lahiru-Asiri-CV.pdf).
 * Layout mirrors the original hand-made 2-page A4 CV; all content comes from
 * lib/data.ts, so the experience length is always current.
 */

const strip = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

// shorter issuer names so certification lines stay on one line
const shortIssuer: Record<string, string> = {
  "University of Moratuwa (CODL)": "Univ. of Moratuwa",
};
const issuerOf = (name: string) => shortIssuer[name] ?? name;

const s = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 34,
    paddingHorizontal: 37,
    fontFamily: "Times-Roman",
    fontSize: 9.2,
    lineHeight: 1.35,
    color: "#000",
  },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },

  head: { flexDirection: "row", justifyContent: "space-between" },
  name: { fontWeight: "bold", fontSize: 20, lineHeight: 1.1 },
  role: { fontWeight: "bold", fontSize: 10.5, marginTop: 4 },
  contact: { fontSize: 8.6, marginTop: 8, lineHeight: 1.75 },
  photo: { width: 72, height: 86, objectFit: "cover" },

  h2: {
    fontWeight: "bold",
    fontSize: 10.5,
    textTransform: "uppercase",
    marginTop: 12,
    marginBottom: 6,
    paddingBottom: 3,
    borderBottomWidth: 0.8,
    borderBottomColor: "#000",
  },
  summary: { fontSize: 9.4, lineHeight: 1.6 },

  entry: { marginBottom: 7 },
  line: { flexDirection: "row", justifyContent: "space-between" },
  who: { fontWeight: "bold", fontSize: 10, flex: 1, paddingRight: 16 },
  date: { fontWeight: "bold", fontSize: 9.4 },
  place: { fontStyle: "italic", fontSize: 8.4, marginTop: 1 },

  bulletRow: { flexDirection: "row", marginTop: 2.5 },
  bulletDot: { width: 13, paddingLeft: 3, fontSize: 9 },
  bulletText: { flex: 1, fontSize: 8.9 },
  tech: { fontSize: 8.3, marginTop: 3 },

  skillRow: { flexDirection: "row", marginBottom: 3.2 },
  skillText: { flex: 1, fontSize: 9 },

  proj: { marginBottom: 6 },
  projName: { fontWeight: "bold", fontSize: 10 },
  projDesc: { fontSize: 8.4, marginTop: 1.5 },
  projMeta: { fontSize: 8.4, marginTop: 2.5 },

  certCols: { flexDirection: "row" },
  certCol: { flex: 1 },
  certRow: { flexDirection: "row", marginBottom: 3 },
  certDot: { width: 10, fontSize: 8.6 },
  certText: { flex: 1, fontSize: 8.6 },
});

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <View style={s.bulletRow} wrap={false}>
      <Text style={s.bulletDot}>•</Text>
      <Text style={s.bulletText}>{children}</Text>
    </View>
  );
}

function portrait(): Buffer | null {
  try {
    return fs.readFileSync(path.join(process.cwd(), "public", "portrait.jpg"));
  } catch {
    return null;
  }
}

export default function CvDocument() {
  const photo = portrait();
  const cvProjects = projects.filter((p) => p.cv !== false);
  const half = Math.ceil(certifications.length / 2);
  const certCols = [certifications.slice(0, half), certifications.slice(half)];

  return (
    <Document title={`${profile.name} - CV`} author={profile.name}>
      <Page size="A4" style={s.page}>
        {/* header */}
        <View style={s.head}>
          <View>
            <Text style={s.name}>{profile.name}</Text>
            <Text style={s.role}>{profile.role}</Text>
            <Text style={s.contact}>
              {`${profile.email}  |  ${profile.phone}  |  ${profile.location}`}
              {"\n"}
              <Link src={profile.website} style={{ color: "#000", textDecoration: "none" }}>
                {profile.websiteLabel}
              </Link>
              {`  |  ${strip(profile.github)}  |  ${strip(profile.linkedin)}`}
            </Text>
          </View>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          {photo && <Image style={s.photo} src={photo} />}
        </View>

        {/* summary */}
        <Text style={s.h2}>Summary</Text>
        <Text style={s.summary}>{cvSummary()}</Text>

        {/* experience */}
        <Text style={s.h2}>Experience</Text>
        {experience.map((e) => (
          <View style={s.entry} key={e.role + e.period}>
            <View style={s.line}>
              <Text style={s.who}>
                {e.role}, {e.company}
              </Text>
              <Text style={s.date}>{e.period}</Text>
            </View>
            <Text style={s.place}>{e.type}</Text>
            {e.bullets.map((b) => (
              <Bullet key={b}>{b}</Bullet>
            ))}
            <Text style={s.tech}>
              <Text style={s.bold}>Technologies: </Text>
              {e.stack.join(", ")}
            </Text>
          </View>
        ))}

        {/* education */}
        <Text style={s.h2}>Education</Text>
        {education.map((ed) => (
          <View style={s.entry} key={ed.title} wrap={false}>
            <View style={s.line}>
              <Text style={s.who}>{ed.title}</Text>
              {ed.period ? <Text style={s.date}>{ed.period}</Text> : null}
            </View>
            <Text style={s.place}>
              {ed.meta}, {ed.place}
            </Text>
          </View>
        ))}

        {/* skills */}
        <Text style={s.h2}>Skills</Text>
        {stackGroups.map((g) => (
          <View style={s.skillRow} key={g.title} wrap={false}>
            <Text style={s.bulletDot}>•</Text>
            <Text style={s.skillText}>
              <Text style={s.bold}>{g.title}: </Text>
              {g.items.join(", ")}
            </Text>
          </View>
        ))}

        {/* projects — always start on page 2 */}
        <View break>
          <Text style={[s.h2, { marginTop: 0 }]}>Projects</Text>
          {cvProjects.map((p) => (
            <View style={s.proj} key={p.title} wrap={false}>
              <Text style={s.projName}>{p.title}</Text>
              <Text style={s.projDesc}>{p.description}</Text>
              <Text style={s.projMeta}>
                <Text style={s.bold}>Technologies: </Text>
                {p.tech.join(", ")}
              </Text>
              <Text style={s.projMeta}>
                <Text style={s.bold}>{p.repos ? "Repositories: " : "Repository: "}</Text>
                {p.repos
                  ? p.repos.map((r) => `${r.label}: ${strip(r.url)}`).join(", ")
                  : strip(p.link)}
              </Text>
            </View>
          ))}
        </View>

        {/* certifications — two columns */}
        <View wrap={false}>
          <Text style={s.h2}>Certifications</Text>
          <View style={s.certCols}>
            {certCols.map((col, i) => (
              <View style={s.certCol} key={i}>
                {col.map((c) => (
                  <View style={s.certRow} key={c.title + c.id}>
                    <Text style={s.certDot}>•</Text>
                    <Text style={s.certText}>
                      {c.title}, {issuerOf(c.issuer)}, {c.year}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}
