import React from 'react';

function ProgressBar({ completion }) {
  const percentage = completion;
  return (
    <div className="mv2 flex flex-column">
      <label htmlFor="progress" className="mv2">
        Progress
      </label>
      <progress value={percentage} id="progress" className="bn">
        {percentage}
      </progress>
    </div>
  );
}

export default ProgressBar;
