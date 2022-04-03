import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: '신지운',
    content: '123',
    emotion: 5,
    created_at: new Date().getTime()
  },
  {
    id: 2,
    author: '신지현',
    content: '123',
    emotion: 5,
    created_at: new Date().getTime()
  },
  {
    id: 3,
    author: '이남길',
    content: '123',
    emotion: 5,
    created_at: new Date().getTime()
  },
  {
    id: 4,
    author: '신민성',
    content: '123',
    emotion: 5,
    created_at: new Date().getTime()
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
