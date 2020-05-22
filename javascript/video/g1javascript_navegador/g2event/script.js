function getEl(selector) {
  return document.querySelector(selector);
}

function addEvent(element, eventName, actionUnderhood) {
  element.addEventListener(eventName, actionUnderhood);
} 

const mainTitle = getEl('h1');
const buttonToDoClick = getEl('button');

function showAlert() {
  alert('enter');
}
