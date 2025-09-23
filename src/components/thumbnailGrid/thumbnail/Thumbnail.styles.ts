import styled from '@emotion/styled';

export const Wrapper = styled.div<{ $isBlurred?: boolean }>`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  cursor: pointer;

  //TODO: 디자인 확인 후 클릭 막기
  ${({ $isBlurred }) =>
    $isBlurred &&
    `
    opacity: 0.5;
  `}

  &:hover .overlay {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ImageContainer = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const OverlayContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.5) 32.84%, rgba(0, 0, 0, 0) 131.35%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);

  opacity: 0;
  transition: all 0.3s ease;
`;

export const TitleContainer = styled.div`
  ${({ theme }) => theme.typography.bold};
  color: ${({ theme }) => theme.colors.gray};
`;

export const DesignerContainer = styled.div`
  ${({ theme }) => theme.typography.medium};
  color: ${({ theme }) => theme.colors.gray};
`;
