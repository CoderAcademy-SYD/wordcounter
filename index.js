function countWords(text) {
  return text ? text.match(/\w+/g).length : 0;
}

let editor = document.getElementById('editor');
editor.addEventListener('keyup', function(e) {
  let words = e.target.value;
  let count = countWords(words);
  let counter = document.getElementById('counter');
  let progress = document.getElementById('progress');

  counter.innerHTML = count;
  progress.value = count;
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

let button = document.getElementById('save-button');
button.addEventListener('click', function(e) {
  e.preventDefault();
  saveWords().
    then(message => {
      let messageNode = document.createTextNode(message);
      let saveStatus = document.getElementById('save-status');
      saveStatus.append(messageNode);
      setTimeout(function() {
        messageNode.remove();
      }, 1000)
    }).
    catch(message => {
      console.log(message);
    });
});

