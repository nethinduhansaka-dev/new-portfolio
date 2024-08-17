import React, { useState } from 'react';
import './App.css';
import MainPages from './Pages/MainPages';
import Skill from './Pages/skill.jsx';
import Profile from './Pages/Profile .jsx';
import Footer from './Pages/footer.jsx';
import LoadingPage from './Pages/LoadingPage.jsx'; // Import the new LoadingPage component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className='bg-white'>
      {isLoading ? (
        <LoadingPage onLoadingComplete={handleLoadingComplete} />
      ) : (
        <>
          <Profile />
          <MainPages />
          <Skill />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;