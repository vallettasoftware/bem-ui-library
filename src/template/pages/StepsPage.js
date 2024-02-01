import React from 'react';
import Steps from '../../ui/components/Steps';
import Page from '../components/Page/Page';
import Demo from '../components/Demo';

const StepsPage = () => {
  const items = ["Step 01", "Step 02", "Step 03", "Step 04", "Step 05"];
  return (
    <Page title="Steps">

      <Demo
        preview={
          <Steps
            items={items}
            current={2}
          />
        }
        code={`
const items = ["Step 01", "Step 02", "Step 03", "Step 04", "Step 05"];        
        
<Steps
  items={items}
  current={2}
/>        
        `}
      />
    </Page>
  );
};

export default StepsPage; 
