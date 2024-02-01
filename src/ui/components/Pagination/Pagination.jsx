import React from 'react';
import useTheme from '../../../template/hooks/useTheme';
import cn from 'classnames';
import Icon from '../Icon';

const Pagination = (
  {
    currentPage = 1,
    totalItems,
    pageSize = 10,
    pagerLimit = 5,
    onPageChanged,
    debug = false,
    disableArrows = false
  }) => {
  const styles = useTheme('Pagination');

  let pagesCount = Math.ceil(totalItems / pageSize);

  let allPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    allPages.push(i);
  }

  let start = 0;
  let end = 0;
  let left = currentPage - 1;
  let right = totalItems - currentPage;

  let renderPages = [];

  if (pagesCount > 1) {
    if (left < Math.floor(pagerLimit / 2)) {
      start = 0;
    } else {
      start = currentPage - Math.floor(pagerLimit / 2) - 1;
    }
    end = start + pagerLimit;

    if (end > totalItems) {
      start -= (end - totalItems);
      end = totalItems;
      if (start < 1) start = 1;
    }

    let previewPages = [];

    for (let i = start; i < end; i++) {
      if (allPages[i]) {
        previewPages.push(allPages[i]);
      }
    }

    if (previewPages.length < pagerLimit) {
      start = Math.ceil(totalItems / pageSize) - pagerLimit;
    }
  }

  for (let i = start; i < end; i++) {
    if (allPages[i]) {
      renderPages.push(allPages[i]);
    }
  }

  const items = renderPages.map((page, idx) => {
    return (
      <li key={idx} className={styles['pagination__item']}>
        <span
          onClick={() => {
            onPageChanged(page)
          }}
          className={cn(styles["pagination__link"], currentPage === page && styles["pagination__link_current"])}>
          {page}
        </span>
      </li>
    )
  });

  const FirstPage = () => {
    if (pagesCount < pagerLimit || disableArrows) return null;

    return (
      <li className={cn(styles['pagination__item'], styles['pagination__item-first'])}>
        <span
          onClick={() => onPageChanged(1)}
          className={cn(styles['pagination__link'], currentPage === 1 && styles['pagination__link_disabled'])}>
          <Icon content="chevrons-left" mix={styles['pagination__link-icon']}/>
        </span>
      </li>
    )
  };

  const PrevPage = () => {
    if (disableArrows) return null;

    return (
      <li className={styles['pagination__item']}>
        <span
          onClick={() => onPageChanged(currentPage - 1)}
          className={cn(styles['pagination__link'], currentPage === 1 && styles['pagination__link_disabled'])}
        >
          <Icon content="chevron-left" mix={styles['pagination__link-icon']}/>
        </span>
      </li>
    )
  };

  const NextPage = () => {
    if (disableArrows) return null;

    return (
      <li className={styles['pagination__item']}>
        <span
          onClick={() => onPageChanged(currentPage + 1)}
          className={cn(styles['pagination__link'], currentPage === pagesCount && styles['pagination__link_disabled'])}
        >
          <Icon content="chevron-right" mix={styles['pagination__link-icon']}/>
        </span>
      </li>
    )
  };

  const LastPage = () => {
    if (pagesCount < pagerLimit || disableArrows) return null;
    return (
      <li className={cn(styles['pagination__item'], styles['pagination__item-last'])}>
        <span
          onClick={() => onPageChanged(pagesCount)}
          className={cn(styles['pagination__link'], currentPage === pagesCount && styles['pagination__link_disabled'])}
        >
          <Icon content="chevrons-right" mix={styles['pagination__link-icon']}/>
        </span>
      </li>
    )
  };

  const Debug = () => {
    if (!debug) return null;

    return (
      <div>
        <p>current: <strong>{currentPage}</strong>; totalItems: <strong>{totalItems}</strong></p>
        <p>pageSize: <strong>{pageSize}</strong>; pagerLimit: <strong>{pagerLimit}</strong>;
          pagesCount: <strong>{pagesCount}</strong></p>
        <p>left: <strong>{left}</strong>; right: <strong>{right}</strong></p>
        <p>start: <strong>{start}</strong>; end: <strong>{end}</strong></p>
      </div>
    )
  };

  if (pagesCount === 1) return null;

  return (
    <>
      <Debug/>

      <nav className={styles['pagination']}>
        <ul className={styles["pagination__list"]}>
          <FirstPage/>
          <PrevPage/>
          {items}
          <NextPage/>
          <LastPage/>
        </ul>
      </nav>
    </>
  )
};

export default React.memo(Pagination)
