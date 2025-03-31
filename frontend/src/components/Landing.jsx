import React from 'react';
import { About } from './About.jsx';
import Hero from './Hero.jsx';
import { Contact } from './Contact.jsx';
import { WhatweDo } from './WhatweDo.jsx';

export const Landing = () => {
  return (
    <div>
        <Hero />
        <About />
        <WhatweDo />
        <Contact />
    </div>
  );
};
