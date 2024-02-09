import color from 'common/GlobalColers'
import styled from 'styled-components'

export const WraperAllCustomers = styled.div`
    display: flex;
    flex-direction: column;
    width: 968px;
    height: 812px;
    border-radius: 30px;
    background: ${color.whitePrimary};
    padding: 30px 44px 40px 38px; 
  
`

export const WraperHeaderInf = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 866px;
    height: 61px;   
    margin-bottom: 40px;
`

export const HeaderTitle = styled.h2`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 7px;
`
export const HeaderActivMembers = styled.p`
    color: rgb(22, 192, 152);
`

export const WraperHeaderMenuSearch = styled.div`
    display: flex;

`
export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgb(249, 251, 255);
    border-radius: 10px;
    padding: 7px 8px;
    width: 216px;
    height: 38px;
`

export const SearchInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
`

export const SearchSelect = styled.select`
    border: none;
    outline: none;
    width: 154px;
    height: 38px;
    font-weight: 600;
    font-size: 12px;
    color: rgb(126, 126, 126);
    background: rgb(249, 251, 255);
    border-radius: 10px; 

`

// export const SearchSelectChapter = styled.span`
//     color: red;
    

// `