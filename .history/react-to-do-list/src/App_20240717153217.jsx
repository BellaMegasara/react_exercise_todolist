import { useState } from "react"
import "./styles.css"


export default function App() {
  const [newItem, setNewItem] = useState("")
  setNewItem("")
  return (
  <>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New item</label>
      <input value={newItem} onChange={e =>} id="item" />
    </div>
    <button className="btn">Add</button>
    </form>
    <h1 className="header">To-Do List</h1>
    <ul className="list">
      <li>
        <label>
          <input type="checkbox" />
          item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          item 2 
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>   
    </ul>
    </>
    )
}
