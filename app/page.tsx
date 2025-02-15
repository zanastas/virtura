'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    // Cursor movement
    const cursor = document.querySelector('.cursor') as HTMLElement;
    if (cursor) {
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });
    }

    // Typing effect
    const textElement = document.getElementById('typing-text');
    if (textElement) {
      const typeWriter = (text: string, element: HTMLElement, speed = 100) => {
        let i = 0;
        const type = () => {
          if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
          }
        };
        type();
      };
      typeWriter('Where do you want to go?', textElement, 100);
    }
  }, []);

  const handleBlackmirrorClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    button.textContent = 'COMING SOON';
    button.disabled = true;
    button.style.opacity = '0.7';
  };

  return (
    <main>
      <div className="cursor">🪄</div>
      <div className="container">
        <h1>Welcome to Virtura</h1>
        
        <div className="profile-section">
          <div className="profile-circle">
            <Image 
              src="/nova.jpg"
              alt="AI Agent"
              width={120}
              height={120}
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div className="text-window">
            <p id="typing-text"></p>
          </div>
        </div>
        
        <div className="video-container">
          <div className="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/VIDEO_ID_1?loop=1&playlist=VIDEO_ID_1&mute=1" 
              frameBorder="0" 
              allowFullScreen
            />
            <Link href="/wonderland">
              <button className="enter-btn wonderland">Enter Wonderland</button>
            </Link>
          </div>

          <div className="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/VIDEO_ID_2?loop=1&playlist=VIDEO_ID_2&mute=1" 
              frameBorder="0" 
              allowFullScreen
            />
            <button 
              className="enter-btn blackmirror"
              onClick={handleBlackmirrorClick}
            >
              Enter Blackmirror
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}