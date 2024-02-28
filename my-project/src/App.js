import React from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      setData(response.data);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
