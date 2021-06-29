import React from 'react';
import resumePdf from '../docs/resume_a_pomazkov.pdf';

function ResumeLink() {
  return (
    <a href={resumePdf} target="_blank">
      <div className="resume-link">
        <p>Resume</p>
      </div>
    </a>
  )
}

export default ResumeLink
