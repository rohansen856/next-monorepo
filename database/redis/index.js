import { Redis } from '@upstash/redis'

const redis = new Redis({
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    url: process.env.UPSTASH_REDIS_REST_URL,
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

const data = await redis.set('foo', 'bar');