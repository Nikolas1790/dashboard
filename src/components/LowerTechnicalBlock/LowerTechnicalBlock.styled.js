import styled from 'styled-components'

export const WraperLowerBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
`;

export const ShowingDataInf = styled.p`    
    font-weight: 500;
    color: rgb(181, 183, 192);
    margin-right: auto;
`;

export const PaginationContainer = styled.div`
    display: flex;
`;

export const PageButton = styled.button`
    width: 25px;
    height: 24px;
    margin: 0 12px;
    cursor: pointer;
    outline: none;
    border-radius: 4px;
    display: ${({ display }) => display};
`;