import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icon from '../../ui/components/Icon';

export const Code = ({ mix, children, ...props }) => {

  const [copied, setCopied] = useState('');

  useEffect(_ => {
    Prism.highlightAll();
  });

  useEffect(_ => {
    if (copied) {
      const timer = setTimeout(_ => {
        setCopied('');
      }, 2500);
      return _ => clearTimeout(timer);
    }
  }, [copied]);

  const CopyStatus = () => {
    if (!copied) return null;
    return <p className="code-preview__copy-status">{copied}</p>
  };

  return (
    <pre className={mix}>
      <code className="language-javascript">
        {children}
      </code>

      <CopyToClipboard
        text={children}
        onCopy={_ => setCopied('Copied to clipboard')}
      >
        <button className="code-preview__copy-code" title="Copy to clipboard">
          <Icon content="copy" mix="code-preview__copy-icon"/>
        </button>
      </CopyToClipboard>

      <CopyStatus/>
    </pre>
  )
};
