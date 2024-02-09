import styled from 'styled-components'
import color from 'common/GlobalColers';

export const WraperBlock = styled.div`
    padding: 40px 95px 78px 71px;
    background: ${color.fonColor};
`

export const WraperMainBlock = styled.div`
    width: 961px;
`

export const GreetingsBlock = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 40px;
`

export const TextGreetings = styled.p`
    font-size: 24px;
    font-weight: 500;
`

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    background: ${color.whitePrimary};
    border-radius: 12px;
    padding: 7px 8px;
    width: 216px;
    height: 38px;
`

export const SearchInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    background: transparent;
`
