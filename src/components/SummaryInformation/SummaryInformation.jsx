import icons from '../../img/svg/symbol-defs.svg';
import user1 from '../../img/activeMembers/user1.jpg';
import user2 from '../../img/activeMembers/user2.jpg';
import user3 from '../../img/activeMembers/user3.jpg';
import user4 from '../../img/activeMembers/user4.jpg';
import user5 from '../../img/activeMembers/user5.jpg';
import { NumberOfPeopl, PercentagePerMonth, PercentagePerMonthDown, PercentagePerMonthText, RightBar, SectionContents, UserPhoto, WraperConteinerActiveNow, WraperConteinerActiveNowImg, WraperConteinerMembers, WraperConteinerTotalCustomers, WraperConteinersImg, WraperConteinersPercentage, WraperSummaryInf} from "./SummaryInformation.styled";

export default function SummaryInformation() {
    const arrPhotoUsers =[
        { src: user1, alt: 'User Photo 1' },
        { src: user2, alt: 'User Photo 2' },
        { src: user3, alt: 'User Photo 3' },
        { src: user4, alt: 'User Photo 4' },
        { src: user5, alt: 'User Photo 5' },
    ]

    return (
        <WraperSummaryInf>
            <WraperConteinerTotalCustomers>
                <WraperConteinersImg>
                    <svg width={42} height={42} >
                        <use href={`${icons}#icon-profile-2user`} />
                    </svg>
                </WraperConteinersImg>
                <div>
                    <SectionContents>Total Customers</SectionContents>
                    <NumberOfPeopl>5,423</NumberOfPeopl>
                    <WraperConteinersPercentage>
                        <svg width={20} height={20} >
                            <use href={`${icons}#icon-arrow-up-1`} />
                        </svg>
                        <PercentagePerMonthText>
                            <PercentagePerMonth>16% </PercentagePerMonth>this month
                        </PercentagePerMonthText>                        
                    </WraperConteinersPercentage>
                </div>
            </WraperConteinerTotalCustomers>

            <RightBar />

            <WraperConteinerMembers>
                <WraperConteinersImg>
                    <svg width={42} height={42} >
                        <use href={`${icons}#icon-vuesax_linear_profile-tick`} />
                    </svg>
                </WraperConteinersImg>
                <div>
                    <SectionContents>Members</SectionContents>
                    <NumberOfPeopl>1,893</NumberOfPeopl>
                    <WraperConteinersPercentage>
                        <svg width={20} height={20} >
                            <use href={`${icons}#icon-arrow-down-1`} />
                        </svg>
                        <PercentagePerMonthText>
                            <PercentagePerMonthDown>1% </PercentagePerMonthDown>this month
                        </PercentagePerMonthText>                        
                    </WraperConteinersPercentage>
                </div>
            </WraperConteinerMembers>

            <RightBar />

            <WraperConteinerActiveNow>
                <WraperConteinersImg>
                    {/* оставил пока без тени, замало часу було */}
                    <svg width={42} height={42} >
                        <use href={`${icons}#icon-monitor`} />
                    </svg>
                </WraperConteinersImg>
                <div>
                    <SectionContents>Active Now</SectionContents>
                    <NumberOfPeopl>189</NumberOfPeopl>
                    <WraperConteinerActiveNowImg>
                        {arrPhotoUsers.map((user, index) => (
                            <UserPhoto
                                key={index}
                                src={user.src}
                                alt={user.alt}
                            />
                        ))}
                    </WraperConteinerActiveNowImg>
                </div>
            </WraperConteinerActiveNow>


        </WraperSummaryInf>
    )
}