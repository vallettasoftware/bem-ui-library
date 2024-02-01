import React, { useState } from 'react';
import Page from '../components/Page';
import Demo from '../components/Demo';
import Pagination from '../../ui/components/Pagination';

const PaginationPage = () => {
  const [current, setCurrent] = useState(1);

  const handleChange = val => {
    setCurrent(val)
  };


  return (
    <Page title="Pagination">
      <Demo
        title="Default pagination"
        preview={
          <>
            <p>items: 87, pagerLimit: 5 (default)</p>
            <Pagination
              currentPage={current}
              totalItems={87}
              onPageChanged={handleChange}
            />
          </>
        }
        code={`
<Pagination
  currentPage={current}
  totalItems={87}
  onPageChanged={handleChange}
/>        
        `}
        codeOpened={true}
      />

      <Demo
        title="Without first/last links"
        preview={
          <>
            <p>items: 11. Forward/Back links are not displayed if not needed.</p>
            <Pagination
              currentPage={current}
              totalItems={11}
              onPageChanged={handleChange}
            />
          </>
        }
        code={`
<Pagination
  currentPage={current}
  totalItems={11}
  onPageChanged={handleChange}
/>        
        `}
      />

      <Demo
        title="Custom  pagerLimit"
        preview={
          <>
            <p>items: 128. Pagination limit - 9. (default - 5)</p>
            <Pagination
              currentPage={current}
              totalItems={128}
              onPageChanged={handleChange}
              pagerLimit={9}
              pageSize={2}
            />
          </>
        }
        code={`
<Pagination
  currentPage={current}
  totalItems={128}
  onPageChanged={handleChange}
  pagerLimit={9}
  pageSize={2}
/>        
        `}
      />

      <Demo
        title="Disable arrows"
        preview={
          <>
            <Pagination
              currentPage={current}
              totalItems={89}
              pagerLimit={7}
              onPageChanged={handleChange}
              disableArrows={true}
            />
          </>
        }
        code={`
<Pagination
  currentPage={current}
  totalItems={89}
  pagerLimit={7}
  onPageChanged={handleChange}
  disableArrows={true}
/> 
        `}
      />

      <Demo
        title="Just one page"
        preview={
          <>
            <p>items: 9. Pagination will not be displayed.</p>
            <Pagination
              currentPage={current}
              totalItems={9}
              onPageChanged={handleChange}
            />
          </>
        }
        code={`
<Pagination
  currentPage={current}
  totalItems={9}
  onPageChanged={handleChange}
/>
        `}
      />
    </Page>
  )
};

export default PaginationPage;
