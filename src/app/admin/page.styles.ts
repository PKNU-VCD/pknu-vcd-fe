import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  padding: 100px 28px;
`;

export const TitleContainer = styled.p`
  ${({ theme }) => theme.typography.medium};
`;

export const TextContainer = styled.p`
  ${({ theme }) => theme.typography.regular};
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: min(100%, 480px);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    width: min(100%, 319px);
  }
`;

export const ProjectsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: min(100%, 1055px);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(100%, 700px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    width: min(100%, 319px);
  }
`;

export const ProjectCardContainer = styled.div`
  ${({ theme }) => theme.typography.bold}
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: 2px;
  padding: 14px;
  flex: 1;
`;

export const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}) {
    flex-direction: column;
    gap: 10px;
  }
`;
