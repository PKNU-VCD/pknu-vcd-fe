'use client';

import { GuestbookInput } from '@/components/guestbook/guestbookInput/GuestbookInput';
import GlobalStyle from '@/styles/globalStyles';
import * as S from './page.styles';

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.Title>Hello, world!</S.Title>
        <S.Description>Emotion 스타일 테스트입니다.</S.Description>
        <GuestbookInput onSubmit={() => {}} />
      </S.Container>
    </>
  );
}
