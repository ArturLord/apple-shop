import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorSort } from '../redux/filter/selectors';
import { setSort } from '../redux/filter/slice';
import { SortPropEnum } from '../redux/filter/types';

import styles from '../scss/components/sort.module.scss';

type sortListItem = {
  name: string;
  sortProp: SortPropEnum;
};

type PopupClick = MouseEvent & {
  composedPath(): Node[];
};

export const sortList: sortListItem[] = [
  { name: 'Сначала популярные', sortProp: SortPropEnum.RATING_DESC },
  { name: 'Непопулярные', sortProp: SortPropEnum.RATING_ASC },
  { name: 'Сначала дорогие', sortProp: SortPropEnum.PRICE_DESC },
  { name: 'Сначала недорогие', sortProp: SortPropEnum.PRICE_ASC },
  { name: 'По алфавиту (А-Я)', sortProp: SortPropEnum.TITLE_ASC },
  { name: 'По алфавиту (Я-А)', sortProp: SortPropEnum.TITLE_DESC },
];

const Sort = () => {
  const sort = useSelector(selectorSort);
  const dispatch = useDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(false);

  const onClickListItem = (obj: sortListItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;
      let path = sortRef.current && _event.composedPath().includes(sortRef.current);
      if (!path) setOpen(false);
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className={styles.sort}>
      <div className={styles.sortLabel}>
        <b>Сортировка:</b>
        <span onClick={() => setOpen(!open)}>{sort.name}</span>
      </div>
      {open ? (
        <div className={styles.sortPopup}>
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={sort.sortProp === obj.sortProp ? styles.active : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Sort;
