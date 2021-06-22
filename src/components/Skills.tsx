import React from 'react';
import Heading from './Heading';

import {
  htmlImg,
  cssImg,
  sassImg,
  jsImg,
  reactImg,
  reduxImg,
  typescriptImg,
  jqueryImg,
  gitImg,
  jiraImg,
  confluenceImg,
  agileImg
} from '../images/skills-icons';

function Skills() {
  return (
    <section className="skills-section" id="skills" >
      <Heading text="My skills"/>
      {/* <header className="section-heading">My skills</header> */}
      <div className="skills">
        <div className="skills_card" data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
          <h3 className="skills_card_heading">Basics</h3>
          <ul className="skills_card_list">
            <li className="skills_card_list_item">
              <img src={htmlImg} alt="" />
              <p className="skills_card_list_item_name">HTML</p>
            </li>
            <li className="skills_card_list_item">
              <img src={cssImg} alt="" />
              <p className="skills_card_list_item_name">CSS</p>
            </li>
            <li className="skills_card_list_item">
              <img src={sassImg} alt="" />
              <p className="skills_card_list_item_name">SASS</p>
            </li>
            <li className="skills_card_list_item">
              <img src={jsImg} alt="" />
              <p className="skills_card_list_item_name">JavaScript</p>
            </li>
          </ul>
        </div>
        <div className="skills_card" data-aos="flip-up" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true">
          <h3 className="skills_card_heading">Script</h3>
          <ul className="skills_card_list">
            <li className="skills_card_list_item">
              <img src={reactImg} alt="" />
              <p className="skills_card_list_item_name">React JS</p>
            </li>
            <li className="skills_card_list_item">
              <img src={reduxImg} alt="" />
              <p className="skills_card_list_item_name">Redux</p>
            </li>
            <li className="skills_card_list_item">
              <img src={typescriptImg} alt="" />
              <p className="skills_card_list_item_name">TypeScript</p>
            </li>
            <li className="skills_card_list_item">
              <img src={jqueryImg} alt="" />
              <p className="skills_card_list_item_name">jQuery</p>
            </li>
          </ul>
        </div>
        <div className="skills_card" data-aos="flip-up" data-aos-delay="700" data-aos-duration="1000" data-aos-once="true">
          <h3 className="skills_card_heading">Workflow</h3>
          <ul className="skills_card_list">
            <li className="skills_card_list_item">
              <img src={gitImg} alt="" />
              <p className="skills_card_list_item_name">Git</p>
            </li>
            <li className="skills_card_list_item">
              <img src={jiraImg} alt="" />
              <p className="skills_card_list_item_name">Jira</p>
            </li>
            <li className="skills_card_list_item">
              <img src={confluenceImg} alt="" />
              <p className="skills_card_list_item_name">Confluence</p>
            </li>
            <li className="skills_card_list_item">
              <img src={agileImg} alt="" />
              <p className="skills_card_list_item_name">Agile</p>
            </li>
          </ul>
        </div>
        <div className="skills_card" data-aos="flip-up" data-aos-delay="1000" data-aos-duration="1000" data-aos-once="true">
          <h3 className="skills_card_heading">Theory</h3>
          <ul className="skills_card_list">
            <li className="skills_card_list_item">
              <img src={htmlImg} alt="" />
              <p className="skills_card_list_item_name">HTML</p>
            </li>
            <li className="skills_card_list_item">
              <img src={cssImg} alt="" />
              <p className="skills_card_list_item_name">CSS</p>
            </li>
            <li className="skills_card_list_item">
              <img src={sassImg} alt="" />
              <p className="skills_card_list_item_name">SASS</p>
            </li>
            <li className="skills_card_list_item">
              <img src={jsImg} alt="" />
              <p className="skills_card_list_item_name">JavaScript</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills;
