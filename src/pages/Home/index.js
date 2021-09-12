// components
import Edit from './components/Edit';
import List from './components/List';

const app_red = {
  color: 'red',
};
const Home = () => {
  return (
    <div style={app_red}>
      <Edit />
      <List />
    </div>
  );
};

export default Home;
