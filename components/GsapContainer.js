"use client"
import React from 'react';
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function GsapContainer({ children }) {
  const container = useRef();
  useGSAP(() => {
    // gsap code here...
    gsap.to(".box", { rotation: "+=360" }); // <-- automatically reverted

  }, { scope: container }); // <-- scope is for selector text (optional)

  return (<div ref={container}>{children}</div>)
};

