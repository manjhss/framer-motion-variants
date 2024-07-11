// PARENT

export const parentFadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.6,
      duration: 0.6,
    },
  },
};

// CHILDREN

// fade
export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const fadeInTop = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const fadeInBottom = {
  initial: {
    opacity: 0,
    y: -24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: 24,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const fadeInRight = {
  initial: {
    opacity: 0,
    x: -24,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const fadeInLeftRight = {
  left: {
    opacity: 0,
    x: -24,
  },
  right: {
    opacity: 0,
    x: 24,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

// scale
export const scaleUp = {
  initial: {
    opacity: 0,
    scale: 0.6,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

export const scaleUpTop = {
  initial: {
    opacity: 0,
    scale: 0.6,
    y: 60,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const scaleUpBottom = {
  initial: {
    opacity: 0,
    scale: 0.6,
    y: -60,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const scaleUpLeft = {
  initial: {
    opacity: 0,
    scale: 0.6,
    x: 60,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const scaleUpRight = {
  initial: {
    opacity: 0,
    scale: 0.6,
    x: -60,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const scaleUpHero = {
  initial: {
    opacity: 0,
    scale: 0.6,
    x: 60,
    y: 60,
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
