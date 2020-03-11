import get from "lodash/get";
import moment from "moment-timezone";

import { JOB_STATUS } from "../constants";

const formatDate = (date, timezone, dateFormat) => {
  return moment(date)
    .tz(timezone)
    .format(dateFormat)
    .toUpperCase();
};

const isSameDay = (startDate, endDate, timezone) => {
  const start = moment.tz(startDate, timezone);
  const end = moment.tz(endDate, timezone);
  return start.isSame(end, "day");
};

export const formatShifts = (shifts = [], timezone = "UTC") => {
  return shifts.map(shift => {
    const startDateFormat = "MMM D, ddd LT";
    let endDateFormat = "MMM D, ddd LT z";

    if (isSameDay(shift.startDate, shift.endDate, timezone)) {
      endDateFormat = "LT z";
    }

    const startDate = formatDate(shift.startDate, timezone, startDateFormat);
    const endDate = formatDate(shift.endDate, timezone, endDateFormat);

    return `${startDate} - ${endDate}`;
  });
};

export const formatJobData = jobData => {
  const id = get(jobData, "jobId");
  const title = get(jobData, "jobTitle.name");
  const image = get(jobData, "jobTitle.imageUrl");
  const companyName = get(jobData, "company.name");
  const location = get(jobData, "company.address.formattedAddress");
  const requirements = get(jobData, "requirements");
  const reportToName = get(jobData, "company.reportTo.name");
  const reportToPhone = get(jobData, "company.reportTo.phone");
  const timezone = get(jobData, "company.address.zoneId");

  let distanceToTravel = get(jobData, "milesToTravel");

  if (!isNaN(distanceToTravel)) {
    distanceToTravel = distanceToTravel.toFixed(2);
  } else {
    distanceToTravel = undefined;
  }

  let hourlyRate = get(jobData, "wagePerHourInCents");

  if (!isNaN(hourlyRate)) {
    hourlyRate = (hourlyRate / 100).toFixed(2);
  } else {
    hourlyRate = undefined;
  }

  let shifts = get(jobData, "shifts");
  shifts = formatShifts(shifts, timezone);

  const status = JOB_STATUS.AVAILABLE;

  return {
    id,
    title,
    image,
    companyName,
    location,
    requirements,
    reportToName,
    reportToPhone,
    distanceToTravel,
    hourlyRate,
    shifts,
    status
  };
};
