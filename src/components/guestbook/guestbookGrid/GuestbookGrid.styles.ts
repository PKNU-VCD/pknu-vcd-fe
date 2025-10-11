import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  overflow: auto;
  height: 660px;
  padding-right: 20px;

  &::-webkit-scrollbar {
    width: 11px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #00aeef;
    border: 3px solid #ff74ff;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #0099d6;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    height: 346px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    grid-template-columns: 1fr;
    gap: 20px;
    height: 800px;
  }
`;
