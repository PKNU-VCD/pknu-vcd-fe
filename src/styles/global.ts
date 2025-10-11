import { css } from '@emotion/react';

export const global = css`
  * {
    box-sizing: border-box;
    font-family: inherit;
  }
  body {
    font-family: var(--font-suit, 'SUIT', 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif);
    padding-top: 76px;
  }
  html {
    scroll-behavior: smooth;
  }
  textarea {
    resize: none;
    &:focus {
      outline: none;
    }
  }
  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    &:disabled {
      cursor: default;
    }
  }
`;
