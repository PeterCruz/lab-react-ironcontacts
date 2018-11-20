import React from 'react';
import Button from "./Button";

const Item = ({item, index, onClick}) => (
    <tr>
        <td><img src={item.pictureUrl} height="100" alt={item.name}/></td>
        <td>{item.name}</td>
        <td>{item.popularity}</td>
        <td><Button onClick={ () => onClick(index) } buttonName='Delete'></Button></td>
    </tr>
);

export default Item;