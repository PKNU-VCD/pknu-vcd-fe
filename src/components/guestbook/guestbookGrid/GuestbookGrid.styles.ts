import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    overflow: auto;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`;