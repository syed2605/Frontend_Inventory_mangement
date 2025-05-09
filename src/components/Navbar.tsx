import React from 'react';
// import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export const Navbar: React.FC = () => {
  console.log()
  const userName : string = "rajat" 
  const navigate = useNavigate();


  return (
    <div className="w-full h-16 flex justify-between items-center px-6 bg-[#e3e8e8] shadow-md sticky top-0 z-50">
      <div
        className="text-xl font-bold text-black cursor-pointer"
        onClick={() => navigate('/')}
      >
        Pharmacy Inventory App
      </div>
      <div className="flex items-center gap-4">
        <span className=" font-medium">{userName}</span>
        {/* <Button variant="outlined" size="small" onClick={onLogout} style={{ color: 'white', borderColor: 'white' }}>
          Logout
        </Button> */}
      </div>
    </div>
  );
};
