'use client';

import HeaderIcon from '@/assets/icons/HeaderIcon.svg';
import UnionIcon from '@/assets/icons/Union.svg';
import { useRouter } from 'next/navigation';
import { Button } from '../button/Button';
import * as S from './Header.styles';

// [x] FIXME: 헤더 서브타입 제거
interface HeaderProps {
  headerType?: 'main' | 'sub';
}

const Header = ({ headerType = 'main' }: HeaderProps) => {
  const router = useRouter();

  const handleButtonClick = (path: string) => {
    router.push(path);
  };

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.HeaderLogo>
          <HeaderIcon width={120} height={54} />
        </S.HeaderLogo>
        <S.HeaderMenu>
          <Button
            variant="primary"
            headerType={headerType}
            onClick={() => handleButtonClick('/introduce/introduction')}
          >
            소개합니다.
          </Button>
          <Button
            variant="primary"
            headerType={headerType}
            onClick={() => handleButtonClick('/exhibition')}
          >
            전시합니다.
          </Button>
          <Button
            variant="primary"
            headerType={headerType}
            onClick={() => handleButtonClick('/architect')}
          >
            디자인합니다.
          </Button>
          <Button
            variant="primary"
            headerType={headerType}
            onClick={() => handleButtonClick('/record')}
          >
            기록합니다.
          </Button>
        </S.HeaderMenu>
        <S.HeaderAdminTab>관리자</S.HeaderAdminTab>
        <S.HeaderUnion>
          <UnionIcon />
        </S.HeaderUnion>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
