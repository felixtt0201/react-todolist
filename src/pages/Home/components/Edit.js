import { useState } from 'react';
import { v4 } from 'uuid';

const Edit = ({ todos, submittingStatus }) => {
  // todo
  const [todo, setTodo] = useState('');
  const todoChange = (e) => {
    setTodo(e.target.value);
  };

  // Date
  const [date, setDate] = useState('');
  const dateChange = (e) => {
    setDate(e.target.value);
  };

  // Time
  const [time, setTime] = useState('');
  const timeChange = (e) => {
    setTime(e.target.value);
  };

  console.log(time, date, todo);
  // addItem to list
  const addItem = () => {
    submittingStatus.current = true;
    todos(function (prevData) {
      return [
        {
          id: v4(),
          todo,
          date,
          time,
        },
        ...prevData,
      ];
    });
  };

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value={todo} onChange={todoChange} />
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間：</p>
      <input type="time" value={time} onChange={timeChange} />
      <button className="add" onClick={addItem}>
        新增
      </button>
    </div>
  );
};

export default Edit;
