import React from "react";
import Square from "./Square";
import scrollDownImg from '../images/round_letters.svg';

const Intro: React.FC = () => {
  const introScreen: any = React.useRef();

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

  // const [activeColorPaletteName, setActiveColorPaletteName] = React.useState<string>('default');
  const [activeColorPalette, setActiveColorPalette] = React.useState<string[]>(colorPalettes.neon);
  const [squaresArray, setSquaresArray] = React.useState<JSX.Element[]>([]);

  React.useEffect(() => {
    const introDivRect = introScreen.current.getBoundingClientRect();
    const squaresAmount = Math.floor(introDivRect.width / 20) * 25

    const newSquaresArray: Array<JSX.Element> = [];
    for (let i = 0; i < squaresAmount; i++) {
      newSquaresArray.push(<Square key={i} activeColorPalette={activeColorPalette} />);
    }
    setSquaresArray(newSquaresArray);

  }, [introScreen]);

  // const colorButtonClickHandle = (e: React.MouseEvent<Element, MouseEvent>) => {
  //   const target = e.target as HTMLButtonElement;
  //   setActiveColorPaletteName(target.name);
  //   setActiveColorPalette(colorPalettes[target.name]);
  // }


  return (
    <div ref={introScreen} id="home" className="intro">
      <h1 className="intro_header intro_header_first-line">
        <span className="intro_header_letter">H</span>
        <span className="intro_header_letter">i</span>
        <span className="intro_header_letter">,</span>
      </h1>
      <h1 className="intro_header intro_header_second-line">
        <span className="intro_header_letter">I</span>
        <span className="intro_header_letter">'</span>
        <span className="intro_header_letter">m</span>
        <span className="intro_header_letter intro_header_letter_first intro_header_letter_main">A</span>
        <span className="intro_header_letter">r</span>
        <span className="intro_header_letter">s</span>
        <span className="intro_header_letter">e</span>
        <span className="intro_header_letter">n</span>
        <span className="intro_header_letter">i</span>
        <span className="intro_header_letter">y</span>
        <span className="intro_header_letter">,</span>
      </h1>
      <h1 className="intro_header intro_header_third-line">
        <span className="intro_header_letter">w</span>
        <span className="intro_header_letter">e</span>
        <span className="intro_header_letter">b</span>
        <span className="intro_header_letter intro_header_letter_first">d</span>
        <span className="intro_header_letter">e</span>
        <span className="intro_header_letter">v</span>
        <span className="intro_header_letter">e</span>
        <span className="intro_header_letter">l</span>
        <span className="intro_header_letter">o</span>
        <span className="intro_header_letter">p</span>
        <span className="intro_header_letter">e</span>
        <span className="intro_header_letter">r</span>
      </h1>
      <div className="intro_board" id="board">
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
      <img src={scrollDownImg} className="intro_scroll-down"></img>
    </div>
  )
}

export default Intro;