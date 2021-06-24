import React from 'react';
import resumePdf from '../docs/resume.pdf';

function ResumeLink() {
  return (
    <a href={resumePdf} download="Resume A.Pomazkov.pdf">
      <div className="resume-link">
        <p>Resume</p>
      </div>
    </a>
  )
}

export default ResumeLink
