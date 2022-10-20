import React from "react";
import brandRecognitionIcon from "../images/icon-brand-recognition.svg";
import detailedRecordsIcon from "../images/icon-detailed-records.svg";
import fullyCustomizableIcon from "../images/icon-fully-customizable.svg";

function Info() {
  return (
    <section className="info">
      <div className="overview">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="info-items">
        <div className="info-item">
          <div className="icon">
            <img src={brandRecognitionIcon} alt="chart" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="info-item">
          <div className="icon">
            <img src={detailedRecordsIcon} alt="compass" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="info-item">
          <div className="icon">
            <img src={fullyCustomizableIcon} alt="paintbrushes" />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Info;
