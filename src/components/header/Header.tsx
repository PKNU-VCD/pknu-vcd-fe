import HeaderIcon from '@/assets/icons/HeaderIcon.svg';
import UnionIcon from '@/assets/icons/Union.svg';
import { Button } from '../button/Button';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.HeaderLogo>
          <HeaderIcon />
        </S.HeaderLogo>
        <S.HeaderMenu>
          <Button variant="primary">소개합니다.</Button>
          <Button variant="primary">전시합니다.</Button>
          <Button variant="primary">디자인합니다,</Button>
          <Button variant="primary">기록합니다.</Button>
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
