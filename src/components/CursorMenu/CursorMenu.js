import React from 'react';


const CursorMenu = ({options = [], onSelect}) => {
    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
};

export default CursorMenu;