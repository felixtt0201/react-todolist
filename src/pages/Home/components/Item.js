const Item = ({ id, todo, date, time, deleteData, submittingStatus }) => {
  const deleteTodo = () => {
    submittingStatus.current = true;
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="item">
      <div>
        <p>{todo}</p>
        <p>{`${date} - ${time}`}</p>
      </div>
      <button className="remove" onClick={deleteTodo}>
        X
      </button>
    </div>
  );
};

export default Item;
