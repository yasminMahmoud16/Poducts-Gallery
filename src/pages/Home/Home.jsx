import { Button } from '@/Components/ui/button.jsx';
import { toggleTheme } from '@/Redux/Slices/theme.js';
import { Moon, SunDim } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className='container'>
      <h1 className="bg-red-600 dark:bg-amber-100">hi</h1>
      <Button onClick={() => dispatch(toggleTheme())}>
        {theme === 'light' ? <Moon /> : <SunDim />}
      </Button> 
    </div>
  )
}
