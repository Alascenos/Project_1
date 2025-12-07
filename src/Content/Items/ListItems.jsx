import React from "react";
import { Item } from "./Item";


export const ListItems = ({doneItems, items, removeItem}) => {
    return(
        <>
        {items.map((item) =>(
             <Item 
                key={item.id}
                id={item.id}
                name={item.name}
                text_h ={item.text_h}
                text_p={item.text_p}
                removeItem={removeItem}
                item={item}
                doneItems = {doneItems}
            />
        ))}
         </>
    );
}