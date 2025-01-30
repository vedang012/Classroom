import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './LoginPage/Login';
import Signup from './SignupPage/Signup';
import Home from './Homepage/Home';
import TeacherDashboard from './TeacherDashboard/TeacherDashboard';
import TeacherClass from './TeacherDashboard/Class/TeacherClass'


function App() {
  return (
      <Router>
        <div className='h-screen flex justify-center items-center'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/student-dashboard" element={<TeacherDashboard isTeacher={false}/>} />
            <Route path="/student-dashboard/class/:id" element={<TeacherClass />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard isTeacher={true}/>} />
            <Route path="/teacher-dashboard/class/:id" element={<TeacherClass />} />

          </Routes>
        </div>
      </Router>
  );
}

export default App;
