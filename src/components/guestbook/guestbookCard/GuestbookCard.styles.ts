import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const GuestbookCard = styled.div<{ $backgroundColor: keyof Theme['colors'] }>`
  width: 100%;
  height: 100px;
  padding: 30px 50px;
  //TODO: 디자인 팀과 협의 후 overflow 설정 변경
  overflow: auto;
  border-radius: 96px;
  ${({ theme }) => ({ ...theme.typography.medium })}
  background-color: ${({ theme, $backgroundColor }) =>
    theme.colors[$backgroundColor]};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 75px;
    padding: 20px 30px;
    overflow: hidden;
  }
`;
