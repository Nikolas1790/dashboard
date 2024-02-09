import { AdvertisingGetProNow, AdvertisingGetProNowText, GetProNowButton, IconArrowRightSvg, IconLogo, IconSvg, Logo, LogoPhrase, LogoSpan, NavLi, NavLiActive, NavList,  ProgectManagerName, ProgectManagerPhoto, ProgectManagerPosition, WraperDashboard } from "./Dashboard.styled"
import icons from '../../img/svg/symbol-defs.svg';
import ProgectManager from "components/ProgectManager/ProgectManager";

export default function Dashboard() {
    return (
        <div>
            <WraperDashboard>
              <Logo>
                <IconLogo width={37} height={37} >
                  <use href={`${icons}#icon-setting`} />
                </IconLogo>
                <LogoPhrase>Dashboard<LogoSpan> v.0</LogoSpan></LogoPhrase>
              </Logo>

                <NavList>
                  <NavLi>
                    <IconSvg width={24} height={24} >
                      <use href={`${icons}#icon-key-square`} />
                    </IconSvg>
                    Dashboard
                  </NavLi>  

                  <NavLi>
                    <IconSvg width={24} height={24} >
                      <use href={`${icons}#icon-d-square-1`} />
                    </IconSvg>
                    Product
                    <IconArrowRightSvg width={16} height={16} >
                      <use href={`${icons}#icon-chevron-right-2`} />
                    </IconArrowRightSvg>
                  </NavLi>

                  <NavLiActive>
                    <IconSvg width={24} height={24} >
                      <use href={`${icons}#icon-user-square`} />
                    </IconSvg>
                    Customers
                    <IconArrowRightSvg width={16} height={16} >
                      <use href={`${icons}#icon-chevron-right-2-1`} />
                    </IconArrowRightSvg>
                  </NavLiActive>

                  <NavLi>
                    <IconSvg width={24} height={24} >
                      <use href={`${icons}#icon-List-Menu`} />
                    </IconSvg>
                    Income
                    <IconArrowRightSvg width={16} height={16} >
                      <use href={`${icons}#icon-chevron-right-2`} />
                    </IconArrowRightSvg>
                  </NavLi>

                  <NavLi>
                    <IconSvg width={24} height={24} >
                         <use href={`${icons}#icon-discount-shape-1`} />
                      </IconSvg>
                      Promote
                      <IconArrowRightSvg width={16} height={16} >
                        <use href={`${icons}#icon-chevron-right-2`} />
                    </IconArrowRightSvg>
                  </NavLi>

                  <NavLi>
                    <IconSvg width={24} height={24} >
                      <use href={`${icons}#icon-List-Menu-1`} />
                    </IconSvg>
                    Help
                    <IconArrowRightSvg width={16} height={16} >
                      <use href={`${icons}#icon-chevron-right-2`} />
                    </IconArrowRightSvg>
                  </NavLi>
                </NavList>          
              

                <AdvertisingGetProNow>
                  <AdvertisingGetProNowText>Upgrade to  PRO to get access all Features!</AdvertisingGetProNowText>
                  <GetProNowButton>Get Pro Now!</GetProNowButton>
                </AdvertisingGetProNow>

                <ProgectManager />
            
             </WraperDashboard>
        </div>
    )
}