import puppeteer from "puppeteer";
import fs from 'fs-extra'

export default async function Pdf(req,res){
    const body = JSON.parse(req.body);
    const content = body.html;
    const browser = await puppeteer.launch(
        {headless:true}
    );
    const page = await browser.newPage();
    await page.setContent(content)
    const pdfBuffer = await page.pdf()
    console.log('Done')
    await browser.close();
    res.setHeader('Content-Type','application/pdf');
    res.setHeader('Content-Disposition','attachment;filename=download.pdf');
    res.send(pdfBuffer)
}