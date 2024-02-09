import styled from 'styled-components'

export const TableHeader = styled.thead`    
    position: relative;
    padding-bottom: 113px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px; 
        background-color: rgb(238, 238, 238); 
    }
`;

export const TableCell = styled.th`
    font-weight: 500;
    text-align: left;
    padding-bottom: 13px;    
    margin-bottom: 13px;
    color: rgb(181, 183, 192);
  
`

export const TableString = styled.tr`
    position: relative;

    font-weight: 500;
    width:69px;
    padding: 20px 0;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px; 
        background-color: rgb(238, 238, 238); 
    }
`

export const TableData = styled.td`
    font-weight: 600px;
    color: rgb(41, 45, 50);
    padding: 23px 0;
`;

export const TableDataStatus = styled.td`
    display: flex;
    align-items: center;
    justify-content:center;
    width:80px;
    height: 29px;
    font-weight: 600px;
    margin-top: 14px;
    border-radius: 4px; 
    color: ${({ status }) => (status === 'Active' ? 'rgb(0, 135, 103)' : 'rgb(223, 4, 4)')};
    background: ${({ status }) => (status === 'Active' ? 'rgba(22, 192, 152, 0.38)' : 'rgb(255, 197, 197)')};
    border: 1px solid ${({ status }) => (status === 'Active' ? 'rgb(0, 135, 103)' : 'rgb(223, 4, 4)')};
`;