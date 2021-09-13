// Hooks
import { useState, useEffect, useRef } from 'react';

// components
import Edit from './components/Edit';
import List from './components/List';

// style
import './index.css';

//API
import { API_GET_DATA } from './global/constants';

// getAPI
const fetchData = async (setData) => {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
};

//putAPI
const postData = async (data) => {
  await fetch(API_GET_DATA, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ data }),
  });
};

const Home = () => {
  const [data, setData] = useState([]);

  // 因為每次useEffect都會執行，需要一個開關來控制
  const submittingStatus = useRef(false);

  // 讀取db.json的資料
  useEffect(() => {
    fetchData(setData);
  }, []);

  // 新增的useEffect
  useEffect(() => {
    if (!submittingStatus.current) {
      return;
    }
    postData(data).then((data) => (submittingStatus.current = false));
  }, [data]);

  return (
    <div className="app">
      <Edit todos={setData} submittingStatus={submittingStatus} />
      <List
        listData={data}
        deleteData={setData}
        submittingStatus={submittingStatus}
      />
    </div>
  );
};

export default Home;
