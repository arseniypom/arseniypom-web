import React from 'react';
import resumePdf from '../docs/APomazkov-resume_eng.pdf';

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
