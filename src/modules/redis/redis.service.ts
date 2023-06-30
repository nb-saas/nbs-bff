import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  public readonly redis: Redis;
  constructor() {
    this.redis = new Redis({
      port: 6379,
      host: '127.0.0.1',
    });
  }
}
