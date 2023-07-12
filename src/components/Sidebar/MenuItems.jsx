import React, { useState } from "react";
import menuItems from "./items";

function MenuItems() {
  const [selected, setSelected] = useState(1);
  const itemsCount = menuItems.length;

  // Render elements
  const renderItems = menuItems.map((item) => (
    <li key={item.id} className={selected === item.id ? "active" : ""}>
      <i className={item.icon}></i>
      {item.title}
    </li>
  ));

  // Styles & Classes
  const gridStyle = {
    gridTemplateRows: "1fr ".repeat(itemsCount).trim(),
  };

  const dummyStyle = {
    gridTemplateRows: `${selected * 50}px 50px`,
  };

  return (
    <div className="menu-items-wrapper" style={gridStyle}>
      <div className="selector-wrapper" style={dummyStyle}>
        <div className="selector-dummy"></div>
        <div className="selector"></div>
      </div>
      <ul>{renderItems}</ul>
    </div>
  );
}

export default MenuItems;
