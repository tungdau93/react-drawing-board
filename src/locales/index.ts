import enUS from './en-US';
import ja from './ja';
import trTR from './tr-TR';
import zhCN from './zh-CN';

export type localeType = 'en-US' | 'zh-CN' | 'tr-TR' | 'en' | 'zh' | 'tr' | 'ja';

export default {
  messages: {
    ['en-US']: enUS,
    ['zh-CN']: zhCN,
    ['tr-TR']: trTR,
    ['en']: enUS,
    ['zh']: zhCN,
    ['tr']: enUS,
    ['ja']: ja,
  },
};
