import Down from '@/assets/icons/down.svg';
import Up from '@/assets/icons/up.svg';
import OutlineDown from '@/assets/icons/sub/outline_down.svg';
import OutlineUp from '@/assets/icons/sub/outline_up.svg';
import { Theme } from '@emotion/react';
import { useState } from 'react';
import * as S from './TranslationPanel.styles';

interface TranslationPanelProps {
  /** 영어 본문 */
  text: string;
  /** 토글 버튼 컬러 */
  buttonColor?: keyof Theme['colors'];
  /** 아이콘 스타일 */
  iconVariant?: 'default' | 'outline';
}

export const TranslationPanel = ({
  text,
  buttonColor = 'yellow',
  iconVariant = 'default',
}: TranslationPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(prev => !prev);
  };

  const renderIcon = () => {
    if (iconVariant === 'outline') {
      return isOpen ? <OutlineDown /> : <OutlineUp />;
    }
    return isOpen ? <Down /> : <Up />;
  };

  return (
    <S.Wrapper>
      <S.ToggleContainer onClick={togglePanel} $buttonColor={isOpen ? buttonColor : 'gray'}>
        Eng
        {renderIcon()}
      </S.ToggleContainer>
      {isOpen && <S.TextContainer>{text}</S.TextContainer>}
    </S.Wrapper>
  );
};
