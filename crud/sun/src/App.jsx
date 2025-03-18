import Students from "./Component/Student";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Students />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
