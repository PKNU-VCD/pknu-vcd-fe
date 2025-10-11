'use client';

import { createGuestbook, fetchGuestbooks, Guestbook } from '@/apis/guestbook';
import RecordLogoMobile from '@/assets/icons/sub/mobile/intro.svg';
import UnionDesign from '@/assets/icons/sub/mobile/Union_design.svg';
import UnionExhibit from '@/assets/icons/sub/mobile/Union_exhibit.svg';
import UnionIntro from '@/assets/icons/sub/mobile/Union_intro.svg';
import RecordLogoBlue from '@/assets/icons/sub/record/main_blue.svg';
import RecordLogoPink from '@/assets/icons/sub/record/main_pink.svg';
import RecordLogoTablet from '@/assets/icons/sub/record/tablet/main_icon.svg';
import FloatingDraggable from '@/components/floatingDraggable/FloatingDraggable';
import dynamic from 'next/dynamic';

const FireworkBackground = dynamic(
  () => import('@/components/fireworkBackground/FireworkBackground'),
  { ssr: false },
);
import Footer from '@/components/footer/Footer';
import { GuestbookCard } from '@/components/guestbook/guestbookCard/GuestbookCard';
import { GuestbookGrid } from '@/components/guestbook/guestbookGrid/GuestbookGrid';
import { GuestbookInput } from '@/components/guestbook/guestbookInput/GuestbookInput';
import Header from '@/components/header/Header';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { theme } from '@/styles/theme';
import { getRandomThemeColor } from '@/utils/randomColor';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CommonContainer } from '../introduce/common.styles';
import * as MainStyles from '../main/page.styles';
import * as S from './page.styles';

const recordLogos = [RecordLogoPink, RecordLogoBlue];

const unionIcons = [UnionDesign, UnionExhibit, UnionIntro];
const RandomUnionIcon = unionIcons[Math.floor(Math.random() * unionIcons.length)];

const generateEdgeWeightedPosition = () => {
  const random = Math.random();
  if (random < 0.7) {
    return Math.random() < 0.5 ? Math.random() * 20 : 80 + Math.random() * 20;
  }
  return 20 + Math.random() * 60;
};

const floatingIcons = [
  { icon: <MainStyles.FloatingOne />, color: theme.colors.lightGreen },
  { icon: <MainStyles.FloatingTwo />, color: theme.colors.yellow },
  { icon: <MainStyles.FloatingThree />, color: theme.colors.lightBlue },
];

export default function Record() {
  const isTablet = useMediaQuery(`(max-width: ${theme.breakpoints.tablet})`);
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.mobileLarge})`);
  const recordContainerRef = useRef<HTMLDivElement>(null);
  const blinkRef = useRef<HTMLDivElement>(null);
  const guestbookColors = ['green', 'pink', 'yellow'] as const;

  const [guestbooks, setGuestbooks] = useState<Guestbook[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const RandomRecordLogo = recordLogos[Math.floor(Math.random() * recordLogos.length)];

  useEffect(() => {
    const loadGuestbooks = async () => {
      try {
        const response = await fetchGuestbooks();
        if (response.success) {
          setGuestbooks(response.data);
        }
      } catch (error) {
        console.error('방명록을 불러오는데 실패했습니다.', error);
      }
    };

    loadGuestbooks();
  }, []);

  const handleSubmit = async (content: string) => {
    if (!content.trim()) return;

    setIsLoading(true);
    try {
      const response = await createGuestbook({ content });
      if (response.success) {
        setGuestbooks(prev => [response.data, ...prev]);
      }
    } catch (error) {
      console.error('방명록을 작성에 실패했습니다.', error);
    } finally {
      setIsLoading(false);
    }
  };

  const randomGuestbook = useMemo(() => {
    if (guestbooks.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * guestbooks.length);
    return guestbooks[randomIndex];
  }, [guestbooks]);

  return (
    <>
      <FireworkBackground color={theme.colors.lightGreen} />
      <Header headerType="main" />
      <CommonContainer>
        <S.RecordContainer ref={recordContainerRef}>
          <S.RecordLogoWrapper>
            {isMobile ? (
              <RecordLogoMobile />
            ) : isTablet ? (
              <RecordLogoTablet />
            ) : (
              <RandomRecordLogo />
            )}
            <S.MainGuestbookContainer>
              <GuestbookCard
                text={randomGuestbook?.content || ''}
                $backgroundColor={getRandomThemeColor(guestbookColors)}
              />
            </S.MainGuestbookContainer>
            {isMobile && (
              <S.UnionWrapper>
                <RandomUnionIcon />
              </S.UnionWrapper>
            )}
          </S.RecordLogoWrapper>
          {isMobile ? (
            <S.RecordTitle>
              졸업을 축하하는 마음을
              <br /> ‘_합니다.’ 의 빈칸과 함께 채워주세요.
            </S.RecordTitle>
          ) : (
            <S.RecordTitle>
              졸업을 축하하는 마음을 ‘_합니다.’ 의 빈칸과 함께 채워주세요.
            </S.RecordTitle>
          )}
        </S.RecordContainer>
        {isMobile && (
          <>
            <S.MainGuestbookContainerMobile>
              <GuestbookCard
                text={randomGuestbook?.content || '졸업 축하합니다!'}
                $backgroundColor={getRandomThemeColor(guestbookColors)}
              />
            </S.MainGuestbookContainerMobile>
          </>
        )}
        <GuestbookGrid comments={guestbooks.map(g => g.content)} />
        <S.GuestbookInputContainer>
          <GuestbookInput onSubmit={handleSubmit} />
        </S.GuestbookInputContainer>

        {!isMobile &&
          floatingIcons.map((item, index) => (
            <FloatingDraggable
              key={index}
              icon={item.icon}
              initialPercent={{
                x: generateEdgeWeightedPosition(),
                y: generateEdgeWeightedPosition(),
              }}
              dropRef={blinkRef}
              containerRef={recordContainerRef}
              label={`floating ${index + 1}`}
            />
          ))}
      </CommonContainer>
      <Footer footerType="sub" backgroundColor="white" />
    </>
  );
}
