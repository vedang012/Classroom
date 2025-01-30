import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './LoginPage/Login';
import Signup from './SignupPage/Signup';
import Home from './Homepage/Home';
import Dashboard from './Dashboard/Dashboard';
import Class from './Dashboard/Class/Class'


function App() {
  return (
      <Router>
        <div className='h-screen flex justify-center items-center'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/student-dashboard" element={<Dashboard isTeacher={false}/>} />
            <Route path="/student-dashboard/class/:id" element={<Class />} />
            <Route path="/teacher-dashboard" element={<Dashboard isTeacher={true}/>} />
            <Route path="/teacher-dashboard/class/:id" element={<Class />} />

          </Routes>
        </div>
      </Router>
  );
}

export default App;
