import React from 'react';
import TextareaField from '../../ui/components/TextareaField';
import Page from '../components/Page';
import Demo from '../components/Demo';

const TextAreaPage = () => {
  return (
    <Page title="TextArea">

      <Demo
        title="Textarea"
        preview={
          <TextareaField
            label="Simple textarea"
            id="txt01" name="txt01"
            placeholder="Message"
          />
        }
        code={`
<TextareaField
  label="Simple textarea"
  id="txt01" name="txt01"
  placeholder="Message"/>          
          `}
      />

      <Demo
        title="With note"
        preview={
          <TextareaField
            label="Textarea with note"
            id="txt02" name="txt02"
            note="Tell us about your skills."/>
        }
        code={`
<TextareaField
  label="Textarea with note"
  id="txt02" name="txt02"
  note="Tell us about your skills."/>
          `}
      />

      <Demo
        title="With error"
        preview={
          <TextareaField
            label="Textarea with error"
            id="txt03" name="txt03"
            error="Tell us about your skills."/>
        }
        code={`
<TextareaField
  label="Textarea with error"
  id="txt03" name="txt03"
  error="Tell us about your skills."/>
        `}
      />

      <Demo
        title="Disabled"
        preview={
          <TextareaField
            label="Textarea disabled"
            id="txt04" name="txt04"
            disabled
          />
        }
        code={`
<TextareaField
  label="Textarea disabled"
  id="txt04" name="txt04"
  disabled
/>
        `}
      />

      <Demo
        title="Animated label"
        preview={
          <TextareaField
            label="Animated label"
            id="txt05" name="txt05"
            animateLabel
          />
        }
        code={`
<TextareaField
  label="Animated label"
  id="txt05" name="txt05"
  animateLabel
  onChange={onAnimateInputChange}
  error={demoError}/>
        `}
      />
    </Page>
  );
};

export default TextAreaPage;
