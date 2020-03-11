import React from "react";
import { connect } from "react-redux";

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
        return <Job key={jobData.id} jobData={jobData} />;
      })}
    </div>
  );
};

export default connect(mapStateToProps)(Jobs);
