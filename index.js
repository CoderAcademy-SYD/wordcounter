function Counter({ count }) {
  const count = obj.count;
  return (
    <p className="mb2">
      Word Count: {count}
    </p>
  );
}

function ProgressBar({ completion }) {
  const percentage = completion * 100;
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

function Editor({ text }) {
  return (
    <div className="flex flex-column mv2">
      <label htmlFor="editor" className="mv2">
        Enter your text:
      </label>
      <textarea value={text} id="editor"/>
    </div>
  );
}

<WordCounter>
  <Editor/>
  <Counter/>
  <ProgressBar/>
</WordCounter>
