import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from './Redux/Slices/theme.js';
import { Moon, SunDim } from 'lucide-react';

export default function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);


  return (
    <>
      <h1 className="bg-red-600 dark:bg-amber-100">hi</h1>
      <Button onClick={() => dispatch(toggleTheme())}>
        {theme === 'light' ? <Moon /> : <SunDim />}
      </Button>
    </>
  );
}
