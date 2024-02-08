import styled from 'styled-components'
import color from 'common/GlobalColers';

export const WraperDashboard = styled.div`
    width: 306px;
    height: 1198px;
    padding: 36px 28px 76px 28px;
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 64px;


`
export const LogoPhrase = styled.div`

    font-size: 26px;
    font-weight: 600;
    

`

export const LogoSpan = styled.span`

    font-size: 10px;
    font-weight: 500;
    color: ${color.secondaryGray};

`


export const IconLogo = styled.svg`
    margin-right: 8px;
`
////////////////////////////////////////
export const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom:400px;
`

export const NavLi = styled.li`
    display: flex;
    align-items: center;
    color: ${color.secondaryGray};

`
export const NavLiActive = styled.li`
    display: flex;
    align-items: center;
    color: ${color.whitePrimary};
    background:  ${color.lightBlue};
    border-radius: 8px;
    padding: 11px;
    box-sizing: border-box;

`

export const IconSvg = styled.svg`
    margin-right: 14px;
`

export const IconArrowRightSvg = styled.svg`
    margin-left: auto;
`
////////////////////////////////
export const AdvertisingGetProNow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 250px;
    height: 150px;
    padding: 26px 23px 22px 24px;
    border-radius: 20px;
    background: blue;

    margin-bottom: 46px;

`

export const AdvertisingGetProNowText = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;
    width: 183px;

    font-weight: 600;
   

    text-align: center; 
    color: ${color.whitePrimary};
`

/////////// button /////

export const GetProNowButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;
    /* width: 203px; */
    /* height: 40px; */
    padding: 10px 55px;
    font-weight: 600;
    border-radius: 20px;

    text-align: center; 
    color: ${color.durckBlue};
`

//////////////////////////////

export const ProgectManager = styled.div`
    display: flex;
    align-items: center;
`

export const ProgectManagerPhoto = styled.img`
    width: 42px;
    height: 42px;
    margin-right: 12px;
`

export const ProgectManagerName = styled.h3`
    font-size: 14px;
    font-weight: 500;
`

export const ProgectManagerPosition = styled.p`
    font-size: 12px;
    color: ${color.greyTextColor};
`