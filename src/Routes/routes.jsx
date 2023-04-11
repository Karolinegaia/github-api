import { Route, Routes } from 'react-router-dom';
import  {Home}  from '../pages/Home/Home';
import {Profile} from '../pages/Profile/Profile';


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:user" element={<Profile />} />
    </Routes>
  );
}