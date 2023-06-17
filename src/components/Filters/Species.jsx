import { useState } from "react";
export default function Species({ setSpecies }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [show, setShow] = useState(true);
  function toggleContent() {
    setShow(!show);
  }
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <>
      <div className="filter-container">
        <div className="filterByStatus" onClick={(e) => toggleContent(e)}>
          <h1 className="title">Species</h1>
          <span>
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>
        {show && (
          <div className="filterItems">
            {species.map((unique, index) => (
              <p
                className={`filteritems  ${
                  selectedItem === unique ? "selected" : ""
                }`}
                key={index}
                onClick={(e) => {
                    setSpecies(e.target.innerHTML)
                    setSelectedItem(unique)
                    }}>
                {unique}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
