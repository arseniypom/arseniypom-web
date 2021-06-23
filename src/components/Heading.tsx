import React from 'react';

interface IHeadingfProps {
  text: string;
}

const Heading: React.FC<IHeadingfProps> = ({text}) => {

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

        letter.dataset.aos="zoom-in";
        letter.dataset.aosDuration="200";
        letter.dataset.aosDelay=`${i * 150}`
  
        heading.current.append(letter)
      });

  }, []);


  return (
    <header ref={heading} className="section-heading"></header>
  )
}

export default Heading;
