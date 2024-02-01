import React from 'react';
import cn from 'classnames';

import './Page.scss';

const Page = (props) => {

  const {type, title} = props;

  const PageHeader = () => {
    if (!title) return null;

    return (
      <header className="page__header">
        <h2 className="page__title">{title}</h2>
      </header>
    )
  };

  return (
    <section className={cn('page', type && `page_type_${type}`)}>
      <PageHeader/>

      <div className="page__content">
        {props.children}
        {/*{props.children.map(item => item)}*/}
      </div>
    </section>
  );
};

export default Page;
