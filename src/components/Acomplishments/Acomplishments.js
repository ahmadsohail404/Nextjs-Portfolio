import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { header: "HackerRank", text: "5 🌟 coder in JavaScript@HackerRank." },
  { header: "CapeGemini", text: "ReactJS Tech Challenge." },
  { header: "Hackathon2k21", text: "Mobile vaccination prototype VaxiDoor." },
  { header: "10+", text: "WebDev projects" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.header}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
