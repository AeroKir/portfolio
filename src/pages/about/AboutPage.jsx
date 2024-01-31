import React from 'react';
import PropTypes from 'prop-types';

import './AboutPage.css';

function AboutPage(props) {
    return (
        <section className="section about-section">
            <h1 className="main-heading">About me</h1>

            <picture className="avatar-image-container">
                <source type="image/webp" srcSet="images/avatar-image.webp" className="avatar-image" />
                <img src="images/avatar-image.jpg" alt="Face on avatar image" className="avatar-image" />
            </picture>

            <p>
            Hey there,
            My name's Kirill Shevtsov. I'm a front-end web developer based in Kharkiv, Ukraine.
            I came to web development about 3 years ago.
            During this time, I studied basic Web technologies - HTML, CSS, JavaScript by myself.
            </p>
            <p>
            Currently, I'm focused on writing dynamic web applications using data obtained from the API.
            I also continue my self-education - I study various approaches to web development and try them out in
            practice.
            I'm interested in everything related to UX / UI, performance, accessibility, design.
            </p>
            <p>In my free time, I like to ride a bike or walk, listening to my favorite music.</p>
      </section>
    )
}

AboutPage.propTypes = {}

export default AboutPage;
