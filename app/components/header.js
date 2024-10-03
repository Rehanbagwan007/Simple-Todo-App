"use client"
import React from "react";
import { useState } from "react";


const Header = () => {
  const [value, setValue] = useState(true);

  const handleThemeChange = () => {
    const root = document.documentElement;
    const buttonOnChange = document.querySelector('.Theme');

    if (value) {
      root.style.setProperty('--background', 'white');
      buttonOnChange.style.color = 'black';
    } else {
      root.style.setProperty('--background', '#111');
      buttonOnChange.style.color = 'white';
    }
    setValue(!value);
  };

  return (
    <div className="adress">
      <h3>Todo List App</h3>
      <button className="Theme" onClick={handleThemeChange}>
        {value ? 'White' : 'Dark'}
      </button>
    </div>
  );
};

export default Header;
