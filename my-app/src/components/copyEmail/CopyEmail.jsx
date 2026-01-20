import React from 'react';
import { useState } from "react";
import './copyEmail.css';

function CopyEmail() {
  const email = "atlascoltrain@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button onClick={copyToClipboard}>
      {copied ? "Email Copied!" : email}
    </button>
  );
}

export default CopyEmail;