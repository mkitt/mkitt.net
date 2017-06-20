// @flow
import React from 'react'
import type { ExperienceProps, ProjectProps } from '../types/app.js.flow'
import Copy from '../components/Copy'
import Experience, { Experiences } from '../components/Experience'
import Heading from '../components/Heading'
import Main from '../components/Main'
import Project, { Projects } from '../components/Project'
import Section from '../components/Section'
import Subheading from '../components/Subheading'
import { css, hover } from '../styles/jss'
import { colorBlue } from '../styles/jso'

const subheadingStyle = css({
  fontSize: 18,
})

const copyStyle = css({
  maxWidth: 620,
})

const introStyle = css({
  fontSize: 18,
})

const linkStyle = css(
  {
    transitionDuration: '0.4s',
    transitionProperty: 'color',
  },
  hover(colorBlue),
)

type Props = {
  projects: Array<ProjectProps>,
  experiences: Array<ExperienceProps>,
}

export default(props: Props) => (
  <Main hasNavbar >
    <Section>
      <Heading>Matthew Kitt</Heading>
      <Subheading className={subheadingStyle}>@mkitt</Subheading>
      <Copy className={`${copyStyle} ${introStyle}`}>
        Web and mobile app developer specializing in modular design systems,
        front-end architecture, product development &amp; team management.
      </Copy>
      <Copy className={copyStyle}>
        <span>&raquo; </span>
        <a className={linkStyle} href="https://github.com/mkitt">GitHub Profile</a>
      </Copy>
    </Section>
    <Section>
      <Heading>Projects</Heading>
      <Projects>
        { props.projects.map(project =>
          <Project key={project.id} {...project} />,
        )}
      </Projects>
    </Section>
    <Section>
      <Heading>Experience</Heading>
      <Experiences>
        { props.experiences.map(experience =>
          <Experience key={experience.title} {...experience} />,
        )}
      </Experiences>
      <Copy className={copyStyle}>
        <span>&raquo; </span>
        <a className={linkStyle} href="/resume">View Résumé</a>
      </Copy>
    </Section>
    <Section>
      <Heading>Contact</Heading>
      <Copy className={copyStyle}>
        <span>&raquo; </span>
        <a className={linkStyle} href="mailto: hello@mkitt.net">hello@mkitt.net</a>
      </Copy>
    </Section>
  </Main>
)

