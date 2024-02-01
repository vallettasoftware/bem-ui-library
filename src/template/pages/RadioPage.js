import React, { useState } from 'react';
import Radio from '../../ui/components/Radio/Radio';
import RadioGroup from '../../ui/components/RadioGroup/RadioGroup';
import Page from '../components/Page';
import Demo from '../components/Demo';

export const RadioPage = () => {

  const [demoValue, setDemoValue] = useState('demo value');

  const onChange = (val) => {
    setDemoValue(val);
  };

  return (
    <Page title="Radio page">
      <Demo
        title="Radios"
        preview={
          <RadioGroup>
            <Radio
              checked={demoValue === 'First'}
              id="r01" name="radio01" onChange={() => onChange('First')}>First</Radio>
            <Radio
              checked={demoValue === 'Second'}
              id="r02" name="radio01" onChange={() => onChange('Second')}>Second</Radio>
            <Radio
              checked={demoValue === 'Third'}
              id="r03" name="radio01" onChange={() => onChange('Third')}>Third</Radio>
          </RadioGroup>
        }
        code={`
<RadioGroup>
  <Radio id="r01" name="radio01" onChange={() => onChange('First')}>First</Radio>
  <Radio id="r02" name="radio01" onChange={() => onChange('Second')}>Second</Radio>
  <Radio id="r03" name="radio01" onChange={() => onChange('Third')}>Third</Radio>
</RadioGroup>        
        `}
      >
        <div style={{ margin: '24px 16px 16px', padding: '16px', border: '1px solid #ccc' }}>{demoValue}</div>
      </Demo>

      <Demo
        title="Radio checked"
        preview={<Radio checked>Radio checked</Radio>}
        code={`
<Radio checked>Radio checked</Radio>        
        `}
      />

      <Demo
        title="Radio disabled"
        preview={<Radio disabled>Radio disabled</Radio>}
        code={`
<Radio disabled>Radio disabled</Radio>        
        `}
      />

      <Demo
        title="Radio group. Horizontal (default)"
        preview={
          <RadioGroup label="Horizontal radio group">
            <Radio id="r04" name="radio02">First</Radio>
            <Radio id="r05" name="radio02">Second</Radio>
            <Radio id="r06" name="radio02">Third</Radio>
          </RadioGroup>
        }
        code={`
<RadioGroup label="Horizontal radio group">
  <Radio id="r04" name="radio02">First</Radio>
  <Radio id="r05" name="radio02">Second</Radio>
  <Radio id="r06" name="radio02">Third</Radio>
</RadioGroup>
        `}
      />

      <Demo
        title="Radio group. Vertical"
        preview={
          <RadioGroup label="Vertical radio group" direction="vertical">
            <Radio id="r07" name="radio03">First</Radio>
            <Radio id="r08" name="radio03">Second</Radio>
            <Radio id="r09" name="radio03">Third</Radio>
          </RadioGroup>
        }
        code={`
<RadioGroup label="Vertical radio group" direction="vertical">
  <Radio id="r07" name="radio03">First</Radio>
  <Radio id="r08" name="radio03">Second</Radio>
  <Radio id="r09" name="radio03">Third</Radio>
</RadioGroup>
        `}
      />
    </Page>
  )
};
