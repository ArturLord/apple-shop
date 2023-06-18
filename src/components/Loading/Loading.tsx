import React from 'react';
import ReactLoading from 'react-loading';

import styles from './Loading.module.scss'
 
const Loading: React.FC = () => (
    <ReactLoading
        className={styles.loading}
        type={'bubbles'}
        color={'#2b2a2a'}
        height={70}
        width={150}
      />
);
 
export default Loading;