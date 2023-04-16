/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import styles from "../../scss/components/footer/contacts.module.scss";

const Contacts = () => {
  window.scrollTo(0, 0);
  return (
    <div className={styles.contacts}>
      <h1>Контакты</h1>
      <p>Номер телефона по любым вопросам:</p>
      <div className={styles.contactsPhone}>
        <img src="img/icons/phone.png" alt="phone" />
        <p>+7 (383) 455-77-00</p>
        <span>|</span>
        <p>9:00-20:00 по НСК</p>
      </div>
      <p>Способы связи в соц.сетях и мессенджерах:</p>
      <div className={styles.contactsBlock}>
        <img src="img/icons/telegram.png" alt="contacts" />
        <a href="#" target="_blank">
          Чат в Telegramm
          <p>@apple_shop_chat</p>
        </a>
        <img src="img/icons/whatsapp.png" alt="contacts" />
        <a href="#" target="_blank">
          Чат в WhatsApp
          <p>+7 953 455-77-00</p>
        </a>
        <img src="img/icons/vk.png" alt="contacts" />
        <a href="#" target="_blank">
          Вконтакте
          <p>Группа и чат</p>
        </a>
        <img src="img/icons/telegram.png" alt="contacts" />
        <a href="#" target="_blank">
          Telegramm Канал
          <p>@apple_shop</p>
        </a>
      </div>
      <div>
        <h2>Адреса наших магазинов</h2>
        <iframe
          title="cards"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad79eabcf9bec99698fd62c195648ffbc33eb362064c7919af5ea7248a033f6da&amp;source=constructor"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
