import React from 'react'
import PropTypes from 'prop-types'

function MainPage(props) {
    return (
        <main className="layout-main-content main-page-content">
            <section className="main-page-section">
                <h1 className="main-heading">Kirill Web-developer</h1>
                <p className="greeting-text">
                Hello, I'm Kirill, Front-End web developer, who is open to everything new.
                I like to resolve non-trivial challenges into web-development.
                But usual tasks I do responsibly too. I'm writing clean, semantic, accessible code.
                </p>
            </section>
        </main>
    )
}

MainPage.propTypes = {}

export default MainPage;
