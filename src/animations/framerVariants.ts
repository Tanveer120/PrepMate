

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as any }
};

export const cardEntrance = {
  hidden: { opacity: 0, scale: 0.98, y: 10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as any }
  }
};

export const stickerFloat = {
  initial: { y: 0, rotate: -2 },
  animate: {
    y: [0, -6, 0],
    rotate: [-2, 2, -2],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as any
    }
  }
};

export const stickerPop = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1,
    transition: {
      type: "spring" as any,
      stiffness: 260,
      damping: 20
    }
  }
};

export const mascotIdle = {
  initial: { scaleY: 1 },
  animate: {
    scaleY: [1, 1.02, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as any
    }
  }
};

export const mascotCheer = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      ease: "easeOut" as any
    }
  }
};

export const pressFeedback = {
  rest: { scale: 1 },
  hover: { scale: 1.01 },
  pressed: { scale: 0.98 }
};
