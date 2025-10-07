import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 80px;
  gap: 60px;
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 60px 40px;
    gap: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    padding: 40px 20px;
    gap: 30px;
  }
`;

export type TextContainerProps = 'title' | 'option' | 'description';

export const TextContainer = styled.div<{ variant: TextContainerProps }>`
  ${({ variant, theme }) =>
    variant === 'title' ? theme.typography.medium : theme.typography.regular}
  color: ${({ variant, theme }) => (variant === 'option' ? theme.colors.pink : theme.colors.black)};
`;

export const RowTitleContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const ResponsiveRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  > * {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    gap: 20px;
  }
`;

export const ThumbnailUploadContainer = styled.div`
  max-width: 500px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const ImageSectionContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ImageGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    display: flex;
    overflow-x: auto;
    padding: 10px 0;
    grid-template-columns: none;
    grid-template-rows: none;

    /* 스크롤바 스타일링 */
    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.adminLightGray};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.adminMediumGray};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.adminDarkGray};
    }
  }
`;

export const ImageUploadItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    min-width: 120px;
    width: 120px;
  }
`;

export const AdditionalUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  min-width: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    min-width: auto;
    width: 100%;
    order: -1; /* mobileLarge에서 위로 이동 */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 50px;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    flex-direction: column;
    gap: 20px;
  }
`;
