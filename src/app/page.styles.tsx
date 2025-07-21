'use client';

import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.bold}
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.regular}
`;
