import React from "react";
import { useState } from "react";
import Active from './../Active/Active';
import inActive from './../Inactive/Inactive';



export const Main = () => {
    const [blocks, setBlocks] = useState([
        { id: 1, name: '/img1.png', text_h: 'Title 1', text_p: 'Description 1', isActive: true },
        { id: 2, name: '/img2.png', text_h: 'Title 2', text_p: 'Description 2', isActive: false },
        { id: 3, name: '/img3.png', text_h: 'Title 3', text_p: 'Description 3', isActive: true },
      ]);

      const toggleBlock = (id) => {
        setBlocks(prev =>
          prev.map(block =>
            block.id === id ? { ...block, isActive: !block.isActive } : block
          )
        );
      };

}