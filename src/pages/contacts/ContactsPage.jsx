import React from 'react';
import PropTypes from 'prop-types';

function ContactsPage(props) {
    return (
        <section class="section contacts-section">
        <h1 class="main-heading">My contacts</h1>
        <ul class="contacts-list">
          <li class="contacts-list-item">
            <a href="mailto:kirwork.em@gmail.com" class="contacts-list-link">
              <img src="images/e-mail-icon.svg" alt="E-mail icon" class="contacts-icon e-mail-icon" />
              <span class="contacts-list-text">kirwork.em@gmail.com</span>
            </a>
          </li>
          <li class="contacts-list-item">
            <a href="https://www.linkedin.com/in/kirill-shevtsov-0a4374138" target="_blank" rel="noopener noreferrer" class="contacts-list-link">
              <img src="images/linkedin-icon.svg" alt="LinkedIn icon" class="contacts-icon linkedin-icon" />
              <span class="contacts-list-text">LinkedIn</span>
            </a>
          </li>
          <li class="contacts-list-item">
            <a href="https://github.com/AeroKir" target="_blank" rel="noopener noreferrer" class="contacts-list-link">
              <img src="images/github-icon.svg" alt="GitHub icon" class="contacts-icon github-icon" />
              <span class="contacts-list-text">GitHub</span>
            </a>
          </li>
          <li class="contacts-list-item">
            <a href="tg://resolve?domain=Kirill_Shevtsov" class="contacts-list-link">
              <img src="images/telegram-app-icon.svg" alt="Telegram messenger icon" class="contacts-icon telegram-icon" />
              <span class="contacts-list-text">Telegram</span>
            </a>
          </li>
        </ul>
      </section>
    )
}

ContactsPage.propTypes = {};

export default ContactsPage;
