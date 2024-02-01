import React, { useState } from 'react';
import { Modal } from '../../ui/components/Modal';
import Button from '../../ui/components/Button';
import Page from '../components/Page';
import Demo from '../components/Demo';

export const ModalPage = () => {
  const [visible, setVisible] = useState(false)

  return (
    <Page title="Modal">
      <Demo
        title="Default modal"
        preview={
          <>
            <Button onClick={_ => setVisible(!visible)}>Show popup</Button>

            <Modal
              visible={visible}
              close={_ => setVisible(!visible)}
              title="Modal Title"
              footer={[
                <Button onClick={_ => setVisible(!visible)}>Cancel</Button>,
                <Button mod="primary">Send</Button>
              ]}>
              <p>Description modal popup</p>
            </Modal>
          </>
        }
        code={`
const [visible, setVisible] = useState(false);

<Button onClick={_ => setVisible(!visible)}>Show popup</Button>

<Modal
  visible={visible}
  close={_ => setVisible(!visible)}
  title="Modal Title"
  footer={[
    <Button onClick={_ => setVisible(!visible)}>Cancel</Button>,
    <Button mod="primary">Send</Button>
  ]}>
  <p>Description modal popup</p>
</Modal>
        `}
      />
    </Page>
  )
};
