import shortid from 'shortid';
import types from './contacs-types';

const addContact = ({name, number}) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = todoId => ({
  type: types.DELETE,
  payload: todoId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };