import React from "react";
import "./App.css";
import PropTypes from 'prop-types';

const TabBlock = ({tabData}) => {
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

  const renderTabs = tabData => {
    return (
      <div
        className="list-group list-group-horizontal styling-for-scrollmenu"
        id="list-tab"
        role="tablist"
      >
        {tabData.map(renderTab)}
      </div>
    );
  };

  const renderPanels = tabData => {
    return <div className="tab-content">{tabData.map(renderPanel)}</div>;
  };

  const renderPanel = (item, index) => (
    <div
      className={`tab-pane ${index === 0 ? "active" : ""}`}
      key={item.id}
      id={`list-${item.id}`}
      role="tabpanel"
      aria-controls={item.blurb}
    >
      <div>{item.blurb}</div>
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
        <div className="styling-for-tab">{renderTabs(tabData)}</div>
        <div className="padding">{renderPanels(tabData)}</div>
      </div>
    </div>
    );
};

TabBlock.propTypes = {
  tabData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      headline: PropTypes.string.isRequired,
      blurb: PropTypes.string.isRequired,
      image: PropTypes.string
    })
  ).isRequired,

}


export default TabBlock;


