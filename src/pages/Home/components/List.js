import Item from './Item';

const List = ({ listData, deleteData, submittingStatus }) => {
  console.log(listData);
  return (
    <div className="list">
      {listData.map((item) => {
        const { todo, date, time, id } = item;
        return (
          <Item
            todo={todo}
            date={date}
            time={time}
            key={id}
            id={id}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
