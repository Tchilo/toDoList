export const toStorage = (bar) => {
  localStorage.setItem('collection', JSON.stringify(bar));
};

export const apply = (change, i) => {
  const todosList = JSON.parse(localStorage.getItem('collection'));
  todosList[i].description = change;
  localStorage.setItem('collection', JSON.stringify(todosList));
};

// export const clearAll = (work) => {
//   const todosList = JSON.parse(localStorage.getItem('collection'));
//   todosList.forEach(element => {
//     if (element.completed === true) {
//       console.log(element);
//     }
//   });
//   // console.log(todosList);
//   // console.log(work[i].completed.value);
// }
export function clearAll() {
  let todosList = JSON.parse(localStorage.getItem('collection'));
  if (todosList !== null && todosList.length > 0) {
    function check(item) {
      if (!item.completed) {
        return item
      }
    }

    todosList = todosList.filter(check);

    localStorage.setItem('collection', JSON.stringify(todosList))
    location.reload();
  }
}