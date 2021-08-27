import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, <br/>
        I'm Sohail.
      </SectionTitle>
      <SectionText>
        A Sophomore Computer-Science undergrad and a Full-Stack Developer. I build beautiful front-end projects and I can help you with the same.
      </SectionText>
      <Button onClick={()=>window.location ="mailto:sohailss2412@gmail.com" }>
        Get in touch
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;