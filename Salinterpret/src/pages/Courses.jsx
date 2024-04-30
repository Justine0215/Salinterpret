import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/AdminNavbar';
import A from '../assets/A.png';
import B from '../assets/B.png';
import C from '../assets/C.png';
import D from '../assets/D.png';
import E from '../assets/E.png';
import F from '../assets/F.png';
import G from '../assets/G.png';
import H from '../assets/H.png'
import I from '../assets/I.png'
import J from '../assets/J.gif'
import K from '../assets/K.png'
import L from '../assets/L.JPG'
import M from '../assets/M.png'
import N from '../assets/N.png'
import O from '../assets/O.png'
import P from '../assets/P.png'
import Q from '../assets/Q.png'
import R from '../assets/R.png'
import S from '../assets/S.png'
import T from '../assets/T.png'
import U from '../assets/U.png'
import V from '../assets/V.png'
import W from '../assets/W.png'
import X from '../assets/X.png'
import Y from '../assets/Y.png'
import Z from '../assets/Z.gif'

import { useNavigate } from 'react-router-dom';
import Quiz from './Quiz';
import QuizButton from '../components/QuizButton';


export default function Courses() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

const images = [A, B, C, D, E, F, G, H,I, J, K, L, M, N, O , P , Q, R, S , T, U , V , W , X , Y , Z];
  const texts = [
    "To sign letter A in ASL, place your hand forward with your palm facing you. Make a fist with your thumb pointing up and pressed against the side of your fist.",
    "To sign the letter B in ASL, Hold your fingers together open with your thumb pressed across your palm.",
    "To sign the letter C in ASL, curl your fingers and thumb into a half-circle or “C”.",
    "To sign the letter D in ASL, place your fingertips on your thumb and point your index finger up. It’s like making number 1 using your hands.",
    "To sign the letter E in ASL, bend your four fingers toward your thumb. Place your fingers on the sides of your thumb.",
    "To sign the letter F in ASL, press your index finger and thumb together by keeping the other 3 fingers straight up. It’s like an OK sign.",
    "To sign the letter G in ASL, Keep your thumb in parallel to your index finger. Fold the rest 3 fingers closed to form a fist. It’s like forming a pincer grip without touching",
    "To sign the letter H in ASL, hold your hand towards you. Open your index and middle fingers are pointing to your left. Close other two fingers and thumb to form a fist",
    " To sign the letter I in ASL, form a fist and raise your pinkie/little finger straight up.",
    " To sign the letter J in ASL, begin by holding your hand in the position for the letter I, then move your hand downward, swoop to the left, and move forward, making J in the air.",
    " To sign the letter J in ASL, Raise your index and middle fingers straight up and spread apart in the shape of a V. Press your thumb into your palm so that its tip lies between your index and middle fingers.",
     "To sign L in ASL, make an L shape with your thumb and index finger. Fold the rest 3 fingers against your palm",
     " To sign M in ASL, make a fist, Now place your thumb between your ring and little finger. Now wrap the thumb with other fingers.",
     " To sign N in ASL, bend your fingers like you are holding a ball. Now push the tip of the thumb between your middle and ring fingers.",
     "To sign the letter O in ASL, join the tips of your fingers and the thumb together. ",
     "To sign letter P in ASL, sign K and point downwards. (Point your index and middle finger down while thumbing in between. Fold the other two fingers towards palm)",
     "To sign the letter Q in ASL, sign the letter “G” and point downward.",
     "To sign the letter R in ASL, cross your index finger over your middle finger. Fold the thumb and other fingers to form a fist",
     " To sign S in ASL, make a fist. Now place the thumb over the fingers",
     "To sign the letter T in ASL, form a fist while placing  your thumb between the middle and index finger",
     "To sign the letter U in ASL, fold your thumb, ring finger, and little finger against your palm. Join your middle and index finger and point straight up.",
     "To sign the letter V in ASL, place your hand in the “U” position and spread your fingers apart to make a V. Like making a victory sign",
     "To sign the letter W in ASL, join your little finger and the thumb together. Now, spread the three fingers (index, middle, and ring) apart to make W.",
     " To sign X in ASL, make a fist and crook the index finger like a hook",
     " To sign the letter Y in ASL, fold your index, middle, and ring fingers towards your palm. Keep your pinky finger and thumb open to form a Y. ",
     "To sign the letter z in ASL, make a fist. Open your index finger like pointing to someone. Now write the letter z in the air.",
    


  ];

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  const columns = chunkArray(images, 4);

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <main>
        {columns.map((column, index) => (
          <Column key={index}>
            {column.map((image, idx) => (
              <section key={idx}>
                <div className='content'>
                  <img src={image} alt={`Image ${index * 4 + idx}`} />
                  <div className='text'>
                    <h1 className='a'>Letter {String.fromCharCode(65 + index * 4 + idx)}</h1>
                    <p>{texts[index * 4 + idx]}</p>
                  </div>
                </div>
              </section>
            ))}
          </Column>
        ))}
        <QuizButton navigateTo="/quiz">Start Quiz!</QuizButton>
      </main>
    </Container>
  );
}
const Container = styled.div`
  background-color: white;
  padding-top: 9%; /* 5% distance below the navbar */
  main {
    display: flex;
    justify-content: center;
    flex-direction: column; /* Align sections vertically */
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;

  section {
    width: 22%;
    min-height: 150px; /* Adjust this value as needed */
    cursor: pointer;
    box-shadow: 0 0 15px black;
    transition: transform 0.6s ease-in-out;
    display: flex;
    flex-direction: column;
  }

  section:hover {
    transform: scale(1.1);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 10px;
  }

  img {
    max-width: 100%;
    max-height: 50%;
    margin-bottom: 10px;
    height: auto;
  }

  .text {
    color: black;
    text-align: center;
    flex-grow: 1;
    padding: 10px;
    overflow: hidden;
    line-height: 1.5;
  }
`;

