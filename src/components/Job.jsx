import React from "react";
import PropTypes from "prop-types";

const Job = props => {
  const {
    title,
    image,
    companyName,
    location,
    requirements,
    reportToName,
    reportToPhone,
    distanceToTravel,
    hourlyRate,
    shifts
  } = props.jobData;

  console.info(props);
  return (
    <div className="job">
      <div className="job__img">
        <img src={image} alt="" />
      </div>
      <div className="job__content">
        <h2 className="job__title">{title}</h2>
        {companyName && <div className="job__company">{companyName}</div>}

        <div className="job__highlight">
          <div className="job__highlight--left">
            <span className="label">Distance</span>
            <span className="value">
              {distanceToTravel ? `${distanceToTravel} miles` : "N/A"}
            </span>
          </div>
          <div className="job__highlight--right">
            <span className="label">Hourly Rate</span>
            <span className="value">{hourlyRate}</span>
          </div>
        </div>

        <div className="job__details">
          <div className="job__detail shift-dates">
            <h4>shift dates</h4>
            <ul>
              {shifts.map((shift, index) => (
                <li key={index}>{shift}</li>
              ))}
            </ul>
          </div>

          <div className="job__detail location">
            <h4>Location</h4>
            <p>{location}</p>
            <span>
              {distanceToTravel
                ? `${distanceToTravel} miles from your job search location`
                : "N/A"}
            </span>
          </div>

          {requirements && (
            <div className="job__detail requirements">
              <h4>Requirements</h4>
              <ul>
                {requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
          )}

          {reportToName && (
            <div className="job__detail report-to">
              <h4>report to</h4>
              <p>
                {reportToName} {reportToPhone}
              </p>
            </div>
          )}
        </div>
        <div className="decision-btns">
          <button className="btn btn--white" type="button">
            No Thanks
          </button>
          <button className="btn btn--black" type="button">
            I'll Take it
          </button>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  jobData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    companyName: PropTypes.string,
    location: PropTypes.string,
    requirements: PropTypes.arrayOf(PropTypes.string),
    reportToName: PropTypes.string,
    reportToPhone: PropTypes.string,
    distanceToTravel: PropTypes.string,
    hourlyRate: PropTypes.string,
    shifts: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

Job.defaultProps = {
  jobData: {
    location: "N/A",
    requirements: [],
    hourlyRate: "N/A",
    shifts: []
  }
};

export default Job;
