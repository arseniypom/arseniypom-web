import React from 'react';
import resumePdf from '../docs/ArseniyPomazkov_Resume.pdf';

function ResumeLink() {
  return (
    <a href={resumePdf} target="_blank" rel="noreferrer">
      <div className="resume-link">
        <p>Resume</p>
      </div>
    </a>
  )
}

export default ResumeLink
