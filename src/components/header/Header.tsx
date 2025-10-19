'use client';

import HeaderIcon from '@/assets/icons/HeaderIcon.svg';
import UnionIcon from '@/assets/icons/Union.svg';
import { useNavigator } from '@/hooks/useNavigator';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '../Button/Button';
import Sidebar from '../sidebar/Sidebar';
import * as S from './Header.styles';

// [x] FIXME: 헤더 서브타입 제거
interface HeaderProps {
  headerType?: 'main' | 'sub';
}

const Header = ({ headerType = 'main' }: HeaderProps) => {
  const { navigateTo } = useNavigator();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleButtonClick = (path: string) => {
    navigateTo(path);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.HeaderLogo onClick={() => handleButtonClick('/main')}>
          <HeaderIcon width={120} height={54} />
        </S.HeaderLogo>
        <S.HeaderMenu>
          <Button
            variant="primary"
            headerType={headerType}
            isActive={pathname.startsWith('/introduce')}
            onClick={() => handleButtonClick('/introduce/introduction')}
          >
            소개합니다.
          </Button>
          <Button
            variant="primary"
            headerType={headerType}
            isActive={pathname.startsWith('/exhibition')}
            onClick={() => handleButtonClick('/exhibition')}
          >
            전시합니다.
          </Button>
          <Button
            variant="primary"
            headerType={headerType}
            isActive={pathname.startsWith('/architect')}
            onClick={() => handleButtonClick('/architect')}
          >
            디자인합니다.
          </Button>
          <Button
            variant="primary"
            headerType={headerType}
            isActive={pathname.startsWith('/record')}
            onClick={() => handleButtonClick('/record')}
          >
            기록합니다.
          </Button>
        </S.HeaderMenu>
        <S.HeaderAdminTab onClick={() => {}}></S.HeaderAdminTab>
        <S.HeaderUnion onClick={handleSidebarToggle}>
          <UnionIcon />
        </S.HeaderUnion>
      </S.HeaderWrapper>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
    </S.HeaderContainer>
  );
};

export default Header;
