import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey : "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",
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

export default openai;