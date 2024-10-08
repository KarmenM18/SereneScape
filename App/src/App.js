import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CoralPage from './CoralPage/CoralPage';
import QuizPage from './QuizPage/QuizPage';
import QuizPage2 from './QuizPage2/QuizPage2';
import TasksPage from './TasksPage/TasksPage';
import HomePage from './HomePage/HomePage';
import Leaderboard from './LeaderboardPage/board';
import myBadges from './BadgesPage/myBadges';
//import './LeaderboardPage/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/coral' element={<CoralPage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/badges' element={<myBadges/>}></Route>
        <Route path='/' element={<QuizPage/>}></Route>
        <Route path='/quiz2' element={<QuizPage2/>}></Route>
        <Route path='/tasks' element={<TasksPage/>}></Route>
        <Route
          path='/leaderboard'
          element={
            <div className="App" id='main'>
              <Leaderboard />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
