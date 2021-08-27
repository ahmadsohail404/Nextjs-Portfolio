import React from 'react';
import { DiReact, DiNodejsSmall, DiZend } from "react-icons/di";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { FiFigma } from "react-icons/fi";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Tech Stack</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the world of web
      development. From Front-End to Back-End and Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with
            <br />
            HTML, CSS, Bootstrap, JavaScript, React.js and Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with
            <br />
            Node.js, Express,js, APIs, Authenticity, Security and Databases.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiFigma size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with
            <br />
            Tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
