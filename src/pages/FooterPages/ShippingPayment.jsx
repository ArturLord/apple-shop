import styles from '../../scss/components/footer/shippingPayment.module.scss';

const ShippingPayment = () => {
  window.scrollTo(0, 0);
  return (
    <div className={styles.contentFooter}>
              <h1>Доставка и оплата</h1>
      <div className={styles.aboutContainer}>
        <div className={styles.shipping}>
            <img src="img/payment1.png" alt="car"/>
          <div>
            <h3>Способы доставки</h3>
            <p>- Бесплатная экспресс-доставка за 1 час по Новосибирску</p>
            <p>
              - Бесплатная доставка к нужному времени по Новосибирску и
              окрестностям
            </p>
            <p>- Самовывоз из магазина по адресу Красный Проспект, 27</p>
            <p>- Самовывоз из магазина по адресу ул. Гоголя, 9</p>
          </div>
        </div>
        <div className={styles.payment}>
          <div>
          <img src="img/payment2.png" alt="car"/>
          </div>
          <div >
            <h3>Способы оплаты</h3>
            <p>- Наличный расчет</p>
            <p>- Перевод на карту (Сбербанк, ВТБ, Тинькофф, Альфабанк)</p>
            <p>- Безналичный рассчет *</p>
            <div className={styles.paymentSale}>
              * При оплате наличными или с помощью перевода на карту
              предоставляется дополнительная скидка.

              <span>Почему так? Мы стараемся обеспечить для вас не только
              лучший сервис, но и максимально низкие цены, в связи с этим наша
              наценка для многих товаров меньше, чем комиссии, которые взимают
              банки. Поэтому мы ввели дополнительную скидку для способов оплаты,
              не имеющих комиссии.
              </span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPayment;
