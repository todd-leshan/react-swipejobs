import React from "react";
import { Link } from "react-router-dom";

import sitelogo from "../assets/site-logo.png";

const Cutup = () => {
  return (
    <div className="main-content">
      <header>
        <a href="https://www.swipejobs.com/" className="link link__logo">
          <img src={sitelogo} alt="swipejobs site logo" />
        </a>
        <Link to="#" className="link link__profile">
          Jim Rose
        </Link>
      </header>
      <main>
        <div className="jobs">
          <div className="job accepted">
            <div className="job__img">
              <img
                src="https://imgs.swipejobs.com/js/job-category/construction-1.jpg"
                alt=""
              />
            </div>
            <div className="job__content">
              <h2 className="job__title">Construction General Helper</h2>
              <div className="job__company">C.D Barnes & Associates</div>
              <div className="job__highlight">
                <div className="job__highlight--left">
                  <span className="label">Distance</span>
                  <span className="value">5.6 miles</span>
                </div>
                <div className="job__highlight--right">
                  <span className="label">Hourly Rate</span>
                  <span className="value">13.50</span>
                </div>
              </div>

              <div className="job__details">
                <div className="job__detail shift-dates">
                  <h4>shift dates</h4>
                  <ul>
                    <li>APR 7, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 8, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 9, WED 8:00 AM - 10:00PM PDT</li>
                  </ul>
                  <span class="see-more">See more shift dates</span>
                </div>

                <div className="pop-up hidden">
                  <h3>shift dates</h3>
                  <button className="btn btn--close">Close</button>
                  <ul>
                    <li>APR 7, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 8, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 9, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 7, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 8, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 9, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 7, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 8, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 9, WED 8:00 AM - 10:00PM PDT</li>
                  </ul>
                  <button className="btn btn--white btn--close">Close</button>
                </div>

                <div className="job__detail location">
                  <h4>Location</h4>
                  <p>123 Main Street, Tacoma, WA 98409</p>
                  <span>5.62 miles from your job search location</span>
                </div>

                <div className="job__detail requirements">
                  <h4>Requirements</h4>
                  <ul>
                    <li>safety vest</li>
                    <li>hard hat</li>
                    <li>sth else</li>
                  </ul>
                </div>

                <div className="job__detail report-to">
                  <h4>report to</h4>
                  <p>Dave (123) 546 987</p>
                </div>
              </div>
            </div>
            <div className="decision-btns">
              <button className="btn btn--white" type="button" disabled>
                No Thanks
              </button>
              <button className="btn btn--black" type="button" disabled>
                I'll Take it
              </button>
            </div>
          </div>

          <div className="job rejected">
            <div className="job__img">
              <img
                src="https://imgs.swipejobs.com/js/job-category/construction-1.jpg"
                alt=""
              />
            </div>
            <div className="job__content">
              <h2 className="job__title">Construction General Helper</h2>
              <div className="job__company">C.D Barnes & Associates</div>
              <div className="job__highlight">
                <div className="job__highlight--left">
                  <span className="label">Distance</span>
                  <span className="value">5.6 miles</span>
                </div>
                <div className="job__highlight--right">
                  <span className="label">Hourly Rate</span>
                  <span className="value">13.50</span>
                </div>
              </div>

              <div className="job__details">
                <div className="job__detail shift-dates">
                  <h4>shift dates</h4>
                  <ul>
                    <li>APR 7, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 8, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 9, WED 8:00 AM - 10:00PM PDT</li>
                  </ul>
                </div>

                <div className="job__detail location">
                  <h4>Location</h4>
                  <p>123 Main Street, Tacoma, WA 98409</p>
                  <span>5.62 miles from your job search location</span>
                </div>

                <div className="job__detail requirements">
                  <h4>Requirements</h4>
                  <ul>
                    <li>safety vest</li>
                    <li>hard hat</li>
                    <li>sth else</li>
                  </ul>
                </div>
              </div>
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

          <div className="job not_available">
            <div className="job__img">
              <img
                src="https://imgs.swipejobs.com/js/job-category/construction-1.jpg"
                alt=""
              />
            </div>
            <div className="job__content">
              <h2 className="job__title">Construction General Helper</h2>
              <div className="job__company">C.D Barnes & Associates</div>
              <div className="job__highlight">
                <div className="job__highlight--left">
                  <span className="label">Distance</span>
                  <span className="value">5.6 miles</span>
                </div>
                <div className="job__highlight--right">
                  <span className="label">Hourly Rate</span>
                  <span className="value">13.50</span>
                </div>
              </div>

              <div className="job__details">
                <div className="job__detail shift-dates">
                  <h4>shift dates</h4>
                  <ul>
                    <li>APR 7, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 8, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 9, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 8, WED 8:00 AM - 10:00PM PDT</li>
                    <li>APR 9, WED 8:00 AM - 10:00PM PDT</li>
                  </ul>
                </div>

                <div className="job__detail location">
                  <h4>Location</h4>
                  <p>123 Main Street, Tacoma, WA 98409</p>
                  <span>5.62 miles from your job search location</span>
                </div>

                <div className="job__detail requirements">
                  <h4>Requirements</h4>
                  <ul>
                    <li>safety vest</li>
                    <li>hard hat</li>
                    <li>sth else</li>
                  </ul>
                </div>

                <div className="job__detail report-to">
                  <h4>report to</h4>
                  <p>Dave (123) 546 987</p>
                </div>
              </div>
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
      </main>
    </div>
  );
};

export default Cutup;
