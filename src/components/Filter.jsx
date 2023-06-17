import Gender from "./Filters/Gender"
import Status from "./Filters/Status"
import Species from "./Filters/Species"

import Search from "./Search"


export default function Filter({ setName, setPageNumber,  setStatus, toggleContent ,  setGender ,setSpecies}) {

    function clearFilter(){
        setStatus("")
        setGender("")
        setSpecies("")
        window.location.reload(false)
    }
    
    return (
        <>
            <h1 className="title">Filter By</h1>
            <Search setName={setName} setPageNumber={setPageNumber} />
            <div className="clear-filter-btn" onClick={clearFilter}>Clear All Filters <i className="fa-sharp fa-solid fa-trash"></i></div> 
            <Gender toggleContent = {toggleContent}   setGender = {setGender} />
            <Status setStatus = {setStatus} toggleContent = {toggleContent}  />
            <Species  toggleContent = {toggleContent} setSpecies = {setSpecies}/>

        </>
    )
}