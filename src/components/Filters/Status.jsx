import { useState } from "react";
export default function Status({ setStatus }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [show, setShow] = useState(true);
  function toggleContent() {
    setShow(!show);
  }
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <>
      <div className="filter-container">
        <div className="filterByStatus" onClick={(e) => toggleContent(e)}>
          <h1 className="title">Status</h1>
          <span>
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>
        {show && (
          <div className="filterItems">
            {status.map((unique, index) => (
              <p
                className={`filteritems  ${
                  selectedItem === unique ? "selected" : ""
                }`}
                key={index}
                onClick={(e) => {
                    setStatus(e.target.innerHTML)
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
