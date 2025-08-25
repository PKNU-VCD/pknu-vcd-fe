'use client';

import ExhibitCelebrationLogo from '@/assets/icons/sub/celebration.svg';
import ButtonList from '@/components/buttonlist/ButtonList';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import * as S from './page.styles';

export default function Celebration() {
  return (
    <>
      <Header headerType="main" />
      <S.CelebrationWrapper>
        <S.CelebrationLogoContainer>
          <S.CelebrationLogoText>
            제 37회 2025 국립부경대학교 시각디자인전공 졸업전시회
          </S.CelebrationLogoText>
          <ExhibitCelebrationLogo />
        </S.CelebrationLogoContainer>
        <ButtonList />
      </S.CelebrationWrapper>
      <S.CelebrationInfoContainer>
        <S.ProfessorContainer>
          <S.ProfessorTitle>대표교수</S.ProfessorTitle>
          <S.Professor>홍동식 Hong dong sik</S.Professor>
        </S.ProfessorContainer>
        <S.ContentContainer>
          <S.ContentTitle>한마디 (진심으로 축하드리며, 매우 자랑스럽게 생각합니다.)</S.ContentTitle>
          <S.Content>
            미술 전시의 틀을 깨는 졸업 작품들이 유전자 편집 기술로 재구성될 가능성이 제기되었습니다.
            연구에 따르면, 캔버스 위의 시간은 붓 터치 하나로 뒤섞이며, <br /> 조형물의 형태는 졸업
            시즌마다 변주된다고 합니다. 이는 단순한 전시 기획을 넘어 퍼포먼스적 공간 해체에도 활용될
            수 있어, 갤러리 벽이 사라질 날도 <br />
            머지않았다는 예측이 나옵니다. 윤곽이 사라진 액자는 의미의 경계를 허물고, 조명 아래
            떠오르는 그림자는 졸업생들의 시선에 따라 다시 태어납니다.
            <br /> 물론 논란도 존재하지만, 관계자들은 이 흐름이 예술과 전시의 새로운 파장을 일으킬
            것으로 기대하고 있습니다.
          </S.Content>
          <S.Content>대표교수 홍동식 Hong dong sik</S.Content>
        </S.ContentContainer>
      </S.CelebrationInfoContainer>
      <Footer footerType="sub" />
    </>
  );
}
