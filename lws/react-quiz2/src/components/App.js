import '../styles/App.css'
import Quiz from './pages/Quiz';
// import Signup from './Button';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Signin';
import Signup from "./pages/Signup";
import Result from './pages/Result';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/signup" Component={Signup} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/quiz" Component={Quiz} />
          <Route exact path="/result" Component={Result} />
        </Routes>
      </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
