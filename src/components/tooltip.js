import React, { useState } from 'react';
import '../style/tooltip.css'; // Create a CSS file for styling

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="tooltip-container">
      <div
        className="tooltip-trigger blueText underline"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
      {showTooltip && <div className="tooltip-text">{text}</div>}
    </div>
  );
};

export default Tooltip;