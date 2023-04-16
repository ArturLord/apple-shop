import SimpleImageSlider from 'react-simple-image-slider';

import styles from './slider.module.scss';

const images = [
  { url: 'img/slides/slide1.jpg' },
  { url: 'img/slides/slide2.jpg' },
  { url: 'img/slides/slide3.jpg' },
];

const Slider = () => {
  return (
    <div className={styles.r}>
      <SimpleImageSlider
        width={1519}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        bgColor="#000"
        style={{
          maxWidth: '1519px',
          maxHeight: '500px',
        }}
      />
    </div>
  );
};
export default Slider;
