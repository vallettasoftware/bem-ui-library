import React from 'react';
import Tabs from '../../ui/components/Tabs';
import Page from '../components/Page';
import Demo from '../components/Demo';

export const TabsPage = () => {
  return (
    <Page title="Tabs">

      <Demo
        title="Default tabs"
        preview={
          <Tabs defaultActive="2">
            <div title="Tab 1">Info 1</div>
            <div title="Tab 2">Info 2</div>
          </Tabs>
        }
        code={`
// mod="v1", direction="horizontal" - default values
          
<Tabs defaultActive="2">
  <div title="Tab 1">Info 1</div>
  <div title="Tab 2">Info 2</div>
</Tabs>
        `}
      />

      <Demo
        title="Tabs, v2"
        preview={
          <Tabs mod="v2">
            <div title="Tab 1">Info 1</div>
            <div title="Tab 2">Info 2</div>
            <div title="Tab 3">Info 3</div>
            <div title="Tab 4">Info 4</div>
            <div title="Tab 5">Info 5</div>
          </Tabs>
        }
        code={`
<Tabs mod="v2">
  <div title="Tab 1">Info 1</div>
  ...
</Tabs>
        `}
      />

      <Demo
        title="Tabs, v3"
        preview={
          <Tabs mod="v3">
            <div title="Tab 1">Info 1</div>
            <div title="Tab 2">Info 2</div>
            <div title="Tab 3">Info 3</div>
            <div title="Tab 4">Info 4</div>
            <div title="Tab 5">Info 5</div>
          </Tabs>
        }
        code={`
<Tabs mod="v3">
  <div title="Tab 1">Info 1</div>
  ...
</Tabs>
        `}
      />

      <Demo
        title="Vertical tabs"
        preview={
          <Tabs direction="vertical">
            <div title="Tab 1">Info 1</div>
            <div title="Tab 2">Info 2</div>
            <div title="Tab 3">Info 3</div>
          </Tabs>
        }
        code={`
<Tabs direction="vertical">
  <div title="Tab 1">Info 1</div>
  ...
</Tabs>
        `}
      />
    </Page>
  )
};
