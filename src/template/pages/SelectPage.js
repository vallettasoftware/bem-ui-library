import React from 'react';
import { Option, Select } from '../../ui/components/Select';
import Page from '../components/Page';
import Demo from '../components/Demo';

const SelectPage = () => {
  const handleChange = (value) => {
    console.log('val', value)
  };

  return (
    <Page title="Select">

      <Demo
        title="Simple select"
        preview={
          <Select placeholder="Select item" defaultValue={'Item 1'}>
            <Option value={10}>Item 1</Option>
            <Option value={20}>Item 2</Option>
            <Option value={30}>Item 3</Option>
          </Select>

        }
        code={`
<Select placeholder="Select item" defaultValue={'Item 1'}>
  <Option value={10}>Item 1</Option>
  <Option value={20}>Item 2</Option>
  <Option value={30}>Item 3</Option>
</Select>        
        `}
      />

      <Demo
        title=""
        preview={
          <Select placeholder="Select item" multiselect onChange={handleChange} defaultValue={['Item 3']}>
            <Option value={'Item 1'}>Item 1</Option>
            <Option value={'Item 2'}>Item 2</Option>
            <Option value={'Item 3'}>Item 3</Option>
            <Option value={'Item 4'}>Item 4</Option>
            <Option value={'Item 5'}>Item 5</Option>
          </Select>
        }
        code={`
<Select placeholder="Select item" multiselect onChange={handleChange} defaultValue={['Item 3']}>
  <Option value={'Item 1'}>Item 1</Option>
  <Option value={'Item 2'}>Item 2</Option>
  <Option value={'Item 3'}>Item 3</Option>
  <Option value={'Item 4'}>Item 4</Option>
  <Option value={'Item 5'}>Item 5</Option>
</Select>
        `}
      />

      <Demo
        title="Multiselect with checkboxes"
        preview={
          <Select placeholder="Select item" multiselect checkbox onChange={handleChange}
                  defaultValue={['Item 1', 'Item 2']}>
            <Option value={'Item 1'}>Item 1</Option>
            <Option value={'Item 2'}>Item 2</Option>
            <Option value={'Item 3'}>Item 3</Option>
            <Option value={'Item 4'}>Item 4</Option>
            <Option value={'Item 5'}>Item 5</Option>
          </Select>
        }
        code={`
<Select placeholder="Select item" multiselect checkbox onChange={handleChange}
        defaultValue={['Item 1', 'Item 2']}
>
  <Option value={'Item 1'}>Item 1</Option>
  <Option value={'Item 2'}>Item 2</Option>
  <Option value={'Item 3'}>Item 3</Option>
  <Option value={'Item 4'}>Item 4</Option>
  <Option value={'Item 5'}>Item 5</Option>
</Select>
        `}
      />
    </Page>
  );
};

export default SelectPage;
