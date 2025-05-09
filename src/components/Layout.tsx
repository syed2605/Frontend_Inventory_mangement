import React from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';
// import API from '../api/axios';
// import { BASE_URL } from '../constant/URL';

 
 
export const Layout: React.FC = () => {
  console.log("in Layout")
  return (
    <div className="flex w-screen h-screen overflow-hidden  flex-col">
    <Navbar />
      <div className="flex flex-1 w-full overflow-hidden">
        <Sidebar />
        <main className="p-6 bg-gray-50 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  )
};