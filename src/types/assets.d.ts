// SVG - React 컴포넌트로 import
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// 이미지
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.gif' {
  const src: string;
  export default src;
}
declare module '*.webp' {
  const src: string;
  export default src;
}
declare module '*.avif' {
  const src: string;
  export default src;
}
declare module '*.bmp' {
  const src: string;
  export default src;
}

// 폰트
declare module '*.woff' {
  const src: string;
  export default src;
}
declare module '*.woff2' {
  const src: string;
  export default src;
}
declare module '*.ttf' {
  const src: string;
  export default src;
}
declare module '*.otf' {
  const src: string;
  export default src;
}
declare module '*.eot' {
  const src: string;
  export default src;
}

// 기타
declare module '*.pdf' {
  const src: string;
  export default src;
}
declare module '*.txt' {
  const src: string;
  export default src;
}
declare module '*.csv' {
  const src: string;
  export default src;
}

// CSS/SCSS 모듈
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

// 일반 스타일시트 (선택)
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
