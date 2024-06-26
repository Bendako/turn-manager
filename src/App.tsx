import React from 'react';
import Card from './components/Card';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-wrap justify-center">
        <Card name="בן" />
        <Card name="דוד" />
        <Card name="שלומי" />
        <Card name="נווה" />
        <Card name="מתן" />
      </div>
    </div>
  );
};

export default App;