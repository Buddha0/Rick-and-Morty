export default function Search({ setName , setPageNumber}) {
    return (
        <>
            <form>
                <input placeholder = "Search a character" type="text" onChange={(e) => {
                    setName(e.target.value)
                    setPageNumber(1)
                }
                }></input>
                
            </form>
        </>
    )
}