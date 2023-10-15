import { AnimationProps } from "framer-motion";

const text1Variants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: {
      duration: 2,
    },
  },
};

const text2Variants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
    x: 100,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: {
      duration: 1,
    },
  },
};

const text3Variants: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: {
      duration: 3,
    },
  },
};

const text4Variants: AnimationProps["variants"] = {
  hidden: {
    x: -5,
  },
  visible: {
    x: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export const animationWel = {
  text1Variants,
  text2Variants,
  text3Variants,
  text4Variants,
};
