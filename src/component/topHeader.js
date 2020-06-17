import React from "react";

export default function Topheader() {
  return (
    <div className="top_header flex">
      <div className="logo">
        <h1>gizmo</h1>
      </div>
      <div className="search_bar">
        <input type="text" placeholder="search keyword"></input>
        <select id="country" name="country">
          <option value="australia">Australia</option>
        </select>
      </div>
    </div>
  );
}
