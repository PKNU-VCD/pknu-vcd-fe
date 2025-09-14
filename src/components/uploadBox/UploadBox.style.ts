import styled from '@emotion/styled';

interface WrapperProps {
  $isThumbnail?: boolean;
  $hasUploadedImage?: boolean;
}

export const Wrapper = styled.label<WrapperProps>`
  border: 2px solid ${({ theme }) => theme.colors.gray};
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  padding: ${({ $isThumbnail, $hasUploadedImage }) => {
    if ($isThumbnail && $hasUploadedImage) return '0';
    if ($isThumbnail) return '20px';
    return '110px 0';
  }};
  width: 100%;
  cursor: pointer;
  min-height: ${({ $isThumbnail }) => ($isThumbnail ? '300px' : '300px')};

  @media (min: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const TextContainer = styled.p``;

export const ThumbnailImage = styled.img`
  max-width: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
`;
