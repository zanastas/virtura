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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
        
        <div className="video-container grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          <div className="relative w-full">
            <div className="video-wrapper">
              <video
                className="w-full h-full object-cover rounded-lg"
                muted
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              >
                <source src="/wonderland.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <Link href="/wonderland">
              <button className="enter-btn wonderland">Enter Wonderland</button>
            </Link>
          </div>

          <div className="relative w-full">
            <div className="video-wrapper">
              <video
                className="w-full h-full object-cover rounded-lg"
                muted
                playsInline
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              >
                <source src="/blackmirror.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
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