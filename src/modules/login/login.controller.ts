import { Body, Controller, Post, Req } from '@nestjs/common';
import { openApi } from '@/utils/request';
import { Request } from 'express';

interface LoginDto {
  username: string;
  password: string;
}

@Controller('login')
export class LoginController {
  @Post('/')
  async login(@Req() req: Request, @Body() loginDto: LoginDto) {
    const { username, password } = loginDto;

    const result = await openApi.request({
      method: req.method,
      url: '/v1.0/iot-03/users/login',
      data: { username, password },
    });

    return result.data;
  }
}
