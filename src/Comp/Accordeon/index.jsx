import React, { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  const handleToggle = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div className="item" key={dataItem.id}>
              <div className="title" onClick={() => handleToggle(index)}>
                <h3>{dataItem.question}</h3>
                <span>{selected === index ? "-" : "+"}</span>
              </div>
              {selected === index && <p>{dataItem.answer}</p>}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
