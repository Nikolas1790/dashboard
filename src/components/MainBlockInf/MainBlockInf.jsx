import SummaryInformation from 'components/SummaryInformation/SummaryInformation';
import icons from '../../img/svg/symbol-defs.svg';

import { GreetingsBlock, InputWrapper,  SearchInput, TextGreetings, WraperBlock, WraperMainBlock } from "./MainBlockInf.styled"
import AllCustomers from 'components/AllCustomers/AllCustomers';

export default function MainBlockInf() {
    return (
        <WraperBlock>
            <WraperMainBlock>
                <GreetingsBlock>
                    <TextGreetings>Hello Evano 👋🏼,</TextGreetings>
                    <InputWrapper>
                        <svg width={24} height={24} >
                            <use href={`${icons}#icon-search-1`} />
                        </svg>
                        <SearchInput placeholder="Search" />
                    </InputWrapper>
                </GreetingsBlock>

                <SummaryInformation />
                
                <AllCustomers />
                
           </WraperMainBlock>
        </WraperBlock>
    )
}