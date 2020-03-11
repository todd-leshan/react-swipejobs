import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import * as actions from "./actions";
import actionTypes from "./actionTypes";
import { JOB_STATUS } from "../constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Redux Actions", () => {
  describe("updateJobStatus()", () => {
    test("should return an action to update job status", () => {
      const payload = { jobId: "", newStatus: JOB_STATUS.ACCEPTED };
      const result = {
        type: actionTypes.UPDATE_JOB_STATUS,
        payload
      };

      expect(actions.updateJobStatus(payload)).toEqual(result);
    });
  });

  describe("Redux Async Actions", () => {
    beforeEach(() => {
      moxios.install();
    });

    afterEach(() => {
      moxios.install();
    });

    test("should return an action to update user", () => {
      const payload = {
        userId: "1",
        userData: {
          address: {
            formattedAddress: "1 Downing St, Chicago, IL 60654, USA",
            zoneId: "America/Chicago"
          },
          email: "jim.rose@gmail.com",
          firstName: "Jim",
          lastName: "Rose",
          maxJobDistance: 20,
          phoneNumber: "5096290220",
          workerId: "7f90df6e-b832-44e2-b624-3143d428001f"
        }
      };

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: payload.userData
        });
      });

      const expectedActions = [
        {
          type: actionTypes.UPDATE_USER,
          payload
        }
      ];

      const store = mockStore({ user: {} });

      return store
        .dispatch(actions.getUserByIdAsync({ userId: payload.userId }))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
