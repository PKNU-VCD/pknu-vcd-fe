import HeaderIcon from '@/assets/icons/HeaderIcon.svg';
import UnionIcon from '@/assets/icons/Union.svg';
import { Button } from '@/components/button/Button';
import * as S from './Header.styles';

// [x] FIXME: 헤더 서브타입 제거
interface HeaderProps {
  headerType?: 'main' | 'sub';
}

const Header = ({ headerType = 'main' }: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.HeaderLogo>
          <HeaderIcon />
        </S.HeaderLogo>
        <S.HeaderMenu>
          <Button variant="primary" headerType={headerType}>
            소개합니다.
          </Button>
          <Button variant="primary" headerType={headerType}>
            전시합니다.
          </Button>
          <Button variant="primary" headerType={headerType}>
            디자인합니다,
          </Button>
          <Button variant="primary" headerType={headerType}>
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
