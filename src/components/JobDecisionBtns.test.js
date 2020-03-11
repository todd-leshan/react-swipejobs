import React from "react";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import JobDecisionBtns from "./JobDecisionBtns";
import { JOB_STATUS, BTN_LABEL } from "../constants";

const mockStore = configureMockStore();

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
  });

  test('should render button with test "I\'ll Take it" for accept button by default"', () => {
    const acceptBtn = component.getAllByText(BTN_LABEL.DEFAULT_ACCEPT);

    expect(acceptBtn[0]).toBeInTheDocument();
  });
});
