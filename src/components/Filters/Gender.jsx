import { useState } from "react"
export default function Gender({ setGender }) {
    const [show, setShow] = useState(true)
    const [selectedItem, setSelectedItem] = useState(null);
    function toggleContent() {
        setShow(!show)
    }
    let genders = ["female", "male", "genderless", "unknown"]
    return (
        <>
            <div className="filter-container" >
                <div className="filterByStatus" onClick={(e) => toggleContent(e)}>
                    <h1 className="title">Gender</h1>
                    <span><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                {show && <div className="filterItems">
                    {genders.map((unique, index) => <p 
                    className={`filteritems  ${selectedItem === unique ? 'selected' : ''}`}
                     key={index}
                     onClick={(e) => {
                        setGender(e.target.innerHTML)
                        setSelectedItem(unique)
                        }}>{unique}</p>)}
                </div>}
            </div>
        </>
    )
}