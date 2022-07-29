import React, { useEffect }  from "react";
import { Routes, Route, Link, useNavigate, } from "react-router-dom";
import Child1 from './views/Child1';
import Child2 from './views/Child2';

export default function App() {
  const navigate = useNavigate()
  
  useEffect(() => {
    window.microApp?.addDataListener((data:any) => {
      // 当基座下发path时进行跳转
      if (data.path) {
        navigate(data.path, { replace: true });
      }
    })
  }, [navigate])

  return (
    <div className="App">
      <Routes>
        <Route path="subpage1" element={<Child1 />} />
        <Route path="subpage2" element={<Child2 />} />
      </Routes>
    </div>
  );
}