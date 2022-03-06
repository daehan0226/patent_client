import { CSSProp } from 'styled-components';
import { sizes, BackQuoteArgs } from './media';

interface colorProps {
    [key: string]: string;
}

export interface ThemeProps {
    colors: colorProps;
    media: Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: BackQuoteArgs) => CSSProp>;
}
