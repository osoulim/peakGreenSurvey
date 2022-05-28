import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ImageSortingTask from "./pages/ImageSortingTask";
import ImageComparisonTask from "./pages/ImageComparisonTask";
import ImageComparisonTutorial from "./pages/ImageComparisonTutorial";
import ImageSortingTutorial from "./pages/ImageSortingTutorial";
import Submit from "./pages/submit";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/image-sorting" element={<ImageSortingTutorial />} />
        <Route path="/image-sorting/:questionId" element={<ImageSortingTask/>} />
        <Route path="/image-comparison" element={<ImageComparisonTutorial />} />
        <Route path="/image-comparison/:questionId" element={<ImageComparisonTask/>} />
        <Route path="/submit" element={<Submit/>} />
        <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>This is a 404 not found page, enjoy!</p>
              </main>
            }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
