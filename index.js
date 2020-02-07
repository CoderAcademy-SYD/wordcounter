function WordCounter(factory, root) {
  const state = {
    text: '',
    count: 0
  }

  function countWords(text) {
    return text ? text.match(/\w+/g).length : 0;
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

  editor.addEventListener('keyup', function(e) {
    let words = e.target.value;
    let count = countWords(words);
    state.text = words;
    state.count = count;
    counter.innerHTML = state.count;
    progress.value = state.count;
  });

  function saveWords() {
    return new Promise((resolve, reject) => {
      // go to an api
      // if successful, called resolve()
      // if unsuccessful, call reject()
      setTimeout(function() {
        if (Math.random() > 0.5) {
          resolve('success');
        } else {
          reject('failure');
        }
      }, 750)
    });
  }

  // let button = document.getElementById('save-button');
  // button.addEventListener('click', function(e) {
  //   e.preventDefault();
    // saveWords().
    //   then(message => {
    //     let messageNode = document.createTextNode(message);
    //     let saveStatus = document.getElementById('save-status');
    //     saveStatus.append(messageNode);
    //     setTimeout(function() {
    //       messageNode.remove();
    //     }, 1000)
    //   }).
    //   catch(message => {
    //     let messageNode = document.createTextNode(message);
    //     let saveStatus = document.getElementById('save-status');
    //     saveStatus.append(messageNode);
    //     setTimeout(function() {
    //       messageNode.remove();
    //     }, 1000)
    //   });
  // });
}

WordCounter(
  document.createElement.bind(document),
  document.getElementById('wordcounter-1')
);

WordCounter(
  document.createElement.bind(document),
  document.getElementById('wordcounter-2')
);
