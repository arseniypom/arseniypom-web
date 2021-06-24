import React from "react";

import scrollDownImg from '../images/round_letters.svg';

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
    // const letters = document.querySelectorAll('.intro_header_letter');

    // for (var i = 0; i < letters.length; i++) {
    //   ((i) => {
    //       setTimeout(function () {
    //         letters[i].classList.add('display')
    //       }, 120 * i);
    //   })(i);
    // };
    const characters = "Hi,I'm Arseniy,web developer".split('');
    characters.forEach((char, i) => {
      // setTimeout(() => {
      //   console.log(char, i);
      // }, i * 200);
      const letter = document.createElement('span');
      if (char === ' ') {
        letter.style.display = 'inline';
      } else {
        letter.style.display = 'inline-block';
      }
      letter.innerText = char;
      letter.classList.add('intro_header_letter');
      char === 'A' && letter.classList.add('intro_header_letter_main');

      letter.dataset.aos="zoom-in";
      letter.dataset.aosDuration="200";
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
          // for (let i = 0; i < 7; i++) {
            setColor(getRandomElement(squares), 300);
            setColor(getRandomElement(squares), 400);
            setColor(getRandomElement(squares), 500);
            setColor(getRandomElement(squares), 600);
            setColor(getRandomElement(squares), 700);
            setColor(getRandomElement(squares), 800);
            setColor(getRandomElement(squares), 900);
          // }
        }, 500);

        setTimeout(() => {
          clearInterval(intervalId);
        }, 2000);
      } catch (error) {
        console.log(error.message);
      }
    })();

  }, [introScreen]);

  // const colorButtonClickHandle = (e: React.MouseEvent<Element, MouseEvent>) => {
  //   const target = e.target as HTMLButtonElement;
  //   setActiveColorPaletteName(target.name);
  //   setActiveColorPalette(colorPalettes[target.name]);
  // }


  return (
    <div ref={introScreen} id="home" className="intro">
      <h1 ref={firstLine} className="intro_header intro_header_first-line"></h1>
      <h1 ref={secondLine} className="intro_header intro_header_second-line"></h1>
      <h1 ref={thirdLine} className="intro_header intro_header_third-line"></h1>
      <p className="text-muted intro_text">Full Stack Developer / Python Programmer / Freelancer</p>
      <button className="animated-button intro_contact-button">Reach me</button>
      <div ref={squaresBoard} onMouseOver={(e) => squareMouseOverHandle(e)} className="intro_board" id="board">
        {squaresArray}
      </div>
      {/* <div className="intro_option" onClick={colorButtonClickHandle}>
        <button className={classNames(
          "intro_option_button",
          "default-palette-button",
          {"color-palette-button-active": activeColorPaletteName === 'default'}
        )} name="default">Default</button>
        <button className={classNames(
          "intro_option_button",
          "pinky-palette-button",
          {"color-palette-button-active": activeColorPaletteName === 'pinky'}
        )} name="pinky">Pinky</button>
        <button className={classNames(
          "intro_option_button",
          "blue-palette-button",
          {"color-palette-button-active": activeColorPaletteName === 'blue'}
        )} name="blue">Blue</button>
        <button className={classNames(
          "intro_option_button",
          "rainbow-palette-button",
          {"color-palette-button-active": activeColorPaletteName === 'rainbow'}
        )} name="rainbow">
          <span className="letter-1">R</span>
          <span className="letter-2">a</span>
          <span className="letter-3">i</span>
          <span className="letter-4">n</span>
          <span className="letter-5">b</span>
          <span className="letter-6">o</span>
          <span className="letter-7">w</span>
        </button>
      </div> */}
      <img src={scrollDownImg} className="intro_scroll-down" alt="scroll down"></img>
    </div>
  )
}

export default Intro;