import { useEffect, useState } from 'react';
import * as S from './BlinkingLogo.style';

type BlinkingLogoProps = {
  /** 드롭 타깃이 될 BlinkSection의 ref */
  blinkRef?: React.RefObject<HTMLDivElement | null>;
};

export const BlinkingLogo = ({ blinkRef }: BlinkingLogoProps) => {
  const [showBlink, setShowBlink] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setShowBlink(p => !p), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <S.LogoWrapper>
      <S.Logo />
      <S.BlinkSection
        ref={blinkRef}
        aria-hidden
        data-role="drop-target"
        style={{ opacity: showBlink ? 1 : 0 }}
      />
    </S.LogoWrapper>
  );
};
