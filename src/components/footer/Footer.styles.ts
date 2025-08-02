import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  z-index: 1000;

  // 스토리북에서 보이도록 추가
  @media (max-width: 9999px) {
    position: relative;
    bottom: auto;
    left: auto;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 50px 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 50px 80px;
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    gap: 50px;
    padding: 60px 28px;
    flex-direction: column;
  }
`;

export const ExhibitionWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    gap: 30px;
    flex-direction: column;
  }
`;

export const ExhibitionText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #666;
  font-size: ${({ theme }) => theme.typography.regular.fontSize};
  font-weight: ${({ theme }) => theme.typography.regular.fontWeight};
  line-height: ${({ theme }) => theme.typography.regular.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.regular.letterSpacing};

  word-wrap: break-word;
  word-break: keep-all; // 한글 단어 단위로 줄바꿈

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    text-align: center;
    gap: 30px;
  }
`;

export const FooterSocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  > svg {
    cursor: pointer;
  }
`;
