import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const Tilt = ({ options, children }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, options);
    }

    // Cleanup on unmount
    return () => {
      if (tiltRef.current?.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div ref={tiltRef}>
      {children}
    </div>
  );
};

export default Tilt;
