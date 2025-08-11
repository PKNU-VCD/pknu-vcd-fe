import Down from '@/assets/icons/down.svg';
import Up from '@/assets/icons/up.svg';
import { Theme } from '@emotion/react';
import { useState } from 'react';
import * as S from './TranslationPanel.styles';

interface TranslationPanelProps {
  /** 영어 본문 */
  text: string;
  /** 토글 버튼 컬러 */
  buttonColor?: keyof Theme['colors'];
}

export const TranslationPanel = ({ text, buttonColor = 'lightYellow' }: TranslationPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <S.Wrapper>
      <S.ToggleContainer onClick={togglePanel} $buttonColor={isOpen ? buttonColor : 'gray'}>
        Eng
        {isOpen ? <Down /> : <Up />}
      </S.ToggleContainer>
      {isOpen && <S.TextContainer>{text}</S.TextContainer>}
    </S.Wrapper>
  );
};
