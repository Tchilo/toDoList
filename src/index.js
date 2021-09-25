import './style.css';
import completed from './status';
import {
  toStorage,
  apply,
  clearAll,
  updateIndices,
} from './crud';

const grab = (e, isId = false, qAll = false) => {
  if (isId) {
    return document.getElementById(e);
  }
  if (qAll) {
    return document.querySelectorAll(`.${e}`);
  }
  return document.querySelector(`.${e}`);
};

function cv3(n) {
  const elements = [];
  n.forEach((e) => {
    const parts = e.split('.');
    const el = parts[0];
    const classes = parts[1];
    const element = document.createElement(el);
    element.className = classes;
    elements.push(element);
  });
  return elements;
}

const todo = [];

const work = JSON.parse(localStorage.getItem('collection'));

work.forEach((e, i) => {
  const elements = cv3([
    'li.li',
    'div.box',
    'input',
    'div',
    'span.txt',
    'div.del',
    'span.material-icons btn delete',
  ]);

  elements[2].type = 'checkbox';
  elements[2].checked = work[i].completed;

  elements[2].addEventListener('change', () => completed(work, i));

  elements[6].innerText = 'delete';
  elements[4].innerText = work[i].description;
  elements[1].appendChild(elements[2]);
  elements[3].appendChild(elements[4]);
  elements[5].appendChild(elements[6]);

  elements[0].appendChild(elements[1]);
  elements[0].appendChild(elements[3]);
  elements[0].appendChild(elements[5]);

  elements[4].contentEditable = true;

  elements[4].addEventListener('input', (e) => {
    apply(e.target.textContent, i);
  });

  grab('todo-list', true).appendChild(elements[0]);
});

if (localStorage.getItem('collection') === null) {
  localStorage.setItem('collection', JSON.stringify(todo));
}

const form = grab('form', true);
const input = grab('input', true);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todos = JSON.parse(localStorage.getItem('collection'));
  const todo = {
    description: input.value,
    completed: false,
    index: (todos.length > 0) ? todos.length + 1 : 1,
  };

  const food = localStorage.getItem('collection');
  if (food !== undefined) {
    const realFood = JSON.parse(food);
    realFood.push(todo);
    toStorage(realFood);
    window.location.reload();
  } else {
    const realFood = [];
    realFood.push(todo);
    toStorage(realFood);
    window.location.reload();
  }
});

const deleteBtn = document.querySelectorAll('.delete');
deleteBtn.forEach((deleteItem) => {
  deleteItem.addEventListener('click', (e) => {
    e.preventDefault();
    const todos = JSON.parse(localStorage.getItem('collection'));
    todos.splice(e.target.index, 1);
    localStorage.setItem('collection', JSON.stringify(todos));
    window.location.reload();
  });
});

const deleteBtnAll = grab('deleteAll', true);
deleteBtnAll.addEventListener('click', clearAll);

// updateIndices(() => {
//   cv3();
// });

updateIndices(() => {
  console.log('gggg');
});