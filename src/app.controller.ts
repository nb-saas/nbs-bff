import { Controller, Get } from '@nestjs/common';
import axios from 'axios';
import { processHtmlPath } from '@/utils';

const mBase = 'https://www.unpkg.com/nbs-main-app@0.0.5-beta.2/dist';

@Controller('/')
export class AppController {
  @Get()
  async static() {
    console.log('static');
    const html = await axios.get(`${mBase}/index.html`);
    return processHtmlPath(html.data, mBase);
  }
}
