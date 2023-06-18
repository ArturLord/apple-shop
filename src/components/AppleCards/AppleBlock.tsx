import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/slice';
import { selectorCartItemById } from '../../redux/cart/selectors';
import { CartItem } from '../../redux/cart/types';

import styles from '../../scss/components/apple-block.module.scss';

type AppleBlockProps = {
  title: string;
  price: number;
  imageUrl: string;
  color: string;
  id: string;
  sizes: number[];
  types: number[];
  rating: number;
};

const AppleBlock: React.FC<AppleBlockProps> = ({
  title,
  price,
  imageUrl,
  id,
  color,
  sizes,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectorCartItemById(id));
  const [activeType] = React.useState(0);
  const [activeSize] = React.useState(0);
  const addedCount = cartItem ? cartItem.count : 0;
  const typeNames = [color];

  const onClickAdd = () => {
    const item: CartItem = {
      title,
      price,
      imageUrl,
      id,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.appleBlock}>
      <Link key={id} to={`/apples/${id}`}>
        <img className={styles.appleBlockImg} src={require(imageUrl)} alt="Apple" />
        <h4 className={styles.appleBlockTitle}>
          {title} {sizes[0]} Gb {color}
        </h4>
      </Link>
      <div className={styles.appleBlockBottom}>
        <div className={styles.appleBlockPrice}>{price} ₽</div>
        <button onClick={onClickAdd} className={styles.appleButton}>
          <span>Добавить</span>
          {addedCount > 0 ? <i>{addedCount}</i> : ''}
        </button>
      </div>
    </div>
  );
};

export default AppleBlock;
