import { HeaderActivMembers, HeaderTitle, InputWrapper, SearchInput, SearchSelect, WraperAllCustomers, WraperHeaderInf, WraperHeaderMenuSearch } from "./AllCustomers.styled";
import icons from '../../img/svg/symbol-defs.svg';
import Table from "components/Table/Table";
import LowerTechnicalBlock from "components/LowerTechnicalBlock/LowerTechnicalBlock";

export default function AllCustomers() {
    return (
        <WraperAllCustomers>
            <WraperHeaderInf>
                <div>
                    <HeaderTitle>All Customers</HeaderTitle>
                    <HeaderActivMembers>Active Members</HeaderActivMembers>
                </div>
                <WraperHeaderMenuSearch>
                    <InputWrapper>
                        <svg width={24} height={24} >
                            <use href={`${icons}#icon-search-1`} />
                        </svg>
                        <SearchInput placeholder="Search" />
                    </InputWrapper>

                    <SearchSelect>
                        <option>Short by: Newest</option>              
                    </SearchSelect>

                </WraperHeaderMenuSearch>
            </WraperHeaderInf>

            <Table />

            <LowerTechnicalBlock />
            
        </WraperAllCustomers>
    )
}