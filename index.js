const STATUS_CREATED = 201;
const STATUS_BAD_REQUEST = 400;

function WordCounter(factory, root) {
  const state = {
    _text: '',
    _count: 0,
    _status: undefined,

    set text(t) {
      this._text = this.cleanText(t);
      this._count = countWords(this._text);
      render();
    },
    get text() {
      return this._text;
    },
    set status(s) {
      this._status = s;
      render();
    },
    get status() {
      return this._status;
    },
    get count() {
      return this._count;
    },
    cleanText: function(text) { return text.toUpperCase() }
  }

  function countWords(text) {
    return text ? text.match(/\w+/g).length : 0;
  }

  function render() {
    editor.value = state.text;
    counter.innerHTML = state.count;
    progress.value = state.count;
    saveStatus.innerHTML = state.status;
  }

  let form = factory('form');
  form.className = 'measure pa4 sans-serif';
  root.append(form);

  let editor = factory('textarea');
  form.append(editor);

  let counter = factory('span');
  form.append(counter);

  let progress = factory('progress');
  progress.className = 'bn';
  progress.setAttribute('max', 10);
  progress.setAttribute('value', 0);
  form.append(progress);

  let button = factory('button');
  button.className = "pv2 ph3";
  button.textContent = "Save";
  form.append(button);

  let saveStatus = factory('span')
  saveStatus.className = "pv2";
  form.append(saveStatus);

  editor.addEventListener('keyup', function(e) {
    state.text = e.target.value;
  });

  button.addEventListener('click', function(e) {
    e.preventDefault();
    saveWords().
      then(status => {
        state.status = status;
        // let messageNode = document.createTextNode(message);
        // saveStatus.append(messageNode);
        // setTimeout(function() {
        //   messageNode.remove();
        // }, 1000)
      }).
      catch(status => {
        state.status = status;
      });
  });

  function saveWords() {
    return new Promise((resolve, reject) => {
      // go to an api
      // if successful, called resolve()
      // if unsuccessful, call reject()
      setTimeout(function() {
        if (Math.random() > 0.5) {
          resolve(STATUS_CREATED);
        } else {
          reject(STATUS_BAD_REQUEST);
        }
      }, 750)
    });
  }
}

WordCounter(
  document.createElement.bind(document),
  document.getElementById('wordcounter-1')
);

WordCounter(
  document.createElement.bind(document),
  document.getElementById('wordcounter-2')
);
