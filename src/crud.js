export function updateIndices(callback) {
  const tasks = JSON.parse(localStorage.getItem('collection'));

  if (tasks !== undefined && tasks.length > 0) {
    for (let j = 0; j < tasks.length; j + 1) {
      const task = tasks[j];
      task.index = j + 1;
    }

    localStorage.setItem('collection', JSON.stringify(tasks));
    callback();
  }

  // if (tasks !== null && tasks.length > 0) {
  //   for (let k = 0; k < tasks.length; k + 1) {
  //     const item = tasks[k];
  //     item.index = k + 1;
  //     updatedTasks.push(item);

  //     if (k === tasks.length - 1) {
  //       localStorage.setItem('collection', JSON.stringify(updatedTasks));
  //       callback();
  //     }
  //   }
  // }
}

export const toStorage = (bar) => {
  localStorage.setItem('collection', JSON.stringify(bar));
};

export const apply = (change, i) => {
  const todosList = JSON.parse(localStorage.getItem('collection'));
  todosList[i].description = change;
  localStorage.setItem('collection', JSON.stringify(todosList));
};

export function clearAll() {
  let todosList = JSON.parse(localStorage.getItem('collection'));
  if (todosList !== null && todosList.length > 0) {
    function check(item) {
      if (!item.completed) {
        return item;
      }
    }

    todosList = todosList.filter(check);

    localStorage.setItem('collection', JSON.stringify(todosList));
    window.location.reload();
  }
}

// export function bin() {
//   let todosList = JSON.parse(localStorage.getItem('collection'));

// }