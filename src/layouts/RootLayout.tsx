import { Outlet } from 'react-router-dom';
import { useRef } from 'react';
import NavBar from '@/components/NavBar/NavBar';

function RootLayout() {
  const introductionRef = useRef<HTMLElement | null>(null);

  return (
    <div>
      <NavBar introductionRef={introductionRef} />
      <Outlet context={{ introductionRef }} />
    </div>
  );
}

export default RootLayout;
