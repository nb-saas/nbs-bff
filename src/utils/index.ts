import * as cheerio from 'cheerio';

export const processHtmlPath = (html: string, mBase: string) => {
  const $ = cheerio.load(html);
  const tags = ['img src', 'link href', 'script src'];
  const isUrlReg = /^(data:|https?:|\/)/i;
  tags.forEach((p) => {
    const [tagName, attr] = p.split(' ');
    $(tagName).map(function () {
      const origin = $(this).attr(attr) || '';
      if (isUrlReg.test(origin)) return;
      if (!origin) {
        return;
      }
      const newUrl = new URL(origin, mBase).href;
      $(this).attr(attr, newUrl);
    });
  });
  return $.html();
};
