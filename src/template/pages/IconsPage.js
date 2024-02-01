import React, { useState } from 'react';
import Button from '../../ui/components/Button';
import Page from '../components/Page';
import Demo from '../components/Demo';
import DemoIcon from '../components/DemoIcon';
import ButtonGroup from '../../ui/components/ButtonGroup/ButtonGroup';
import { iconsData } from '../../ui/components/Icon/Icon';
import TextField from '../../ui/components/TextField';

export const IconsPage = () => {
  const data = iconsData
    .map(i => i.label)
    .sort();

  const [current, setCurrent] = useState('cross');
  const [filteredData, setFilteredData] = useState(data);
  const [searchValue, setSearchValue] = useState('');

  const inputHandle = (filter) => {
    setSearchValue(filter);
    const filtered = data.filter(item => {
      return item
        .toLowerCase()
        .indexOf(filter.toLowerCase()) > -1
    });
    setFilteredData(filtered);
  };

  const clearHandle = () => {
    setFilteredData(data);
    setSearchValue('');
  };

  return (
    <Page title="Icons">

      <div className="search-icon">
        <TextField
          onChange={(e) => inputHandle(e.target.value)}
          icon="search"
          button={searchValue ? "Clear" : null}
          buttonIcon="delete"
          buttonOnClick={clearHandle}
          value={searchValue}
        />

      </div>

      <div className="demo-icon-list">
        {filteredData.map((item, idx) => (
          <div className="demo-icon-list__item" key={idx}>
            <DemoIcon
              current={current}
              setCurrent={setCurrent}
              content={item}
              mix="demo-icon__icon"
            />
          </div>
        ))}
      </div>

      <Demo
        title="Examples"
        preview={
          <ButtonGroup>
            <Button icon={current} size="small"/>
            <Button icon={current} size="small" mod="primary"/>

            <Button icon={current} size="small">{current}</Button>
            <Button icon={current} size="small" mod="primary">{current}</Button>
          </ButtonGroup>
        }
        code={`
<Button icon="${current}" size="small" />
<Button icon="${current}" size="small">${current}</Button>
        `}
        codeOpened={true}
      />
    </Page>
  )
};
