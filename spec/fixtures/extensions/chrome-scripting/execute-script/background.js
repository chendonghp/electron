/* global chrome */

function injectedFunction () {
  document.title = 'HEY HEY HEY';
  return document.title;
}

chrome.scripting.executeScript({
  target: { tabId: 1 },
  function: injectedFunction
}).then(() => {
  console.log('success');
}).catch(err => {
  console.log('chrome.scripting.executeScript failed: ', err);
});
