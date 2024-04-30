import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { FaPowerOff, FaUserCircle } from 'react-icons/fa'; // Import FaUserCircle icon
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link,  useNavigate } from "react-router-dom";

export default function Navbar({ isScrolled }) {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'Courses', link: '../Courses' },
    { name: 'Translate', link: '/Translation' },
    { name: 'Upload', link: '../upload'},
  ];

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if(!currentUser) navigate("/login");
  });

  return (
    <Container>
      <nav className={`flex ${isScrolled ? 'scrolled' : ''}`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="logo" />
          </div>
          <ul className="links flex">
            {links.map(({ name, link }) => (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="right flex a-center">
          <Link to ="Profile">
            <FaUserCircle className="user-profile" />
          </Link> 
          <button onClick={() => signOut(firebaseAuth)}>
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    position: sticky;
    top: 0;
    height: 6.5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left:0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    
    .left {
      gap: 2rem;
      .brand {
        img {
          height: 4rem;
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;
        li {
          a {
            color: gray;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 1rem;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      .user-profile {
        color: white;
        font-size: 1.5rem;
        margin-right:7px;
      }
    }
  }
`;
