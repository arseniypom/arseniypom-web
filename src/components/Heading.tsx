import React from 'react';
import {Animated} from "react-animated-css";

interface IHeadingfProps {
  text: string;
}

const Heading: React.FC<IHeadingfProps> = ({text}) => {

  const [isOnScreen, setOnScreen] = React.useState<boolean>(true);

  const heading: any = React.useRef();
  const characters = text.split('');
  
  
  React.useEffect(() => {
      characters.forEach((char, i) => {
        const letter = document.createElement('span');
        if (char === ' ') {
          letter.style.display = 'inline';
        } else {
          letter.style.display = 'inline-block';
        }
        letter.innerText = char;

        letter.dataset.aos="fade-down";
        letter.dataset.aosDuration="300";
        letter.dataset.aosDelay=`${i * 150}`
  
        heading.current.append(letter)
      });

  }, []);


  return (
    <header ref={heading} className="section-heading"></header>
  )
}

export default Heading;
