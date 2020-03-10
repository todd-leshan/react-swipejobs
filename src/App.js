import React from "react";
import isEmpty from "lodash/isEmpty";
import "./App.scss";

import { connect } from "react-redux";
import { getUserByIdAsync, getJobsByIdAsync } from "./redux/actions";

import { JOBS_LOADING_STATUS } from "./constants";
import LoadingOverlay from "./components/global/LoadingOverlay";
import Error from "./components/global/Error";
import Header from "./components/global/Header";
import Jobs from "./components/Jobs";

const mapStateToProps = state => ({
  showLoadingOverlay: state.showLoadingOverlay,
  jobsLoadingStatus: state.jobsLoadingStatus,
  jobs: state.jobs
});

const mapDispatchToProps = dispatch => ({
  getUserByIdAsync: ({ userId }) => dispatch(getUserByIdAsync({ userId })),
  getJobsByIdAsync: ({ userId }) => dispatch(getJobsByIdAsync({ userId }))
});

const userId = "7f90df6e-b832-44e2-b624-3143d428001f";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.info(this.props);
  // }

  componentDidMount() {
    if (isEmpty(this.props.user)) {
      this.props.getUserByIdAsync({ userId });
    }

    if (this.props.jobs.length === 0) {
      this.props.getJobsByIdAsync({ userId });
    }
  }

  render() {
    const { jobsLoadingStatus } = this.props;
    return (
      <>
        <Header />
        <main>
          {jobsLoadingStatus === JOBS_LOADING_STATUS.LOADING && (
            <LoadingOverlay />
          )}

          {jobsLoadingStatus === JOBS_LOADING_STATUS.LOADED && <Jobs />}

          {jobsLoadingStatus === JOBS_LOADING_STATUS.LOADFAILED && (
            <Error errorMsg="Failed to load jobs. Please try again later." />
          )}
        </main>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
