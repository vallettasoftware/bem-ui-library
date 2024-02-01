import React, { useEffect, useState } from 'react';
import { AutoComplete } from '../../ui/components/AutoComplete';
import Page from '../components/Page';
import Demo from '../components/Demo';

export const AutoCompletePage = () => {
  const [data, setData] = useState([]);

  useEffect(_ => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData([...json].map(i => i.title)));
  }, [])

  return (
    <Page title="AutoComplete">
      <Demo
        preview={
          <AutoComplete
            label="Activity Title"
            data={data}
          />
        }
        code={`
<AutoComplete
  label="Activity Title"
  data={data}
/>
        `}
      />
    </Page>
  )
};
