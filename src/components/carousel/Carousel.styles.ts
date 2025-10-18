import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow: hidden;
`;

export const SlidesContainer = styled.div<{ $currentIndex: number; $isTransitioning: boolean }>`
  display: flex;
  width: 100%;
  transform: translateX(${({ $currentIndex }) => `-${$currentIndex * 100}%`});
  transition: ${({ $isTransitioning }) =>
    $isTransitioning ? 'transform 0.4s ease-in-out' : 'none'};
`;

export const ImageWrapper = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: auto;
  display: block;
  position: relative;
`;

export const VideoContainer = styled.iframe`
  flex: 0 0 100%;
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const DotContainer = styled.div<{ $isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.darkGray : theme.colors.carouselGray};
  border: none;
  cursor: pointer;
`;
