import styled from '@emotion/styled';

export const Wrapper = styled.div`
  column-count: 3;
  column-gap: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    column-count: 1;
  }
`;

export const ThumbnailContainer = styled.div`
  break-inside: avoid;
  margin-bottom: 50px;
`;
