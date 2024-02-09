import { PageButton, PaginationContainer, ShowingDataInf, WraperLowerBlock } from "./LowerTechnicalBlock.styled";

export default function LowerTechnicalBlock() {
    return (
        <WraperLowerBlock>
            <ShowingDataInf>Showing data 1 to 8 of  256K entries</ShowingDataInf>
            
            <PaginationContainer>
                {[...Array(40).keys()].map((pageNumber) => (
                    <PageButton key={pageNumber + 1} display={(pageNumber < 4 || pageNumber === 39 || pageNumber === 36) ? 'block' : 'none'}>
                    {pageNumber < 4 || pageNumber === 39 ? (pageNumber + 1).toString() : '...'}
                </PageButton>
                               
                ))}
            </PaginationContainer>
        </WraperLowerBlock>
    )
}