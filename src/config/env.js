import 'dotenv/config';
import { cleanEnv, port, str } from 'envalid';

const env = cleanEnv(process.env, {
  PORT: port({ default: 3000 }),
  NODE_ENV: str({ default: 'development', choices: ['development', 'production', 'test'] }),
  // Optional SOCKS5 proxy (e.g. a Cloudflare WARP sidecar: socks5://warp:1080)
  // used ONLY for Cloudflare-IP-gated CDNs like mewstream.buzz. Empty = direct.
  GATED_PROXY: str({ default: '' }),
});

export default env;
