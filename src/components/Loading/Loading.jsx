import React from 'react';
import ReactLoading from 'react-loading';

import styles from './Loading.module.scss'
 
const Loading = () => (
    <ReactLoading
        className={styles.loading}
        type={'bubbles'}
        color={'#232323'}
        height={70}
        width={150}
      />
);
 
export default Loading;