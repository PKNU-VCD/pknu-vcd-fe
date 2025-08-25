'use client';

import BusIcon from '@/assets/icons/sub/busIcon.svg';
import CarIcon from '@/assets/icons/sub/carIcon.svg';
import ExhibitDetailLogo from '@/assets/icons/sub/exhibit_detail.svg';
import MapIcon from '@/assets/icons/sub/mapIcon.svg';
import SubwayIcon from '@/assets/icons/sub/subwayIcon.svg';
import { Button } from '@/components/button/Button';
import ButtonList from '@/components/buttonlist/ButtonList';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import * as S from './page.styles';

export default function Detail() {
  return (
    <>
      <Header headerType="main" />
      <S.DetailWrapper>
        <S.DetailLogoContainer>
          <S.DetailLogoText>제 37회 2025 국립부경대학교 시각디자인전공 졸업전시회</S.DetailLogoText>
          <ExhibitDetailLogo />
        </S.DetailLogoContainer>
        <ButtonList />
      </S.DetailWrapper>
      <S.DetailContainer>
        <S.ExhibitionDateContainer>
          <S.ExhibitionDate>
            <S.ExhibitionDateText>전시 일정</S.ExhibitionDateText>
            <S.ExhibitionDateText>
              2025.10.24.Fri, 2025.10.27.Mon. - 2025.10.28.Tue (10AM~6PM)
            </S.ExhibitionDateText>
          </S.ExhibitionDate>
        </S.ExhibitionDateContainer>
      </S.DetailContainer>
      <S.DetailContainer>
        <S.SubIntroductionContainer>
          <S.AddressContainer>
            전시주소
            <S.Address>
              <S.AddressText>
                <p>오프닝</p>
                <p>
                  부산광역시 남구 용소로 국립부경대학교 대연캠퍼스 중앙도서관 4층 창의 혁신 라운지
                  (부산 남구 용소로 45 4F)
                </p>
              </S.AddressText>
              <S.AddressText>
                <p>전시</p>
                <p>
                  부산광역시 남구 용소로 국립부경대학교 대연캠퍼스 중앙도서관 1층 갤러리 라운지
                  (부산 남구 용소로 45 1F)
                </p>
              </S.AddressText>
            </S.Address>
          </S.AddressContainer>
          <S.MapContainer>
            <MapIcon />
            <S.VehicleContainer>
              <S.Vehicle>
                <Button variant="exhibition" label="승용차 이용 시" />
                <p>국립부경대학교 유료 주차장</p>
                <S.IconTextContainer>
                  <CarIcon />
                  <p>1시간 0,000원</p>
                </S.IconTextContainer>
              </S.Vehicle>
              <S.AddressContainer>
                <Button variant="exhibition" label="대중교통 이용 시 " />
                <S.Vehicle>
                  <S.IconTextContainer>
                    <SubwayIcon />
                    <p>지하철 경성대부경대역</p>
                  </S.IconTextContainer>
                  <S.IconTextContainer>
                    <BusIcon />
                    <p>버스 부경대 대연 캠퍼스</p>
                  </S.IconTextContainer>
                </S.Vehicle>
              </S.AddressContainer>
            </S.VehicleContainer>
          </S.MapContainer>
        </S.SubIntroductionContainer>
      </S.DetailContainer>
      <S.InfoContainer>
        <S.InfoTextContainer>
          <Button variant="exhibition" label="전시 관련 문의" />
          <p>pkvcd1234@gmail.com</p>
        </S.InfoTextContainer>
        <S.InfoTextContainer>
          <Button variant="exhibition" label="부경대학교 시각디자인학과 졸업전시 인스타그램" />
          <p>@pknu_vcd</p>
        </S.InfoTextContainer>
        <S.InfoTextContainer>
          <Button variant="exhibition" label="유튜브" />
          <p>@pknu_vcd</p>
        </S.InfoTextContainer>
      </S.InfoContainer>
      <Footer footerType="sub" />
    </>
  );
}
