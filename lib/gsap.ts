"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Flip } from "gsap/Flip";
import { TextPlugin } from "gsap/TextPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Observer } from "gsap/Observer";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  ScrollToPlugin,
  Flip,
  TextPlugin,
  MotionPathPlugin,
  Observer,
  CSSRulePlugin
);

export {
  gsap,
  ScrollTrigger,
  ScrollToPlugin,
  Flip,
  TextPlugin,
  MotionPathPlugin,
  Observer,
  CSSRulePlugin,
  useGSAP,
};
