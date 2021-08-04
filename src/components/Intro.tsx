import React from "react";

import scrollDownImg from '../images/scroll-down.png';

const Intro: React.FC = () => {
  const introScreen: any = React.useRef();
  const squaresBoard: any = React.useRef();

  const firstLine: any = React.useRef();
  const secondLine: any = React.useRef();
  const thirdLine: any = React.useRef();

  interface ColorPalettes {
    [key: string]: string[];
  }

  const colorPalettes: ColorPalettes = {
    default: ['264653', '2A9D8F', 'E9C46A', 'F4A261', 'E76F51'],
    neon: ['7400B8', '6930C3', '5E60CE', '5390D9', '4EA8DE', '48BFE3', '56CFE1', '64DFDF', '72EFDD', '80FFDB'],
    pinky: ['FADDE1', 'FFC4D6', 'FFA6C1', 'FF87AB', 'FF5D8F', 'FF97B7', 'FFACC5', 'FFCAD4'],
    blue: ['03045E', '023E8A', '0077B6', '0096C7', '00B4D8', '48CAE4', '90E0EF', 'ADE8F4'],
    rainbow: ['FF0000', 'FF8700', 'DEFF0A', 'A1FF0A', '0AEFFF', '580AFF', 'BE0AFF']
  }

  const [activeColorPalette, setActiveColorPalette] = React.useState<string[]>(colorPalettes.neon);
  const [squaresArray, setSquaresArray] = React.useState<JSX.Element[]>([]);

  const squareMouseOverHandle = (e: React.MouseEvent<Element, MouseEvent>) : void => {
    const target = e.target as HTMLElement;
    if (target.dataset.role === 'square') {
      setColor(target);
    }
  }

  const setColor = (target: HTMLElement, timer: number = 0) : void => {

    setTimeout(() => {
      target.style.backgroundColor = '#' + getRandomColor();
    }, timer);

    setTimeout(() => {
      target.style.backgroundColor = '#1d1d1d';
    }, timer + 700);
  }
  
  const getRandomColor = () => {
    const colorIndex: number = Math.round(Math.random() * activeColorPalette.length);
    return activeColorPalette[colorIndex];
  }

  const getRandomElement = (elementsArray: NodeListOf<Element>) => {
    return elementsArray[Math.round(Math.random() * (elementsArray.length-1))] as any;
  }

  React.useEffect(() => {
    const characters = "Hi,I'm Arseniy,web developer".split('');
    characters.forEach((char, i) => {
      const letter = document.createElement('span');
      if (char === ' ') {
        letter.style.display = 'inline';
      } else {
        letter.style.display = 'inline-block';
      }
      letter.classList.add('intro_header_letter');

      if (char === 'A') {
        letter.classList.add('intro_header_letter-main');
        letter.dataset.aos="letter-animation";
        letter.dataset.aosDuration="800";
      } else {
        letter.classList.add('intro_header_letter-default');
        letter.innerText = char;
        letter.dataset.aos="zoom-in";
        letter.dataset.aosDuration="200";
      }

      letter.dataset.aosDelay=`${i * 100}`;

      if (i < 3) {
        firstLine.current.append(letter);
      } else if (i < 15) {
        secondLine.current.append(letter);
      } else if (i < 28) {
        thirdLine.current.append(letter);
      }
    });
  }, []);

  React.useEffect(() => {
    const introDivRect = introScreen.current.getBoundingClientRect();
    const squaresAmount = Math.floor(introDivRect.width * introDivRect.height / (20*20));
    const newSquaresArray: Array<JSX.Element> = [];
    for (let i = 0; i < squaresAmount; i++) {
      newSquaresArray.push(<div key={i} className="square" data-role="square"></div>)
    }

    (async () => {
      try {
        await setSquaresArray(newSquaresArray);
        const squares = document.querySelectorAll('[data-role=square]');
        const intervalId = setInterval(() => {
          for (let i = 1; i < 8; i++) {
            setColor(getRandomElement(squares), i * 100 + 200);
          }
        }, 600);

      } catch (error) {
        console.log(error.message);
      }
    })();

  }, [introScreen]);


  return (
    <section id="home" className="intro-section">
      <div ref={introScreen} className="intro">
        <h1 ref={firstLine} className="intro_header intro_header_first-line"></h1>
        <h1 ref={secondLine} className="intro_header intro_header_second-line"></h1>
        <h1 ref={thirdLine} className="intro_header intro_header_third-line"></h1>
        <p data-aos="fade-down" data-aos-duration="500" data-aos-delay="2900" className="text-muted intro_text">Front-End / Back-End Developer / Freelancer</p>
        <div className="intro_contact" data-aos="fade-down" data-aos-duration="800" data-aos-delay="3000">
          <a href="#contact"><button className="animated-button intro_contact-button">Reach me</button></a>
        </div>
        <div ref={squaresBoard} onMouseOver={(e) => squareMouseOverHandle(e)} className="intro_board" id="board">
          {squaresArray}
        </div>
        <a href="#about" className="intro_scroll-down">
          <img src={scrollDownImg} className="" alt="scroll down" />
          <span></span>
        </a>
      </div>
    </section>
  )
}

export default Intro;