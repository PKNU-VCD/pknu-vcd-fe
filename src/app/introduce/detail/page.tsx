'use client';

import { CommonContainer } from '@/app/introduce/common.styles';
import BusIcon from '@/assets/icons/sub/busIcon.svg';
import CarIcon from '@/assets/icons/sub/carIcon.svg';
import ExhibitDetailLogo from '@/assets/icons/sub/exhibit_detail.svg';
import MapIcon from '@/assets/icons/sub/mapIcon.svg';
import ExhibitDetailLogoMobile from '@/assets/icons/sub/mobile/exhibit_detail.svg';
import MapIconMobile from '@/assets/icons/sub/mobile/mapIcon.svg';
import SubwayIcon from '@/assets/icons/sub/subwayIcon.svg';
import MapIconTablet from '@/assets/icons/sub/tablet/mapIcon.svg';
import { Button } from '@/components/Button/Button';
import ButtonList from '@/components/buttonList/introduce/IntroduceButton';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Progress from '@/components/progress/progress';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { theme } from '@/styles/theme';
import * as S from './page.styles';

const InstagramUrl = 'https://www.instagram.com/pknu_vcd/';

export default function Detail() {
  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.tablet})`);
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobileLarge})`);

  return (
    <>
      <Header headerType="main" />
      <CommonContainer>
        <S.DetailWrapper>
          <S.DetailLogoContainer>
            {isMobile ? (
              <S.DetailLogoText>
                제 37회 2025 국립부경대학교
                <br /> 시각디자인전공 졸업전시회
              </S.DetailLogoText>
            ) : (
              <S.DetailLogoText>
                제 37회 2025 국립부경대학교 시각디자인전공 졸업전시회
              </S.DetailLogoText>
            )}

            {isMobile ? <ExhibitDetailLogoMobile /> : <ExhibitDetailLogo />}
          </S.DetailLogoContainer>
          <ButtonList />
        </S.DetailWrapper>
        <S.DetailContainer>
          <S.ExhibitionDateContainer>
            <S.ExhibitionDate>
              <S.ExhibitionDateText style={{ fontWeight: 700 }}>전시 일정</S.ExhibitionDateText>
              {!isMobile && (
                <S.ExhibitionDateText>
                  2025.10.24.Fri, 2025.10.27.Mon. - 2025.10.28.Tue (10AM~6PM)
                </S.ExhibitionDateText>
              )}
              {isMobile && (
                <S.ExhibitionDateText>
                  2025.10.24.Fri, 2025.10.27.Mon.
                  <br /> - 2025.10.28.Tue (10AM~6PM)
                </S.ExhibitionDateText>
              )}
            </S.ExhibitionDate>
            <S.ExhibitionDateProgress>
              <S.ExhibitionDateProgressText>
                <S.ExhibitionDateProgressTextLeft>
                  <p>2025.10.24.</p>
                  <p>Fri</p>
                </S.ExhibitionDateProgressTextLeft>
                <p>10AM~8PM</p>
              </S.ExhibitionDateProgressText>
              <Progress
                timeMarkers={[
                  { time: 0.2, color: '#DDDDDD', labelColor: '#DDDDDD' },
                  { time: 6, color: '#DDDDDD', labelColor: '#DDDDDD' },
                  { time: 10.4, color: '#FF74FF', labelColor: '#222222' },
                  { time: 12.8, color: '#DDDDDD', labelColor: '#DDDDDD' },
                  { time: 19.5, color: '#FF74FF', labelColor: '#222222' },
                  { time: 23.8, color: '#DDDDDD', labelColor: '#DDDDDD' },
                ]}
              />
            </S.ExhibitionDateProgress>
            <S.ExhibitionDateProgress>
              <S.ExhibitionDateProgressText>
                <S.ExhibitionDateProgressTextLeft>
                  <p>2025.10.25. - 2025.10.26.</p>
                  <p>Sat - Sun</p>
                </S.ExhibitionDateProgressTextLeft>
                <p>휴관</p>
              </S.ExhibitionDateProgressText>
              <Progress
                backgroundColor="#DDDDDD"
                filledColor="#DDDDDD"
                borderColor="#DDDDDD"
                filledBorderColor="#DDDDDD"
                timeMarkers={[
                  { time: 0.2, color: '#DDDDDD', labelColor: '#DDDDDD' },
                  { time: 6, color: '#DDDDDD', labelColor: '#DDDDDD' },
                  { time: 12.8, color: '#DDDDDD', labelColor: '#DDDDDD' },
                  { time: 19.8, color: '#DDDDDD', labelColor: '#DDDDDD' },
                  { time: 23.8, color: '#DDDDDD', labelColor: '#DDDDDD' },
                ]}
              />
            </S.ExhibitionDateProgress>
            <S.ExhibitionDateProgress>
              <S.ExhibitionDateProgressText>
                <S.ExhibitionDateProgressTextLeft>
                  <p>2025.10.27. - 2025.10.28.</p>
                  <p>Mon - Tue</p>
                </S.ExhibitionDateProgressTextLeft>
                <p>10AM~8PM</p>
              </S.ExhibitionDateProgressText>
              <Progress
                timeMarkers={[
                  { time: 0.2, color: '#DDDDDD', labelColor: '#DDDDDD' },
                  { time: 6, color: '#DDDDDD', labelColor: '#DDDDDD' },
                  { time: 10.4, color: '#FF74FF', labelColor: '#222222' },
                  { time: 12.8, color: '#DDDDDD', labelColor: '#DDDDDD' },
                  { time: 19.5, color: '#FF74FF', labelColor: '#222222' },
                  { time: 23.8, color: '#DDDDDD', labelColor: '#DDDDDD' },
                ]}
              />
            </S.ExhibitionDateProgress>
          </S.ExhibitionDateContainer>
        </S.DetailContainer>
        <S.DetailContainer>
          <S.SubIntroductionContainer>
            <S.AddressContainer>
              전시주소
              <S.Address>
                <S.AddressText>
                  {isMobile && (
                    <>
                      <p>오프닝</p>
                      <p>
                        부산광역시 남구 용소로 국립부경대학교
                        <br /> 대연캠퍼스 중앙도서관 4층 창의 혁신 라운지
                        <br /> (부산 남구 용소로 45 4F)
                      </p>
                    </>
                  )}
                  {!isMobile && isTablet && (
                    <>
                      <p>오프닝</p>
                      <p>
                        부산광역시 남구 용소로 국립부경대학교 대연캠퍼스
                        <br /> 중앙도서관 4층 창의 혁신 라운지 (부산 남구 용소로 45 4F)
                      </p>
                    </>
                  )}
                  {!isMobile && !isTablet && (
                    <>
                      <p>오프닝</p>
                      <p>
                        부산광역시 남구 용소로 국립부경대학교 대연캠퍼스 중앙도서관 4층 창의 혁신
                        라운지 (부산 남구 용소로 45 4F)
                      </p>
                    </>
                  )}
                </S.AddressText>
                <S.AddressText>
                  {isMobile && (
                    <>
                      <p>전시</p>
                      <p>
                        부산광역시 남구 용소로 국립부경대학교 <br /> 대연캠퍼스 중앙도서관 1층
                        갤러리 라운지
                        <br />
                        (부산 남구 용소로 45 1F)
                      </p>
                    </>
                  )}
                  {!isMobile && isTablet && (
                    <>
                      <p>전시</p>
                      <p>
                        부산광역시 남구 용소로 국립부경대학교 대연캠퍼스
                        <br /> 중앙도서관 1층 갤러리 라운지 (부산 남구 용소로 45 1F)
                      </p>
                    </>
                  )}
                  {!isMobile && !isTablet && (
                    <>
                      <p>전시</p>
                      <p>
                        부산광역시 남구 용소로 국립부경대학교 대연캠퍼스 중앙도서관 1층 갤러리
                        라운지 (부산 남구 용소로 45 1F)
                      </p>
                    </>
                  )}
                </S.AddressText>
              </S.Address>
            </S.AddressContainer>
            <S.MapContainer>
              {isMobile ? <MapIconMobile /> : isTablet ? <MapIconTablet /> : <MapIcon />}
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
          {!isMobile && (
            <>
              <S.InfoTextContainer>
                <Button variant="exhibition" label="전시 관련 문의" />
                <p>pkvcd1234@gmail.com</p>
              </S.InfoTextContainer>
              <S.InfoTextContainer>
                <Button
                  variant="exhibition"
                  label="부경대학교 시각디자인학과 졸업전시 인스타그램"
                />
                <p>@pknu_vcd</p>
              </S.InfoTextContainer>
              <S.InfoTextContainer>
                <Button variant="exhibition" label="졸업전시 유튜브" />
                <p>@pknu_vcd</p>
              </S.InfoTextContainer>
            </>
          )}
          {isMobile && (
            <>
              <S.InfoTextContainer>
                <Button variant="exhibition" label={`${'전시 관련 문의 \n pkvcd1234@gmail.com'}`} />
              </S.InfoTextContainer>
              <S.InfoTextContainer>
                <Button
                  variant="exhibition"
                  label={`부경대학교 시각디자인학과\n졸업전시 인스타그램`}
                  onClick={() => window.open(InstagramUrl, '_blank')}
                />
              </S.InfoTextContainer>
              <S.InfoTextContainer>
                <Button variant="exhibition" label={`부경대학교 시각디자인학과\n졸업전시 유튜브`} />
              </S.InfoTextContainer>
            </>
          )}
        </S.InfoContainer>
        <Footer footerType="sub" />
      </CommonContainer>
    </>
  );
}
