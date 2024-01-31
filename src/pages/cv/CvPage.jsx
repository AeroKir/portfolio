import React from 'react';
import PropTypes from 'prop-types';

function CvPage(props) {
    return (
        <main class="layout-main-content">
            <h1 class="main-heading">CV</h1>
            <a href="Front-End Dev Kirill Shevtsov en.pdf" download="Front-End Dev Kirill Shevtsov en" target="_blank" rel="noopener noreferrer"
                class="download-cv-link">
                Download CV on English in .pdf
            </a>
            <a href="Front-End разработчик Кирилл Шевцов ru.pdf" download="Front-End разработчик Кирилл Шевцов ru" target="_blank" rel="noopener noreferrer"
                class="download-cv-link">
                Download CV on Russian in .pdf
            </a>
        </main>
    )
}

CvPage.propTypes = {};

export default CvPage;
