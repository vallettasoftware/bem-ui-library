import React, { useState } from 'react';
import Radio from '../../ui/components/Radio/Radio';
import { Code } from '../components/Code';
import Button from '../../ui/components/Button';
import ButtonGroup from '../../ui/components/ButtonGroup/ButtonGroup';
import RadioGroup from '../../ui/components/RadioGroup/RadioGroup';
import Page from '../components/Page';
import Demo from '../components/Demo';

export const ButtonsPage = () => {

  const [view, setView] = useState('');

  const setStat = (val) => {
    setView(val)
  };

  return (
    <Page title="Buttons">

      <Demo
        title="Simple button"
        preview={
          <Button>Simple Button</Button>
        }
        code={`
<Button>Simple Button</Button>
        `}
      />

      <Demo
        title="Disabled button"
        preview={<Button disabled>Disabled button</Button>}
        code={`
<Button disabled>Disabled button</Button>        
        `}
      />

      <Demo
        title="Primary button"
        preview={
          <ButtonGroup>
            <Button mod="primary">Primary</Button>
            <Button mod="primary" disabled>Primary</Button>
          </ButtonGroup>
        }
        code={`
<ButtonGroup>
  <Button mod="primary">Primary</Button>
  <Button mod="primary" disabled>Primary</Button>
</ButtonGroup>        
        `}
      />

      <Demo
        title="Button with icon"
        preview={
          <ButtonGroup>
            <Button mod="primary" icon="calendar">Button with icon</Button>
            <Button icon="minus"></Button>
            <Button icon="date" size="small"/>
          </ButtonGroup>
        }
        code={`
<ButtonGroup>
  <Button mod="primary" icon="calendar">Button with icon</Button>
  <Button icon="minus"></Button>
  <Button icon="date" size="small"/>
</ButtonGroup>
        `}
      />

      <Demo
        title="Reset button"
        preview={<Button type="reset">Reset Button</Button>}
        code={`
<Button type="reset">Reset Button</Button>        
        `}
      />

      <Demo
        title="Links button"
        preview={
          <ButtonGroup>
            <Button href="#">Simple Button</Button>
            <Button href="#" disabled>Disabled link</Button>
            <Button href="#" mod="primary">Primary button</Button>
          </ButtonGroup>
        }
        code={`
<ButtonGroup>
  <Button href="#">Simple Button</Button>
  <Button href="#" disabled>Disabled link</Button>
  <Button href="#" mod="primary">Primary button</Button>
</ButtonGroup>          
        `}
      />

      <Demo
        title="Button group"
        preview={
          <ButtonGroup>
            <Button>btn</Button>
            <Button>btn</Button>
            <Button>btn</Button>
          </ButtonGroup>
        }
        code={`
 <ButtonGroup>
  <Button>btn</Button>
  <Button>btn</Button>
  <Button>btn</Button>
</ButtonGroup>
        `}
      />

      <Demo
        title="Button group tight"
        preview={
          <>
            <ButtonGroup tight>
              <Button>btn</Button>
              <Button>btn</Button>
              <Button>btn</Button>
            </ButtonGroup>

            <br/>

            <ButtonGroup tight>
              <Button mod="primary">btn</Button>
              <Button mod="primary">btn</Button>
              <Button mod="primary">btn</Button>
            </ButtonGroup>
          </>
        }
        code={`
<ButtonGroup tight>
  <Button>btn</Button>
  <Button>btn</Button>
  <Button>btn</Button>
</ButtonGroup>

<ButtonGroup tight>
  <Button mod="primary">btn</Button>
  <Button mod="primary">btn</Button>
  <Button mod="primary">btn</Button>
</ButtonGroup>        
        `}
      />

      <Demo
        title="Button group. Vertical"
        preview={
          <>
            <ButtonGroup direction="vertical">
              <Button>First</Button>
              <Button>Second</Button>
              <Button>Third</Button>
            </ButtonGroup>

            <br/>

            <ButtonGroup direction="vertical" tight>
              <Button mod="primary">First</Button>
              <Button mod="primary">Second</Button>
              <Button mod="primary">Third</Button>
            </ButtonGroup>
          </>

        }
        code={`
<ButtonGroup direction="vertical">
  ...
</ButtonGroup>   

<ButtonGroup direction="vertical" tight>
...
</ButtonGroup>                  
        `}
      />


      <div className="demo">
        <header className="demo__header">
          <h2 className="demo__title">Demo</h2>
        </header>

        <div className="demo__content">
          <div className="demo__preview">
            <RadioGroup>
              <Radio defaultChecked value='0' id="r001" name='group2' onChange={_ => setStat('')}>Initial</Radio>
              <Radio value='1' id="r002" name='group2' onChange={_ => setStat('disabled')}>Disabled</Radio>
              <Radio value='2' id="r003" name='group2' onChange={_ => setStat('load')}>Loading</Radio>
              <Radio value='2' id="r004" name='group2' onChange={_ => setStat('all')}>Disabled Loading</Radio>
            </RadioGroup>

            <br/>

            <ButtonGroup>
              <Button
                disabled={view === 'disabled' || view === 'all'}
                isLoading={view === 'load' || view === 'all'}
              >Button</Button>
              <Button
                mod="primary"
                disabled={view === 'disabled' || view === 'all'}
                isLoading={view === 'load' || view === 'all'}
              >Button</Button>
            </ButtonGroup>

          </div>

          <div className="demo__code code-preview code-preview_opened">

            <h3 className="code-preview__title">Code</h3>

            <Code mix="code-preview__content">{`\n<Button 
    value="Button" ${view === 'disabled' || view === 'all' ? '\n\tdisabled' : ''} ${view === 'load' || view === 'all' ? '\n\tisLoading' : ''}
/>\n\n`}</Code>
          </div>
        </div>
      </div>
    </Page>
  )
};
