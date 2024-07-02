import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem, PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "./ui/pagination.tsx";

const PaginationComponent = () => {
    return (
        <div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" size={undefined}/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" size={undefined}>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" size={undefined}/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

        </div>
    );
};

export default PaginationComponent;
