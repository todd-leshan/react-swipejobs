import { formatJobData, formatShifts } from "./helpers";

describe("helper functions", () => {
  describe("formatJobData()", () => {
    test("should return formatted job data", () => {
      const jobData = {
        jobId: "5775d8e18a488e6c5bb08333",
        jobTitle: {
          name: "Construction General Helper",
          imageUrl:
            "https://imgs.swipejobs.com/js/job-category/construction-1.jpg"
        },
        company: {
          name: "Steve Smith Construction",
          address: {
            formattedAddress: "430 Smith St, Chicago, IL 60654, USA",
            zoneId: "America/Chicago"
          },
          reportTo: {
            name: "Judy Smith",
            phone: "2130010012"
          }
        },
        wagePerHourInCents: 5505,
        milesToTravel: 3.46666,
        shifts: [
          {
            startDate: "2019-09-04T21:00:00Z",
            endDate: "2019-09-05T05:00:00Z"
          }
        ],
        branch: "Downtown",
        branchPhoneNumber: "2531233322"
      };

      const formatedJobData = formatJobData(jobData);

      expect(formatedJobData).toEqual({
        title: "Construction General Helper",
        image: "https://imgs.swipejobs.com/js/job-category/construction-1.jpg",
        companyName: "Steve Smith Construction",
        location: "430 Smith St, Chicago, IL 60654, USA",
        requirements: undefined,
        reportToName: "Judy Smith",
        reportToPhone: "2130010012",
        distanceToTravel: "3.47",
        hourlyRate: "55.05",
        shifts: ["SEP 4, WED 4:00 PM - SEP 5, THU 12:00 AM CDT"]
      });
    });

    test("should return formatted job data when it is empty", () => {
      const formatedJobData = formatJobData({});

      expect(formatedJobData).toEqual({
        title: undefined,
        image: undefined,
        companyName: undefined,
        location: undefined,
        requirements: undefined,
        reportToName: undefined,
        reportToPhone: undefined,
        distanceToTravel: undefined,
        hourlyRate: undefined,
        shifts: []
      });
    });

    test("should return undefined for distanceToTravel when distanceToTravel is not a number", () => {
      const formatedJobData = formatJobData({ distanceToTravel: "5.555" });

      expect(formatedJobData).toEqual({
        title: undefined,
        image: undefined,
        companyName: undefined,
        location: undefined,
        requirements: undefined,
        reportToName: undefined,
        reportToPhone: undefined,
        distanceToTravel: undefined,
        hourlyRate: undefined,
        shifts: []
      });
    });

    test("should return undefined for hourlyRate when hourlyRate is not a number", () => {
      const formatedJobData = formatJobData({ hourlyRate: "5555" });

      expect(formatedJobData).toEqual({
        title: undefined,
        image: undefined,
        companyName: undefined,
        location: undefined,
        requirements: undefined,
        reportToName: undefined,
        reportToPhone: undefined,
        distanceToTravel: undefined,
        hourlyRate: undefined,
        shifts: []
      });
    });

    test("should return distanceToTravel with percesion as 2 ", () => {
      const formatedJobData = formatJobData({
        milesToTravel: 5.555555555555
      });

      expect(formatedJobData).toEqual({
        title: undefined,
        image: undefined,
        companyName: undefined,
        location: undefined,
        requirements: undefined,
        reportToName: undefined,
        reportToPhone: undefined,
        distanceToTravel: "5.56",
        hourlyRate: undefined,
        shifts: []
      });
    });
  });

  describe("formatShifts()", () => {
    test("should return shift time with proper format", () => {
      const result = formatShifts(
        [
          {
            startDate: "2019-09-07T21:00:00Z",
            endDate: "2019-09-08T05:00:00Z"
          },
          {
            startDate: "2019-09-08T16:00:00Z",
            endDate: "2019-09-08T20:00:00Z"
          }
        ],
        "America/Chicago"
      );

      expect(result).toEqual([
        "SEP 7, SAT 4:00 PM - SEP 8, SUN 12:00 AM CDT",
        "SEP 8, SUN 11:00 AM - 3:00 PM CDT"
      ]);
    });
  });
});
