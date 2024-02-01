import React from 'react';
import Checkbox from '../../ui/components/Checkbox/Checkbox';
import CheckboxGroup from '../../ui/components/CheckboxGroup/CheckboxGroup';
import Page from '../components/Page';
import Demo from '../components/Demo';

export const CheckboxPage = () => {
  return (
    <Page title="Checkbox">


      <Demo
        title="Default checkbox"
        preview={<Checkbox name={"check01"}>Checkbox</Checkbox>}
        code={`
<Checkbox name={"check01"}>Checkbox</Checkbox>        
        `}
      />

      <Demo
        title="Checked"
        preview={<Checkbox name={"check02"} checked>Checkbox</Checkbox>}
        code={`
<Checkbox name={"check02"} checked>Checkbox</Checkbox>        
        `}
      />

      <Demo
        title="Disabled"
        preview={<Checkbox name={"check03"} disabled>Checkbox</Checkbox>}
        code={`
<Checkbox name={"check03"} disabled>Checkbox</Checkbox>        
        `}
      />

      <Demo
        title="Checkbox Group"
        preview={
          <CheckboxGroup label="Horizontal (default) checkbox group">
            <Checkbox name={"check04"}>Checkbox</Checkbox>
            <Checkbox name={"check05"}>Checkbox</Checkbox>
            <Checkbox name={"check06"}>Checkbox</Checkbox>
          </CheckboxGroup>
        }
        code={`
<CheckboxGroup label="Horizontal (default) checkbox group">
  <Checkbox name={"check04"}>Checkbox</Checkbox>
  <Checkbox name={"check05"}>Checkbox</Checkbox>
  <Checkbox name={"check06"}>Checkbox</Checkbox>
</CheckboxGroup>        
        `}
      />

      <Demo
        title="Vertical checkbox group"
        preview={
          <CheckboxGroup direction="vertical" label="Vertical checkbox group">
            <Checkbox name={"check07"}>Checkbox</Checkbox>
            <Checkbox name={"check08"}>Checkbox</Checkbox>
            <Checkbox name={"check09"}>Checkbox</Checkbox>
          </CheckboxGroup>
        }
        code={`
<CheckboxGroup direction="vertical" label="Vertical checkbox group">
  <Checkbox name={"check07"}>Checkbox</Checkbox>
  <Checkbox name={"check08"}>Checkbox</Checkbox>
  <Checkbox name={"check09"}>Checkbox</Checkbox>
</CheckboxGroup>        
        `}
      />
    </Page>
  )
}
