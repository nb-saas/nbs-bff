```js
src
├── app.module.ts        # 应用根模块
├── app.controller.ts    # 应用根控制器
├── main.ts              # 入口文件
├── modules              # 模块目录
│   ├── posts            # posts 模块目录
│   │   ├── posts.module.ts    # posts 模块
│   │   ├── posts.controller.ts # posts 控制器
│   │   └── posts.service.ts    # posts 服务
│   └── users            # users 模块目录
├── services             # 共享服务目录
│   └── logger.service.ts # 日志服务
├── filters              # 过滤器目录
├── interceptors         # 拦截器目录
├── guards               # 守卫目录
├── decorators           # 装饰器目录
├── interfaces           # 接口目录
├── validators           # 验证器目录
├── models               # 数据库模型目录
│   └── post.entity.ts       # 文章模型
├── repositories         # 仓储目录
│   └── posts.repository.ts  # 文章仓储
├── configs              # 配置目录
├── environments        # 环境目录
└── utils                # 实用工具目录
```
