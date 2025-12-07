import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import './ContentStyle.css'

import devlens from './../browser-extensions-manager-ui-main/assets/images/logo-devlens.svg';
import spy from './../browser-extensions-manager-ui-main/assets/images/logo-style-spy.svg';
import boost from './../browser-extensions-manager-ui-main/assets/images/logo-speed-boost.svg';
import wizard from './../browser-extensions-manager-ui-main/assets/images/logo-json-wizard.svg';
import master_pro from './../browser-extensions-manager-ui-main/assets/images/logo-tab-master-pro.svg';
import buddy from './../browser-extensions-manager-ui-main/assets/images/logo-viewport-buddy.svg';
import notes from './../browser-extensions-manager-ui-main/assets/images/logo-markup-notes.svg';
import guides from './../browser-extensions-manager-ui-main/assets/images/logo-grid-guides.svg';
import picker from './../browser-extensions-manager-ui-main/assets/images/logo-palette-picker.svg';
import checker from './../browser-extensions-manager-ui-main/assets/images/logo-link-checker.svg';
import dom from './../browser-extensions-manager-ui-main/assets/images/logo-dom-snapshot.svg';
import plus from './../browser-extensions-manager-ui-main/assets/images/logo-console-plus.svg';
import { Button } from 'bootstrap';
import { ListItems } from './Items/ListItems';



export const Content = (props) => {
  const [items, setItems] = useState([
        {id: 'devlens',  name: devlens, text_h: 'DevLens', text_p: 'Quickly inspect page layouts and visualize element boundaries.', completed: false},
       { id: 'spy', name: spy, text_h: 'StyleSpy', text_p:'Instantly analyze and copy CSS from any webpage element.', completed: false},
       { id: 'boost', name: boost, text_h: 'SpeedBoost', text_p:'Optimizes browser resource usage to accelerate page loading.', completed: false},
       { id: 'wizard', name: wizard, text_h: 'JSONWizard', text_p : 'Formats, validates, and prettifies JSON responses in-browser.', completed: false },
       { id: 'master_pro', name: master_pro, text_h:'TabMaster Pro', text_p:'Organizes browser tabs into groups and sessions', completed: false },
       { id: 'buddy', name:buddy, text_h: 'ViewportBuddy', text_p:'Simulates various screen resolutions directly within the browser.', completed: false },
       { id: 'notes', name: notes, text_h: 'Markup Notes', text_p : 'Enables annotation and notes directly onto webpages for collaborative debugging.' , completed: false},
       { id: 'guides', name: guides, text_h: 'GridGuides', text_p:'Overlay customizable grids and alignment guides on any webpage.', completed: false},
       { id: 'picker', name:picker,  text_h: 'Palette Picker', text_p:'Instantly extracts color palettes from any webpage.', completed: false},
       {id: 'checker', name: checker, text_h: 'LinkChecker', text_p : 'Scans and highlights broken links on any page.', completed: false},
       { id: 'dom', name: dom, text_h: 'DOM Snapshot', text_p:'Capture and export DOM structures quickly.', completed: false},
       { id: 'plus', name:plus, text_h: 'ConsolePlus', text_p:'Enhanced developer console with advanced filtering and logging.', completed: false}
  ]);
  const [filter, setFilter] = useState('All');




  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  
  const doneItems = (id) => {
    setItems(items.map((item) => 
    item.id === id ? {...item, completed: !item.completed} : item
    ));
  } 

  const filteredItems = items.filter((item) =>{
    if (filter === 'completed') return item.completed;
    if (filter === 'not-completed') return !item.completed;
    return true;
  })

  return (
    <div>
    <div className="container  mt-5 pb-5 mt-5">
      <div className="row align-items-center justify-content-center d-flex">

         <div className="navbar mt-5 mx-5 justify-content-between">
            <h1 className='float-start h1_E'>Extensions List</h1>
            <ul className="nav-links">
                <li className='me-2'>
                    <button
                        className={({ isActive }) => isActive ? " nav-link active rounded-4 p-1 px-3" : " rounded-4 p-1 px-3"} 
                        onClick={() => setFilter('All')}
                        >
                        All
                    </button>
                </li>
                <li className='me-2'>
                    <button 
                        className={({ isActive }) => isActive ? "nav-link active rounded-4 p-1 px-3" : "nav-link rounded-4 p-1 px-3"} 
                        onClick={() => setFilter('completed')}
                       >
                        Active
                    </button>
                </li>
                <li className='me-2'>
                    <button 
                        className={({ isActive }) => isActive ? "nav-link active rounded-4 p-1 px-3" : "nav-link rounded-4 p-1 px-3"} 
                        onClick = {() => setFilter('not-completed')}>
                        Inactive
                    </button>
                </li>
            </ul>
        </div>
    <ListItems 
    doneItems={doneItems}
    items={filteredItems}
    removeItem = {removeItem}
    />
        
      </div>
    </div>
    </div>
  );
  
};


