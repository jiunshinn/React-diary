import { useState, useRef } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id: 1,
//     author: '신지운',
//     content: '123',
//     emotion: 5,
//     created_at: new Date().getTime()
//   },
//   {
//     id: 2,
//     author: '신지현',
//     content: '123',
//     emotion: 5,
//     created_at: new Date().getTime()
//   },
//   {
//     id: 3,
//     author: '이남길',
//     content: '123',
//     emotion: 5,
//     created_at: new Date().getTime()
//   },
//   {
//     id: 4,
//     author: '신민성',
//     content: '123',
//     emotion: 5,
//     created_at: new Date().getTime()
//   },
// ]


function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_at = new Date().getTime();
    const newitem = {
      author,
      content,
      emotion,
      created_at,
      id: dataId.current
    }
    dataId.current += 1;
    setData([newitem, ...data]);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
