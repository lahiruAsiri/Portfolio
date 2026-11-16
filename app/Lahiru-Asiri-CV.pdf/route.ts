import { createElement } from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import CvDocument from "@/lib/cv-pdf";

// Generated from lib/data.ts and cached; re-generated daily so the
// experience length in the summary stays current.
export const dynamic = "force-static";
export const revalidate = 86400;

export async function GET() {
  const pdf = await renderToBuffer(createElement(CvDocument));
  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Lahiru-Asiri-CV.pdf"',
    },
  });
}
