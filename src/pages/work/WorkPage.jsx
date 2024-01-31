import React from 'react';
import PropTypes from 'prop-types';

function WorkPage(props) {
    return (
        <section className="section work-section">
        <h1 className="main-heading">My Works</h1>
        <ul className="works-list">
          <li className="works-item">
            <figure className="project-description-figure">
              <figcaption className="project-figcaption">Email send app</figcaption>
              <div className="project-description-content">
                <img className="project-preview-img" src="./images/works-preview/email-send-app-thumbnail.png"
                  alt="Email send app preview image" />
                <div className="project-description-content-aside">
                  <p className="project-description">SPA for sending emails with an opportunity to track delivery status.
                  </p>
                  <ul className="project-links-list">
                    <li className="project-link-item">
                      <a className="project-figure-link" href="https://github.com/AeroKir/sendsay-test-app" target="_blank"
                        rel="noopener noreferrer">
                        <img className="project-figure-link-icon" src="./images/github-icon.svg" alt="GitHub icon" />
                        View source on github
                      </a>
                    </li>
                    <li className="project-link-item">
                      <a className="project-figure-link" href="https://aerokir.github.io/sendsay-test-app/" target="_blank"
                        rel="noopener noreferrer">
                        <img className="project-figure-link-icon" src="./images/internet-icon.svg" alt="Earth icon" />
                        View a working application
                      </a>
                    </li>
                  </ul>
                  <h2 className="project-description-subheading">Used technologies:</h2>
                  <ul className="project-tchnology-list">
                    <li className="project-tchnology-item">React</li>
                    <li className="project-tchnology-item">Redux</li>
                    <li className="project-tchnology-item">JavaScript</li>
                    <li className="project-tchnology-item">CSS</li>
                  </ul>
                  <h2 className="project-description-subheading">Solved tasks:</h2>
                  <ul className="project-tasks-list">
                    <li className="project-task-item">
                      Form and field validation are written without using third-party libraries;
                    </li>
                    <li className="project-task-item">
                      Implemented file attachment via Drag and drop. Also without using third-party libraries;
                    </li>
                    <li className="project-task-item">
                      Implemented verification of the attached files by size, type, and total files size per one email;
                    </li>
                    <li className="project-task-item">
                      Implemented a display of a list of sent messages with sending status;
                    </li>
                    <li className="project-task-item">
                      Wrote tests for most of the main components, as well as for reducer and action creators;
                    </li>
                  </ul>
                </div>
              </div>
            </figure>
          </li>
          <li className="works-item">
            <figure className="project-description-figure">
              <figcaption className="project-figcaption">Avia tickets view</figcaption>
              <div className="project-description-content">
                <img className="project-preview-img" src="./images/works-preview/flight-variants-thumbnail.png"
                  alt="Avia tickets preview image" />
                <div className="project-description-content-aside">
                  <p className="project-description">SPA for showing avia tickets with filters.</p>
                  <ul className="project-links-list">
                    <li className="project-link-item">
                      <a className="project-figure-link" href="https://github.com/AeroKir/avia-trip-app" target="_blank"
                        rel="noopener noreferrer">
                        <img className="project-figure-link-icon" src="./images/github-icon.svg" alt="GitHub icon" />
                        View source on github
                      </a>
                    </li>
                    <li className="project-link-item">
                      <a className="project-figure-link" href="https://aerokir.github.io/avia-trip-app/" target="_blank"
                        rel="noopener noreferrer">
                        <img className="project-figure-link-icon" src="./images/internet-icon.svg" alt="Earth icon" />
                        View a working application
                      </a>
                    </li>
                  </ul>
                  <h2 className="project-description-subheading">Used technologies:</h2>
                  <ul className="project-tchnology-list">
                    <li className="project-tchnology-item">React</li>
                    <li className="project-tchnology-item">Redux</li>
                    <li className="project-tchnology-item">JavaScript</li>
                    <li className="project-tchnology-item">CSS</li>
                  </ul>
                  <h2 className="project-description-subheading">Solved tasks:</h2>
                  <ul className="project-tasks-list">
                    <li className="project-task-item">
                      Ticket render;
                    </li>
                    <li className="project-task-item">
                      Filtering tickets in the issuance by the number of transfers;
                    </li>
                    <li className="project-task-item">
                      Currency switching. Currency rates receiving from an API;
                    </li>
                    <li className="project-task-item">
                      Layout of the ticket, filter, currency switching;
                    </li>
                  </ul>
                </div>
              </div>
            </figure>
          </li>
          <li className="works-item">
            <figure className="project-description-figure">
              <figcaption className="project-figcaption">Weather on Map</figcaption>
              <div className="project-description-content">
                <img className="project-preview-img" src="./images/works-preview/weather-on-map-thumbnail.png"
                  alt="Weather on Map app preview image" />
                <div className="project-description-content-aside">
                  <p className="project-description">SPA application for viewing weather on a map in various cities.
                  </p>
                  <ul className="project-links-list">
                    <li className="project-link-item">
                      <a className="project-figure-link" href="https://github.com/AeroKir/weather-on-map" target="_blank"
                        rel="noopener noreferrer">
                        <img className="project-figure-link-icon" src="./images/github-icon.svg" alt="GitHub icon" />
                        View source on github
                      </a>
                    </li>
                    <li className="project-link-item">
                      <a className="project-figure-link" href="https://aerokir.github.io/weather/" target="_blank"
                        rel="noopener noreferrer">
                        <img className="project-figure-link-icon" src="./images/internet-icon.svg" alt="Earth icon" />
                        View a working application
                      </a>
                    </li>
                  </ul>
                  <h2 className="project-description-subheading">Used technologies:</h2>
                  <ul className="project-tchnology-list">
                    <li className="project-tchnology-item">JavaScript</li>
                    <li className="project-tchnology-item">LeafletJS</li>
                    <li className="project-tchnology-item">JSON</li>
                    <li className="project-tchnology-item">HTML</li>
                    <li className="project-tchnology-item">CSS</li>
                    <li className="project-tchnology-item">SVG</li>
                  </ul>
                  <h2 className="project-description-subheading">Solved tasks:</h2>
                  <ul className="project-tasks-list">
                    <li className="project-task-item">
                      Map initialization based on user location;
                    </li>
                    <li className="project-task-item">
                      Retrieving weather data using an API using asynchronous requests;
                    </li>
                    <li className="project-task-item">
                      Processing of the data with reference to geographic coordinates and display on the map;
                    </li>
                    <li className="project-task-item">
                      Created custom weather icons;
                    </li>
                  </ul>
                </div>
              </div>
            </figure>
          </li>
          <li className="works-item">
            <figure className="project-description-figure">
              <figcaption className="project-figcaption">Translated List of Ukrainian Cities</figcaption>
              <div className="project-description-content">
                <img className="project-preview-img" src="./images/works-preview/ukrainian-cities-list-thumbnail.png"
                  alt="Translated List of Ukrainian Cities preview image" />
                <div className="project-description-content-aside">
                  <p className="project-description">List in JSON format with translated names in Ukrainian
                    and Russian with geographic coordinates.
                  </p>
                  <ul className="project-links-list">
                    <li className="project-link-item">
                      <a className="project-figure-link" href="https://github.com/AeroKir/places-in-Ukraine/tree/master/city-list-ukrainian" target="_blank"
                        rel="noopener noreferrer">
                        <img className="project-figure-link-icon" src="./images/github-icon.svg" alt="GitHub icon" />
                        View source on github
                      </a>
                    </li>
                  </ul>
                  <h2 className="project-description-subheading">Used technologies:</h2>
                  <ul className="project-tchnology-list">
                    <li className="project-tchnology-item">JSON</li>
                  </ul>
                  <p>Contains more than 1600 translated names of settlements and regions of Ukraine.</p>
                  <p>Will be helpful in cases when you need to link a place name with a map, for example.</p>
                  <p>Feel free to use it in your projects.</p>
                </div>
              </div>
            </figure>
          </li>
        </ul>
      </section>
    )
}

WorkPage.propTypes = {};

export default WorkPage;
