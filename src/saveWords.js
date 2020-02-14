import { SUCCESS, FAILURE } from './saveStatus'

export default function saveWords() {
  return new Promise((resolve, reject) => {
    // go to an api
    // if successful, called resolve()
    // if unsuccessful, call reject()
    setTimeout(function() {
      if (Math.random() > 0.5) {
        resolve(SUCCESS);
      } else {
        reject(FAILURE);
      }
    }, 750)
  });
}
