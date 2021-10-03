import shortid from 'shortid';
//экспорт библиотеки shortid для создания рандомных id

export const addUser = name => {
  const user = {
    id: shortid.generate(), // вызов функции генерации
    name,
  };
  console.log('user :>> ', user);
};
