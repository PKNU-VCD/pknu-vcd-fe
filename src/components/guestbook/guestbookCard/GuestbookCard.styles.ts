import { Theme } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div<{ $backgroundColor: keyof Theme['colors']['guestbook'] }>`
  width: 100%;
  height: 180px;
  padding: 40px 70px;
  display: flex;
  align-items: flex-start;

  //TODO: 디자인 팀과 협의 후 overflow 설정 변경
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; // TODO: 스크롤바 여부에 따라 수정
  }
  border-radius: 96px;
  ${({ theme }) => ({ ...theme.typography.medium })}
  background-color: ${({ theme, $backgroundColor }) => theme.colors.guestbook[$backgroundColor]};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: 30px;
    padding: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    padding: 20px 30px;
    overflow: hidden;
  }
`;
