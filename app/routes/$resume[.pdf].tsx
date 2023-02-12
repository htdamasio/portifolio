import { readFileSync } from 'fs'
import sanitize from 'sanitize-filename'
const path = require('path');

const getFileContents = (filename: string) => {
  let file = path.join(__dirname, "../app/content/", `${sanitize(filename)}.pdf`);
  return readFileSync(file)
}

type ParamsType = {
  resume: string
}

export async function loader({ params }: { params: ParamsType }) {
  const { resume } = params
  const pdf = getFileContents(resume)
  return new Response(pdf, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
    },
  })
}