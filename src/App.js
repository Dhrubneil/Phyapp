import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Search from './components/search/search';
import Combo from './containers/combo/combo';
import Prescriptions from './containers/prescriptions/prescriptions';
// import classes from './styles/Header.module.css';
import BloodPressure from './components/bloodPressure/bloodPressure';
import Navbar from './components/navbar/navbar';
import Logs from './containers/logs/logs';
import Medicines from './containers/medicines/medicines';
import Notes from './containers/notes/notes';
import Reports from './containers/reports/reports';

const Home = (
  <div>
    <Navbar />
    <Combo />
  </div>
);
function App() {
  return (
    <Routes>
      <Route path="/" element={Home} />
      <Route path="/home" element={Home} />
      <Route path="/medicines" element={<Medicines />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/prescriptions" element={<Prescriptions />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/bp-records" element={<BloodPressure />} />

    </Routes>
  );
}

export default App;
