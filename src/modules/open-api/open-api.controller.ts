import { Controller, All, Req } from '@nestjs/common';
import { Request } from 'express';
import { openApi } from '@/utils/request';

@Controller('open-api/*')
export class OpenApiController {
  @All()
  async doProxy(@Req() req: Request) {
    const { method, path, headers, body, query } = req;
    console.log('open-api', method, path, headers, body, query);
    const result = await openApi.request({
      method,
      url: path,
      headers,
      data: body,
      params: query,
    });
    return result;
  }
}
