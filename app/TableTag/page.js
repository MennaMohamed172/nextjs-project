"use client"
import React, { useState } from 'react';
import './table.css'; // Import the CSS file

function TableWithButtons() {
  const [items, setItems] = useState([
    { id: 1, title: 'Item 1', subtitle: 'Subtitle 1',description:'description1' },
    { id: 2, title: 'Item 2', subtitle: 'Subtitle 2',description:'description2' },
    // Add more items as needed
  ]);

  const moveToTrash = (id) => {
    // Implement your logic to move the item to trash here
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
// 
const websiteUrl = 'https://mshhor.com/'; // Replace with the URL you want to open.

const openWebsite = () => {
  window.open(websiteUrl, '_blank');
};



  const saveAsDraft = (id) => {
    // Implement your logic to save the item as a draft here
    console.log(`Save as Draft: Item ID ${id}`);
  };

  return (
    <div>
      <table style={{marginLeft:"230px"}} className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Permalink</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.subtitle}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => moveToTrash(item.id)} style={{width:"100px",height:"20px",backgroundColor:"#014F86",color:"white",borderRadius:"5px", cursor: "pointer", border:"1px solid white", }}>Move to Trash</button>
                <button onClick={() => saveAsDraft(item.id)} style={{width:"100px",height:"20px",backgroundColor:"#014F86",color:"white",borderRadius:"5px", cursor: "pointer", border:"1px solid white", }}>Save as Draft</button>
                <button onClick={openWebsite} style={{width:"100px",height:"20px",backgroundColor:"#014F86",color:"white",borderRadius:"5px", cursor: "pointer", border:"1px solid white", }}>Preview</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableWithButtons;

