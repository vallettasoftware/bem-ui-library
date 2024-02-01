import React from 'react';
import Slider from '../../ui/components/Slider';
import Page from '../components/Page';
import Demo from '../components/Demo';

const SliderPage = () => {

  const handleChange = (value) => {
    console.log(value)
  }

  return (
    <Page title="Slider">

      <Demo
        title="Single slider"
        preview={
          <Slider
            defaultValue={3}
            min={2}
            max={18}
          />
        }
        code={`
<Slider
  defaultValue={3}
  min={2}
  max={18}
/>        
        `}
      />

      <Demo
        title="Range slider"
        preview={
          <Slider
            range
            defaultValue={[15, 50]}
            defaultText={'Points'}
            onChange={handleChange}
          />
        }
        code={`
<Slider
  range
  defaultValue={[15, 50]}
  defaultText={'Points'}
  onChange={handleChange}
/>
        `}
      />

      <Demo
        title="Without text"
        preview={
          <Slider
            isHideText
          />
        }
        code={`
<Slider
  isHideText
/>
        `}
      />
    </Page>
  )
};

export default SliderPage;
