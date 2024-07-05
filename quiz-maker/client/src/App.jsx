import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import CreateQuiz from './components/CreateQuiz';
import TakeQuiz from './components/TakeQuiz';
import Dashboard from './components/Dashboard';
import "./index.css";

const App = () => {
    return (
        <div>
            {/* <h1>Online Quiz Maker</h1> */}
            <Router>
                <Routes >
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="create-quiz" element={<CreateQuiz />} />
                    <Route path="take-quiz/:id" element={<TakeQuiz />} />
                    <Route path="/" element={<Navigate replace to="/dashboard" />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
