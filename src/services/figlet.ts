import { Fonts, textSync } from 'figlet';

interface FigletParams {
  text: string;
  font?: Fonts;
  spaces?: boolean;
}

export function figlet({ text, spaces, ...params }: FigletParams) {
  const figletText = textSync(text, params);

  return console.log(`${spaces ? '\n' : ''}${figletText.green}${spaces ? '\n' : ''}`);
}

