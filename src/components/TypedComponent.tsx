// TypedComponent.tsx
import React from 'react';
import { ReactTyped } from "react-typed";

interface TypedComponentProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
}

const TypedComponent: React.FC<TypedComponentProps> = ({
  strings,
  typeSpeed = 100,
  backSpeed = 50,
  backDelay = 2000,
  loop = true
}) => {
  return (
    <div className="typed">
      <ReactTyped
        strings={strings}
        typeSpeed={typeSpeed}
        backSpeed={backSpeed}
        backDelay={backDelay}
        loop={loop}
      />
    </div>
  );
};

export default TypedComponent;
