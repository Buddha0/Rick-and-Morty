import ReactPaginate from 'react-paginate';

export default function PageNumber({  setPageNumber ,pagination   }) {

    return (

        <>

        
                <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    pageCount={pagination?.pages} 
                    marginPagesDisplayed={1} // Set the number of pages displayed at the beginning and end
                    pageRangeDisplayed={3} // Set the number of pages displayed in the middle
                    containerclassName={"pagination"}
                    previousLinkclassName={"pagination__link"}
                    nextLinkclassName={"pagination__link"}
                    disabledclassName={"pagination__link--disabled"}
                    activeclassName={"pagination__link--active"}
                    onPageChange={(data)=>setPageNumber(data.selected + 1)}
                  
                />
         
        </>
    )
}