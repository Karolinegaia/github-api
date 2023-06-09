import { Route, Routes } from 'react-router-dom';
import  {Home}  from '../Pages/Home/Home';
import {Profile} from '../Pages/Profile/Profile';


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:user" element={<Profile />} />
    </Routes>
  );
}