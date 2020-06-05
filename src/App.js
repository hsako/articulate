import React from "react";
import "./App.css";
import data from "./data.json";

export default function App() {
  const renderTab = (item, index) => (
    <div
      className={`list-group-item ${index === 0 ? "active" : ""}`}
      key={item.id}
      id={`list-${item.id}-list`}
      data-toggle="list"
      href={`#list-${item.id}`}
      role="tab"
      aria-controls={item.headline}
    >
      {item.headline}
    </div>
  );

  const renderTabs = () => {
    return (
      <div
        className="list-group list-group-horizontal styling-for-scrollmenu"
        id="list-tab"
        role="tablist"
      >
        {data.map(renderTab)}
      </div>
    );
  };

  const renderPanels = () => {
    return <div className="tab-content">{data.map(renderPanel)}</div>;
  };

  const renderPanel = (item, index) => (
    <div
      className={`tab-pane ${index === 0 ? "active" : ""}`}
      id={`list-${item.id}`}
      role="tabpanel"
      aria-controls={item.string}
    >
      <div>{item.string}</div>
      {renderPhoto(item.image)}
    </div>
  );

  const renderPhoto = image => {
    if (image) {
      return (
        <img src={image} className="padding img-fluid" alt="Responsive image" />
      );
    }
  };

  return (
    <div>
      <h1 className="styling-for-header">Articulate Assignment</h1>
      <div className="container styling-for-container">
        <div className="styling-for-tab">{renderTabs()}</div>
        <div className="padding">{renderPanels()}</div>
      </div>
    </div>
  );
}
