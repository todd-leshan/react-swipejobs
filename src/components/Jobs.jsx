import React from "react";
import { connect } from "react-redux";

import { formatJobData } from "../utils/helpers";

import Job from "./Job";

const mapStateToProps = state => ({
  showLoadingOverlay: state.showLoadingOverlay,
  areJobsLoaded: state.areJobsLoaded,
  jobs: state.jobs
});

const Jobs = props => {
  return (
    <div className="jobs">
      {props.jobs.map(jobData => {
        const jobDataFormmatted = formatJobData(jobData);
        return <Job key={jobData.jobId} jobData={jobDataFormmatted} />;
      })}
    </div>
  );
};

export default connect(mapStateToProps)(Jobs);
