import React from 'react';
import PropTypes from 'prop-types';

function AssetsPage(props) {
    return (
        <section class="section assets-section">
        <h1 class="main-heading">Assets</h1>
        <p>
          In this section, I have compiled links to useful tools and sources of knowledge that help me in the
          development process.
          For convenience, I divided them into directions. Perhaps some of this will be useful for you.
          The list is far from complete and is periodically updated.
        </p>

        <ul class="assets-list">
          <li class="assets-item">
            <a href="assets/assets-html.html">
              <div class="layout-item-content-wrapper">
                <h2 class="item-heading">HTML</h2>
                <p>Anything that can be useful when writing the correct semantic markup of a document.</p>
              </div>
            </a>
          </li>
          <li class="assets-item">
            <a href="assets/assets-css.html">
              <div class="layout-item-content-wrapper">
                <h2 class="item-heading">CSS</h2>
                <p>
                  Everything related to writing CSS styles.
                  Code snippets, various methods for solving typical and not very typical tasks.
                </p>
              </div>
            </a>
          </li>
          <li class="assets-item">
            <a href="assets/assets-js-and-node.html">
              <div class="layout-item-content-wrapper">
                <h2 class="item-heading">JavaScript and NodeJs</h2>
                <p>
                  Here about client and server JavaScript. Links to various useful libraries, configuration settings,
                  best
                  practices, etc.
                </p>
              </div>
            </a>
          </li>
          <li class="assets-item">
            <a href="assets/assets-design.html">
              <div class="layout-item-content-wrapper">
                <h2 class="item-heading">Design</h2>
                <p>
                  Here everything related to vector and raster images, colors, fonts, and other interface design.
                </p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    )
}

AssetsPage.propTypes = {};

export default AssetsPage;
