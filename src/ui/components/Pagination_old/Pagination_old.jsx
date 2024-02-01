import React, { useState, useEffect } from 'react';
import useTheme from '../../../template/hooks/useTheme';

const Pagination_old = ({ defaultCurrent, pageSize, total, onChange }) => {
  const styles = useTheme('Pagination');
  const [current, setCurrent] = useState(defaultCurrent || 1);

  const size = pageSize || 10;
  const pages = [...new Array(Math.ceil(total / size))].map((item, index) => item = index + 1);

  const [items, setItems] = useState(pages.length > 5 ? pages.slice(1, 5) : pages.slice(1));
  const firstEl = items[0];
  const lastEl = items[items.length - 1];
  const lastPage = pages[pages.length - 1];

  useEffect(_ => {
    if (current > 5 && current + 5 <= lastPage) {
      setItems(pages.slice(current - 1, current + 3))
    } else if (current + 5 > lastPage && pages.length > 5) {
      setItems(pages.slice(-5))
    }
  }, [current, lastPage, pages]);

  useEffect(_ => {
    if (!!onChange) {
      onChange(current);
    }
  }, [current, onChange]);

  const handleClick = (e, index) => {
    e.preventDefault();
    setCurrent(index);
    getItems(index)
  };

  const handlePrevPage = e => {
    e.preventDefault();
    setCurrent(current - 1);

    if (current > 2 && !items.includes(current - 1)) {
      if (current - 4 > 0) {
        setItems(pages.slice(current - 4, current))
      } else {
        setItems(pages.slice(1, 5))
      }
    } else if (current - 1 === 2) {
      setItems(pages.slice(1, 5))
    }
  };

  const handleNextPage = e => {
    e.preventDefault();
    setCurrent(current + 1);

    const numb = current + 1;

    if (!items.includes(numb)) {
      if (numb + 4 > lastPage) {
        setItems(pages.slice(-5))
      } else {
        setItems(pages.slice(numb - 1, numb + 3));
      }
    }
  };

  const getItems = (index) => {
    if (index === 1) {
      setItems(pages.slice(1, 5))
    }

    if (index === lastPage && pages.length > 5) {
      setItems(pages.slice(-5))
    }

    if (firstEl === index && firstEl !== 2) {
      if (index < 5) {
        setItems(pages.slice(1, 5))
      } else {
        setItems(pages.slice(index - 3, index + 1))
      }
    }

    if (lastEl === index && lastPage !== index) {
      if (index + 2 >= lastPage) {
        setItems(pages.slice(-5))
      } else {
        setItems(pages.slice(index - 2, index + 2))
      }
    }
  };

  const GapStart = () => {
    if (firstEl > 2) {
      return (
        <li className={styles["pagination__item"]}>
        <span
          className={styles["pagination__gap"]}
          role="presentation"
        >...</span>
        </li>
      )
    } else return null;
  };

  const GapEnd = () => {
    if (lastEl !== lastPage && lastEl + 1 !== lastPage) {
      return (
        <li className={styles["pagination__item"]}>
        <span
          className={styles["pagination__gap"]}
          role="presentation"
        >...</span>
        </li>
      )
    } else return null;
  };

  const PaginationItems = () => {
    return items.map(item => (
      <li className={styles["pagination__item"]} key={`item-${item}`}>
        <button
          className={`${styles["pagination__link"]} ${item === current ? styles["pagination__link_current"] : ''}`}
          title={`Go to page ${item + 1}`}
          onClick={e => handleClick(e, item)}>
          {item}
        </button>
      </li>
    ))
  };

  return (
    <div className={styles["pagination"]}>
      <ul className={styles["pagination__list"]}>
        <li className={styles["pagination__item"]}>
          <button
            className={`${styles["pagination__link"]} ${styles["pagination__link_prev"]} ${current === 1 ? styles["pagination__link_disabled"] : ""}`}
            rel="prev"
            title="Go to previos page"
            data-title="Prev"
            onClick={handlePrevPage}>
          </button>
        </li>

        <li className={styles["pagination__item"]} key={`item-1`}>
          <button
            className={`${styles["pagination__link"]} ${current === 1 ? styles["pagination__link_current"] : ''}`}
            title={`Go to page 1`}
            onClick={e => handleClick(e, 1)}>
            1
          </button>
        </li>

        <GapStart/>
        <PaginationItems/>
        <GapEnd/>

        {pages.length > 5 && lastEl !== lastPage ?
          <li className={styles["pagination__item"]}>
            <button
              className={`${styles["pagination__link"]} ${pages.length === current ? styles["pagination__link_current"] : ""}`}
              title={`Go to page ${pages.length}`}
              onClick={e => handleClick(e, pages.length)}>
              {pages.length}
            </button>
          </li> : null}

        <li className={styles["pagination__item"]}>
          <button
            className={`${styles["pagination__link"]} ${styles["pagination__link_next"]} ${current === pages.length ? styles["pagination__link_disabled"] : ""}`}
            rel="next"
            title="Go to next page"
            data-title="Next"
            disabled={current === pages.length}
            onClick={handleNextPage}>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination_old;
