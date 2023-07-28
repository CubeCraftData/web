import ReactPaginate, { ReactPaginateProps } from "react-paginate";

import "./Paginate.css";

type PaginateProps = {
    pageCount: number;
    currentPage: number;
    onChange: ReactPaginateProps["onPageChange"];
};

export default function Paginate(props: PaginateProps) {
    return (
        <ReactPaginate
            pageCount={props.pageCount}
            forcePage={props.currentPage}
            onPageChange={props.onChange}
            renderOnZeroPageCount={null}
            pageRangeDisplayed={5}
            nextLabel=">"
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
        />
    );
}