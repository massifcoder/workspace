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
//   converted.pipe(fs.createWriteStream(fileName))
//     .on('finish', () => {
//       res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
//       res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
//       fs.createReadStream(fileName).pipe(res);
//     })
//     .on('error', (err) => {
//       console.error('Error:', err);
//       res.status(500).end();
//     });
res.status(500).end();
}
