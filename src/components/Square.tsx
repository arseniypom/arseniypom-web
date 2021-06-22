import React from 'react';

interface ISquareProps {
  activeColorPalette: Array<string>,
}

const Square: React.FC<ISquareProps> = ({activeColorPalette}) => {
  const setColor = (e: React.MouseEvent<Element, MouseEvent>) : void => {
    const target = e.target as HTMLTextAreaElement;
    const color = '#' + getRandomColor();
    target.style.backgroundColor = color;
    // target.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }
  const resetColor = (e: React.MouseEvent<Element, MouseEvent>) : void => {
    const target = e.target as HTMLTextAreaElement;
    target.style.backgroundColor = '#1d1d1d';
    // element.style.boxShadow = `0 0 2px #000`;
  }
  
  const getRandomColor = () => {
    const colorIndex: number = Math.round(Math.random() * activeColorPalette.length);
    return activeColorPalette[colorIndex];
  }

  return (
    <div
      className="square"
      onMouseOver={setColor}
      onMouseLeave={resetColor}
      >
    </div>
  )
}

export default Square;