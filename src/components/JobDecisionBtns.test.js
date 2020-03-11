import React from "react";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import ReactTestUtils from "react-dom/test-utils";
import moxios from "moxios";

import JobDecisionBtns from "./JobDecisionBtns";
import { JOB_STATUS, BTN_LABEL } from "../constants";
import * as actions from "../redux/actions";
import actionTypes from "../redux/actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("render decision buttons", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({ user: { workerId: "1" } });

    component = render(
      <Provider store={store}>
        <JobDecisionBtns jobId="1" jobStatus={JOB_STATUS.AVAILABLE} />
      </Provider>
    );

    moxios.install();
  });

  afterEach(() => {
    moxios.install();
  });

  test('should render button with test "I\'ll Take it" for accept button by default"', () => {
    const acceptBtn = component.getByText(BTN_LABEL.DEFAULT_ACCEPT);

    expect(acceptBtn).toBeInTheDocument();
  });

  test("should dispatch accept job action on accept btn click", () => {
    const acceptBtn = component.getByText(BTN_LABEL.DEFAULT_ACCEPT);

    ReactTestUtils.Simulate.click(acceptBtn);

    const expectedActions = [
      {
        type: actionTypes.UPDATE_JOB_STATUS,
        payload: { jobId: "1", newStatus: JOB_STATUS.ACCEPTED }
      }
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { success: true }
      });
    });

    return store
      .dispatch(actions.accpetAJobAsync({ userId: "1", jobId: "1" }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
