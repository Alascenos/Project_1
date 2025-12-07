import React from 'react';
import './Item_Style.css';


export const Item = ({name, text_h, text_p, id, removeItem, item, doneItems}) => {


  return (
    <div className="rounded-4 col-md-3 col-xs-12 item m-1 mx-1">
        <div className = ' d-flex align-items-start mt-3'>
            <img className= 'me-2' src= {name}  alt="" />
            <div  className = ' top-0 start-0 text-start'>
                <h2 className='d-flex fs-5'>{text_h}</h2>
                <p className=''>{text_p}</p>
            </div>
        </div>
        <div>
        <div className = 'start-0 mb-3 mt-4 justify-content-between align-items-center d-flex '>
            <button
             type="button"
              className="btn rounded-5 btn-dark"
              onClick={ () => removeItem(item.id)}
              >Remove</button>
            <div className="form-check form-switch ">
                <input
                 className={`form-check-input ${item.completed ? 'switch-active' : ''}`}
                type="checkbox"
                role="switch"
                id = {`switch-${id}`}
                 checked={item.completed}   
                onClick={() => doneItems(id)}
                />
         
            </div>
        </div>
        </div>

    </div>
  );
};