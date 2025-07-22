'use client';

import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
`;

export const Title = styled.div`
  ${({ theme }) => theme.typography.bold}
  color: ${({ theme }) => theme.colors.pink};
  background-color: ${({ theme }) => theme.colors.lightPink};
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.stroke};
`;

export const Description = styled.div`
  ${({ theme }) => theme.typography.regular}
  color: ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.green};
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.lightYellow};
`;
