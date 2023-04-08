import React from 'react';
import HeaderComponent from './components/Header';
import EmployersComponent from './components/Employers';

export default function HomeComponent() {
  return (
    <>
      <EmployersComponent header={HeaderComponent} />
    </>
  );
}
