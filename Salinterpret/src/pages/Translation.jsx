import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/AdminNavbar';

const TranslationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CameraFeed = styled.img`
  width: 80%;
  max-height: 50vh; /* Limit height to maintain aspect ratio */
  margin-top: 20px;
`;

function ASLTranslationPage() {
  const [cameraImage, setCameraImage] = useState('');
  const [translation, setTranslation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/translate');
        const data = await response.json();
        setCameraImage(data.img);
        setTranslation(data.translation);
      } catch (error) {
        console.error('Error fetching translation:', error);
      }
    };

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TranslationContainer>
      <Navbar />
      {cameraImage && <CameraFeed src={`data:image/jpeg;base64,${cameraImage}`} alt="Camera Feed" />}
      <div>
        <h2>Instructions:</h2>
        <p>1. Place your ASL gestures in front of the camera.</p>
        <p>2. Wait for the translation to appear: {translation}</p>
      </div>
    </TranslationContainer>
  );
}

export default ASLTranslationPage;
