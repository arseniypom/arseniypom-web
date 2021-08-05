import React from 'react';
import Heading from './Heading';

import skillsImg from '../images/code4.svg';
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
  agileImg,
  nodejsImg,
  expressImg,
  mongodbImg
} from '../images/skills-icons';

function Skills() {
  return (
    <section className="section skills-section" id="skills" >
      <div className="skills">
        <div className="skills_info">
          <div className="skills_heading">
            <Heading text="My Skills"/>
            <p className="skills_description">In building JavaScript applications, I'm equipped with different tools, which I can choose from depending on the needs of the particular project. I keep my knowledge up-to-date and always seek for better solutions.</p>
          </div>
          <div className="skills_cards">
            <div className="skills_card" data-aos="flip-up" data-aos-delay="100" data-aos-duration="1000" data-aos-once="true">
              <h3 className="skills_card_heading">Basics</h3>
              <ul className="skills_card_list">
                <li className="skills_card_list_item">
                  <img src={htmlImg} alt="html" />
                  <p className="skills_card_list_item_name">HTML</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={cssImg} alt="css" />
                  <p className="skills_card_list_item_name">CSS</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={sassImg} alt="sass" />
                  <p className="skills_card_list_item_name">SASS</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={jsImg} alt="javascript" />
                  <p className="skills_card_list_item_name">JavaScript</p>
                </li>
              </ul>
            </div>
            <div className="skills_card" data-aos="flip-up" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true">
              <h3 className="skills_card_heading">Script</h3>
              <ul className="skills_card_list">
                <li className="skills_card_list_item">
                  <img src={reactImg} alt="react" />
                  <p className="skills_card_list_item_name">React JS</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={reduxImg} alt="redux" />
                  <p className="skills_card_list_item_name">Redux</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={typescriptImg} alt="typescript" />
                  <p className="skills_card_list_item_name">TypeScript</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={jqueryImg} alt="jquery" />
                  <p className="skills_card_list_item_name">jQuery</p>
                </li>
              </ul>
            </div>
            <div className="skills_card" data-aos="flip-up" data-aos-delay="700" data-aos-duration="1000" data-aos-once="true">
              <h3 className="skills_card_heading">Workflow</h3>
              <ul className="skills_card_list">
                <li className="skills_card_list_item">
                  <img src={gitImg} alt="git" />
                  <p className="skills_card_list_item_name">Git</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={jiraImg} alt="jira" />
                  <p className="skills_card_list_item_name">Jira</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={confluenceImg} alt="confluence" />
                  <p className="skills_card_list_item_name">Confluence</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={agileImg} alt="agile" />
                  <p className="skills_card_list_item_name">Agile</p>
                </li>
              </ul>
            </div>
            <div className="skills_card" data-aos="flip-up" data-aos-delay="1000" data-aos-duration="1000" data-aos-once="true">
              <h3 className="skills_card_heading">Backend</h3>
              <ul className="skills_card_list">
                <li className="skills_card_list_item">
                  <img src={nodejsImg} alt="node js" />
                  <p className="skills_card_list_item_name">Node JS</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={expressImg} alt="express" style={{backgroundColor:'white'}}/>
                  <p className="skills_card_list_item_name">Express</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={mongodbImg} alt="mongo db" />
                  <p className="skills_card_list_item_name">Mongo DB</p>
                </li>
                <li className="skills_card_list_item">
                  <img src={jsImg} alt="" />
                  <p className="skills_card_list_item_name">JavaScript</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="skills_img">
          <img src={skillsImg} alt="decorative" />
        </div>
      </div>
    </section>
  )
}

export default Skills;
