'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface Character {
  name: string;
  description: string;
  images: string[];
}

const characters: Character[] = [
  {
    name: 'Eliza',
    description: 'Celebrity AI agent, former 4chan lurker turned prolific engineer.',
    images: ['/ai_character/eliza1.jpg', '/ai_character/eliza2.jpg', '/ai_character/eliza3.jpg']
  },
  {
    name: 'Donald Trump',
    description: 'US President, businessman, and golf enthusiast',
    images: ['/ai_character/trump1.jpg', '/ai_character/trump2.jpg', '/ai_character/trump3.jpg']
  },
  {
    name: 'Nikola Tesla',
    description: 'Genius inventor and engineer, known for his work on AC motor.',
    images: ['/ai_character/tesla1.jpg', '/ai_character/tesla2.jpg', '/ai_character/tesla3.jpg', '/ai_character/tesla4.jpg']
  },
  {
    name: 'Arnold Schwarzenegger',
    description: 'Former Governor of California and action movie star',
    images: ['/ai_character/arnold1.jpg', '/ai_character/arnold2.jpg', '/ai_character/arnold3.jpg']
  },
  {
    name: 'Bruce Lee',
    description: 'Legendary martial artist and actor',
    images: ['/ai_character/bruce1.jpg', '/ai_character/bruce2.jpg', '/ai_character/bruce3.jpg']
  }
  // Add other characters here
];

export default function Wonderland() {
  useEffect(() => {
    // Cursor movement
    const cursor = document.querySelector('.cursor') as HTMLElement;
    if (cursor) {
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });
    }

    // Slideshow functionality
    const initializeSlideshows = () => {
      const slideshows = document.querySelectorAll('.slideshow');
      
      slideshows.forEach(slideshow => {
        const images = slideshow.querySelectorAll('img');
        let currentIndex = 0;
        
        setInterval(() => {
          images[currentIndex].classList.remove('active');
          currentIndex = (currentIndex + 1) % images.length;
          images[currentIndex].classList.add('active');
        }, 3000);
      });
    };

    initializeSlideshows();
  }, []);

  const handleDateClick = () => {
    window.location.href = 'https://discord.gg/C3fTT3cucj';
  };

  return (
    <main>
      <div className="cursor">🪄</div>
      <div className="container">
        <h1>Choose any character to go on a date with</h1>
        
        <div className="character-grid">
          {characters.map((character, index) => (
            <div key={index} className="character-card">
              <div className="character-image slideshow">
                {character.images.map((img, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={img}
                    alt={character.name}
                    width={250}
                    height={250}
                    className={imgIndex === 0 ? 'active' : ''}
                  />
                ))}
              </div>
              <div className="character-info">
                <h2>{character.name}</h2>
                <p>{character.description}</p>
                <button className="date-btn" onClick={handleDateClick}>
                  Choose Date
                </button>
              </div>
            </div>
          ))}

          {/* Create Your Own Card */}
          <div className="character-card create-own">
            <div className="character-image">
              <div className="question-mark">?</div>
            </div>
            <div className="character-info">
              <h2>Create Your Own</h2>
              <p>Design your own AI character</p>
              <button 
                className="date-btn create-btn"
                onClick={handleDateClick}
              >
                Create Character
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 