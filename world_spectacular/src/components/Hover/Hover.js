import React, {useState, useEffect} from 'react'


const Hover = ({ rotation = 0, timing = 150, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const style = {
      display: 'inline-block',
      backfaceVisibility: 'hidden',
      transform: isHovered
        ? `rotate(${rotation}deg)`
        : `rotate(0deg)`,
      transition: `transform ${timing}ms`,
      borderRadius: '100%',
    };
   useEffect(() => {
      if (!isHovered) {
        return;
      }
      const timeoutId = window.setTimeout(() => {
        setIsHovered(false);
      }, timing);
      return () => {
        window.clearTimeout(timeoutId);
      };
    }, [isHovered, timing]);
    const trigger = () => {
      setIsHovered(true);
    };
    return (
      <span onMouseEnter={trigger} style={style}>
        {children}
      </span>
    );
  };

  export default Hover