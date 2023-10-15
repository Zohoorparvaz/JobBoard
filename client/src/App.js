import './App.css';
import Jobs from './Components/Jobs';

const mockjobs = [
  { jobtitle: 'Software Engineer', company: 'A' },
  { jobtitle: 'Power Platform Developer', company: 'B' }
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockjobs} />
    </div>
  );
}

export default App;
