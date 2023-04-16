import styles from "../../scss/components/footer/warranty.module.scss";

const Warranty = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className={styles.contentFooter}>
        <h1>Гарантия</h1>
        <div className={styles.warranty}>
        <h2>Официальная гарантия Apple</h2>
        <p>Гарантия на iPhone, iPad, Watch, Mac, AirPods, Apple TV:</p>
        <p>Обслуживание в любом авторизованном сервисном центре в РФ.</p>
      </div>
      <img src="img/apple-warranty.jpg" alt="warranty"/>
      </div>
    </>
  );
};

export default Warranty;
