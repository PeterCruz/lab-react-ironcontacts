import React from 'react';

const Button = ({buttonName, onClick}) => (
    <button onClick={ () => onClick() }>{buttonName}</button>
);

export default Button;