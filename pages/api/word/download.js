import fs from 'fs';
import HTMLtoDOCX  from 'html-to-docx';

export default async function handler(req, res) {
  const htmlString = req.body.html;

  const fileBuffer = await HTMLtoDOCX(htmlString, null, {
    table: { row: { cantSplit: true } },
    footer: true,
    pageNumber: true,
  });
  const fileName = 'converted_document.docx';
  fs.writeFile(__dirname, fileBuffer, (error) => {
    if (error) {
      console.log('Docx file creation failed');
      return;
    }
    console.log('Docx file created successfully');
  });
res.status(500).end();
}
