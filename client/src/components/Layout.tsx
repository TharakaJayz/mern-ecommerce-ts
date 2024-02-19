
import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export interface ILayoutProps {
}

export default function Layout (props: ILayoutProps) {
  return (
    <div>
      <Header />
      <Outlet  />
      <Footer />
    </div>
  );
}
