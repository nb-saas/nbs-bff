import { Body, Controller, Post, Req } from '@nestjs/common';
import { openApi } from '@/utils/request';
import { Request } from 'express';
import { RedisService } from '../redis/redis.service';

interface LoginDto {
  username: string;
  password: string;
}

@Controller('login')
export class LoginController {
  constructor(private redisService: RedisService) {}

  @Post('/')
  async login(@Req() req: Request, @Body() loginDto: LoginDto) {
    const { username, password } = loginDto;
    this.redisService.redis.set('name', 'ruomu');
    console.log('LLL', await this.redisService.redis.get('name'));

    const result = await openApi.request({
      method: req.method,
      url: '/v1.0/iot-03/users/login',
      data: { username, password },
    });

    return result.data;
  }
}
