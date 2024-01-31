import React from 'react';
import PropTypes from 'prop-types';

import './SkillsPage.css';

function SkillsPage(props) {
    return (
        <section className="section skills-section">
        <h1 className="main-heading">My skills</h1>
        <h2 className="sub-heading">Technical skills</h2>
        <ul className="skills-list">
          <li className="skill-item">
            <img src="images/html-icon.svg" alt="HTML logo icon" className="tech-icon" />
            <div className="layout-item-content-wrapper">
              <h3 className="item-heading">HTML</h3>
              <p>I write semantic markup, not forgetting accessibility.</p>
            </div>
          </li>
          <li className="skill-item">
            <img src="images/css-icon.svg" alt="CSS logo icon" className="tech-icon" />
            <div className="layout-item-content-wrapper">
              <h3 className="item-heading">CSS</h3>
              <p>
                When writing styles, I use different methodologies
                (<a href="https://suitcss.github.io/" target="_blank" rel="noopener noreferrer"
                  className="link-in-text">SUIT CSS</a>
                or
                <a href="http://smacss.com/" target="_blank" rel="noopener noreferrer" className="link-in-text">SMACSS</a>,
                for example).
                I make responsive designs and animations. I use flexbox.
              </p>
            </div>
          </li>
          <li className="skill-item">
            <img src="images/js-icon.svg" alt="JavaScript logo icon" className="tech-icon" />
            <div className="layout-item-content-wrapper">
              <h3 className="item-heading">JavaScript</h3>
              <p>
                Manipulation with DOM. ES6 features. Writing code divided into modules.
                I create content dynamically based on data obtained from the API.
              </p>
            </div>
          </li>
          <li className="skill-item">
            <img src="images/svg-icon.svg" alt="SVG logo icon" className="tech-icon" />
            <div className="layout-item-content-wrapper">
              <h3 className="item-heading">SVG</h3>
              <p>
                I like this technology. I made the main menu on this site using SVG.
                I also use this to visualize infographics.
              </p>
            </div>
          </li>
          <li className="skill-item">
            <img src="images/react-icon.svg" alt="React logo icon" className="tech-icon" />
            <div className="layout-item-content-wrapper">
              <h3 className="item-heading">React</h3>
              <p>
                I'm using React to create a single page application (SPA).
                The components which I create I divide into presentational and containers components.
              </p>
            </div>
          </li>
          <li className="skill-item">
            <img src="images/redux-icon.svg" alt="Redux logo icon" className="tech-icon" />
            <div className="layout-item-content-wrapper">
              <h3 className="item-heading">Redux</h3>
              <p>
                I use Redux in conjunction with React.
                I describe almost all the logic that relates to changing the state of an application using Redux.
              </p>
            </div>
          </li>
        </ul>

        <h2 className="sub-heading">Workflow</h2>
        <ul className="workflow-list">
          <li className="workflow-item">
            <img src="images/vs-code-icon.svg" alt="VS code logo icon" className="tech-icon" />
            <div className="layout-item-content-wrapper">
              <h3 className="item-heading">VS Code</h3>
              <p>My main code-editor.</p>
            </div>
          </li>
          <li className="workflow-item">
            <img src="images/es-lint-icon.svg" alt="ES Lint logo icon" className="tech-icon" />
            <div className="layout-item-content-wrapper">
              <h3 className="item-heading">ES Lint</h3>
              <p>
                For writing pure maintainable js code.
                I use the <a href="https://github.com/airbnb/javascript" target="_blank" rel="noopener noreferrer"
                  className="link-in-text">Airbnb
                  style guide</a>.
              </p>
            </div>
          </li>
          <li className="workflow-item">
            <img src="images/webpack-icon.svg" alt="Webpack logo icon" className="tech-icon" />
            <div className="layout-item-content-wrapper">
              <h3 className="item-heading">Webpack</h3>
              <p>
                I use it to build complex projects. Also in the development process using webpack-dev-server.
              </p>
            </div>
          </li>
          <li className="workflow-item">
            <img src="images/git-icon.svg" alt="Git logo icon" className="tech-icon" />
            <div className="layout-item-content-wrapper">
              <h3 className="item-heading">GIT</h3>
              <p>Version Control System. Nothing more to add.</p>
            </div>
          </li>
          <li className="workflow-item">
            <img src="images/command-line-icon.svg" alt="Command line logo icon" className="tech-icon" />
            <div className="layout-item-content-wrapper">
              <h3 className="item-heading">Command Line</h3>
              <p>Since I'm a user of the Linux system, I often use the command line for various purposes.</p>
            </div>
          </li>
        </ul>

        <h2 className="sub-heading">Soft skills</h2>
        <ul className="soft-skills-list">
          <li className="soft-skill-item">
            <div className="layout-item-content-wrapper">
              <p>Ability to listen and hear.</p>
            </div>
          </li>
          <li className="soft-skill-item">
            <div className="layout-item-content-wrapper">
              <p>Ability to clearly express their thoughts orally and in writing.</p>
            </div>
          </li>
          <li className="soft-skill-item">
            <div className="layout-item-content-wrapper">
              <p>System thinking.</p>
            </div>
          </li>
          <li className="soft-skill-item">
            <div className="layout-item-content-wrapper">
              <p>
                Understanding of the client's experience,
                understanding of what is required to form a long-term relationship with the client.
              </p>
            </div>
          </li>
          <li className="soft-skill-item">
            <div className="layout-item-content-wrapper">
              <p>A responsibility.</p>
            </div>
          </li>
        </ul>

        <h2 className="sub-heading">Languages proficiency</h2>
        <ul className="languages-skills-list">
          <li className="language-skill-item">
            <div className="layout-item-content-wrapper">
              <p>English - intermediate</p>
            </div>
          </li>
          <li className="language-skill-item">
            <div className="layout-item-content-wrapper">
              <p>Russian - native</p>
            </div>
          </li>
          <li className="language-skill-item">
            <div className="layout-item-content-wrapper">
              <p>Ukrainian - native</p>
            </div>
          </li>
        </ul>
      </section>
    )
}

SkillsPage.propTypes = {};

export default SkillsPage;
