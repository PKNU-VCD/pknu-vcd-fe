import Floating1 from '@/assets/icons/Floating_1.svg';
import Floating2 from '@/assets/icons/Floating_2.svg';
import Floating3 from '@/assets/icons/Floating_3.svg';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  min-height: calc(100dvh - 76px);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

export const FooterSection = styled.section`
  margin-top: auto;
`;

export const MainSection = styled.section`
  padding: 180px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 180px;
  position: relative;
`;

export const DropSection = styled.section`
  width: min(520px, 80%);
  height: 160px;
  border: 2px dashed ${({ theme }) => theme.colors.stroke};
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.03);
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.stroke};
  user-select: none;
  z-index: 1;
`;

export const SubTitle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.p`
  white-space: pre-line;
  text-align: center;
  color: ${({ theme }) => theme.colors.blue};
`;

export const FloatingOne = styled(Floating1)`
  width: 84px;
  height: auto;
  display: block; /* baseline 여백 제거 */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    width: 64px;
  }
`;

export const FloatingTwo = styled(Floating2)`
  width: 118px;
  height: auto;
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    width: 87px;
  }
`;

export const FloatingThree = styled(Floating3)`
  width: 100px;
  height: auto;
  display: block;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    width: 75px;
  }
`;
