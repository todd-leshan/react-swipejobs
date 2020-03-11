import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { accpetAJobAsync, rejectAJobAsync } from "../redux/actions";
import { JOB_STATUS, BTN_LABEL } from "../constants";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  accpetAJobAsync: ({ userId, jobId }) =>
    dispatch(accpetAJobAsync({ userId, jobId })),
  rejectAJobAsync: ({ userId, jobId }) =>
    dispatch(rejectAJobAsync({ userId, jobId }))
});

const JobDecisionBtns = props => {
  const { workerId } = props.user;
  const { jobId, jobStatus, accpetAJobAsync, rejectAJobAsync } = props;

  const onAccept = () => {
    accpetAJobAsync({ userId: workerId, jobId });
  };

  const onReject = () => {
    rejectAJobAsync({ userId: workerId, jobId });
  };

  const acceptBtnText =
    jobStatus === JOB_STATUS.NOTAVAILABLE
      ? BTN_LABEL.NOT_AVAILABLE
      : jobStatus === JOB_STATUS.ACCEPTED
      ? BTN_LABEL.ACCEPTED
      : BTN_LABEL.DEFAULT_ACCEPT;

  const rejectBtnText =
    jobStatus === JOB_STATUS.NOTAVAILABLE
      ? BTN_LABEL.NOT_AVAILABLE
      : jobStatus === JOB_STATUS.REJECTED
      ? BTN_LABEL.REJECTED
      : BTN_LABEL.DEFAULT_REJECT;

  return (
    <div className="decision-btns">
      <button
        className="btn btn--white"
        type="button"
        disabled={
          jobStatus === JOB_STATUS.REJECTED ||
          jobStatus === JOB_STATUS.NOTAVAILABLE
        }
        onClick={onReject}
      >
        {rejectBtnText}
      </button>
      <button
        className="btn btn--black"
        type="button"
        disabled={
          jobStatus === JOB_STATUS.ACCEPTED ||
          jobStatus === JOB_STATUS.NOTAVAILABLE
        }
        onClick={onAccept}
      >
        {acceptBtnText}
      </button>
    </div>
  );
};

JobDecisionBtns.propTypes = {
  jobId: PropTypes.string.isRequired,
  jobStatus: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDecisionBtns);
