import React from 'react';
import Switch from '../../ui/components/Switch';
import CheckboxGroup from '../../ui/components/CheckboxGroup/CheckboxGroup';
import SwitchTabs from '../../ui/components/SwitchTabs';
import Page from '../components/Page';
import Demo from '../components/Demo';

const swTabsData = [
  { label: 'Yearly', id: 'swt-01', checked: true },
  { label: 'Monthly', id: 'swt-02' },
  { label: 'Daily', id: 'swt-03' },
];

const swTabsData2 = [
  { label: 'Yearly', id: 'swt-04', value: 'yearly' },
  { label: 'Monthly', id: 'swt-05', value: 'monthly' },
];

export const SwitchPage = () => {
  return (
    <Page title="Switch">
      <Demo
        title="Default"
        preview={<Switch name="sw01" id="sw01">Switch</Switch>}
        code={`
<Switch name="sw01" id="sw01">Switch</Switch>
        `}
      />

      <Demo
        title="Checked (without label)"
        preview={<Switch name="sw02" id="sw02" checked/>}
        code={`
<Switch name="sw02" id="sw02" checked/>
        `}
      />

      <Demo
        title="Checked, disabled"
        preview={
          <CheckboxGroup>
            <Switch name="sw03" id="sw03" checked disabled>Switch</Switch>
            <Switch name="sw04" id="sw04" disabled/>
          </CheckboxGroup>
        }
        code={`
<CheckboxGroup>
  <Switch name="sw03" id="sw03" checked disabled>Switch</Switch>
  <Switch name="sw04" id="sw04" disabled/>
</CheckboxGroup>
        `}
      />

      <Demo
        title="Dynamic labels"
        preview={
          <CheckboxGroup>
            <Switch name="sw05" id="sw05" dynamicLabels/>
            <Switch name="sw06" id="sw06" dynamicLabels checked/>
          </CheckboxGroup>
        }
        code={`
<CheckboxGroup>
  <Switch name="sw05" id="sw05" dynamicLabels/>
  <Switch name="sw06" id="sw06" dynamicLabels checked/>
</CheckboxGroup>
        `}
      />

      <Demo
        title="Dynamic labels, disabled"
        preview={
          <CheckboxGroup>
            <Switch name="sw07" id="sw07" dynamicLabels disabled/>
            <Switch name="sw08" id="sw08" dynamicLabels checked disabled/>
          </CheckboxGroup>
        }
        code={`
<CheckboxGroup>
  <Switch name="sw07" id="sw07" dynamicLabels disabled/>
  <Switch name="sw08" id="sw08" dynamicLabels checked disabled/>
</CheckboxGroup>
        `}
      />

      <Demo
        title="Vertical group"
        preview={
          <CheckboxGroup direction="vertical">
            <Switch name="sw09" id="sw09">Switch</Switch>
            <Switch name="sw10" id="sw10">Switch 02</Switch>
          </CheckboxGroup>
        }
        code={`
<CheckboxGroup direction="vertical">
  <Switch name="sw09" id="sw09">Switch</Switch>
  <Switch name="sw10" id="sw10">Switch 02</Switch>
</CheckboxGroup>
        `}
      />

      <Demo
        title="SwitchTabs"
        preview={<SwitchTabs data={swTabsData2} name="swt-002" onChange={() => alert('change')}/>}
        code={`
const swTabsData2 = [
  { label: 'Yearly', id: 'swt-04', value: 'yearly' },
  { label: 'Monthly', id: 'swt-05', value: 'monthly' },
];        
        
<SwitchTabs data={swTabsData2} name="swt-002" onChange={onChange}/>
        `}
      />

      <Demo
        title="SwitchTabs, with default value"
        preview={<SwitchTabs data={swTabsData} name="swt-001"/>}
        code={`
const swTabsData = [
  { label: 'Yearly', id: 'swt-01', checked: true },
  { label: 'Monthly', id: 'swt-02' },
  { label: 'Daily', id: 'swt-03' },
];        
        
<SwitchTabs data={swTabsData} name="swt-001"/>        
        `}
      />

      <Demo
        title="SwitchTabs, disabled"
        preview={<SwitchTabs data={swTabsData} name="swt-003" disabled/>}
        code={`
<SwitchTabs data={swTabsData} name="swt-003" disabled/>
        `}
      />
    </Page>
  )
};
