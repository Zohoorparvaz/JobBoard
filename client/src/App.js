import './App.css';
import Jobs from './Components/Jobs';

const mockjobs = [
  {
    title: 'Software Engineer',
    company: 'A'
  }
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockjobs} />
    </div>
  );
}

export default App;
