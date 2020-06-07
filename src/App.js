import React, { useState } from "react";
import "./App.css";
import PropTypes from 'prop-types';

const TabBlock = ({tabData}) => {
  const [idSelected, setIdSelected] = useState(null);

  const isActive = (itemIndex, id) => {
    if (idSelected === null) { // Initial state
      return itemIndex === 0;
    } else {
      return id === idSelected;
    }
  }

  const renderTab = (item, index) => (
    <div
      className={`list-group-item ${isActive(index, item.id) ? "active" : ""}`}
      key={item.id}
      onClick={() => setIdSelected(item.id)}
    >
      {item.headline}
    </div>
  );

  const renderTabs = tabData => {
    return (
      <div
        className="list-group list-group-horizontal styling-for-scrollmenu"
        id="list-tab"
      >
        {tabData.map(renderTab)}
      </div>
    );
  };

  const renderPanels = tabData => {
    return <div className="tab-content">{tabData.map(renderPanel)}</div>;
  };

  const renderPanel = (item, index) => {
    if (isActive(index, item.id)) {
      return (
        <div
          className="tab-pane active"
          key={item.id}
        >
          <div>{item.blurb}</div>
          {renderPhoto(item.image)}
        </div>
      )
    } else {
      return null;
    }
  };

  const renderPhoto = image => {
    if (image) {
      return (
        <img src={image} className="padding img-fluid" alt="Illustration" />
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


