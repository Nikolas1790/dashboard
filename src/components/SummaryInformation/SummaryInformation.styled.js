import color from 'common/GlobalColers'
import styled from 'styled-components'

export const WraperSummaryInf = styled.div`
    display: flex;
    width: 968px;
    height: 151px;
    border-radius: 30px;
    background: ${color.whitePrimary};
    padding: 31px 50px 33px 50px;
    overflow: visible;
    margin-bottom: 40px;
`
export const WraperConteinerTotalCustomers = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 218px;
    height: 84px;
    margin-right: 55px;
`

export const WraperConteinersImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 84px;
    height: 84px;

    border-radius: 50%;
    background: linear-gradient(to top left, rgb(239, 255, 246), rgb(211, 255, 231));
`

export const SectionContents = styled.h4`
    font-weight: 400;
    font-size: 14px;
    color: ${color.greyColor};
    margin-bottom: 4px;
`

export const NumberOfPeopl = styled.p`
    font-weight: 600;
    font-size: 32px;
    color: rgb(51, 51, 51);
    margin-bottom: 6px;
`

export const WraperConteinersPercentage = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`

export const PercentagePerMonthText = styled.p`  
    font-size: 12px;
    color: rgb(41, 45, 50);
`

export const PercentagePerMonth = styled.span`
    color: ${color.lightGreen};
`

export const RightBar = styled.div`
    top: 0;
    right: 0;
    width: 1px; 
    height: 100%;
    background-color: rgb(240, 240, 240);
    margin-right: 55px;
`;


export const WraperConteinerMembers = styled.div`
    display: flex;
    align-items: center;
    gap: 19px;
    width: 208px;
    height: 84px;
    margin-right: 55px;
`

export const PercentagePerMonthDown = styled.span`
    color: ${color.redPrimeori};
`

export const WraperConteinerActiveNow = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 180px;
    height: 84px;
    margin-right: 55px;
`

export const WraperConteinerActiveNowImg = styled.div`
    display: flex;
    align-items: center;
`

export const UserPhoto = styled.img`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  margin-left: -10%; 
`;