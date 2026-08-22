import { Variants } from "framer-motion"

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
}

export const fadeUp: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: 12, transition: { duration: 0.25, ease: "easeIn" } },
}

export const fadeDown: Variants = {
  initial: { opacity: 0, y: -16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: "easeIn" } },
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2, ease: "easeIn" } },
}

export const slideInRight: Variants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
}

export const slideInLeft: Variants = {
  initial: { x: "-100%", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { x: "-100%", opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const hoverLift = {
  whileHover: { y: -2, transition: { duration: 0.2, ease: "easeOut" } },
  whileTap: { y: 0, scale: 0.98 },
}

export const hoverScale = {
  whileHover: { scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } },
  whileTap: { scale: 0.97 },
}

export const modalTransition: Variants = {
  initial: { opacity: 0, scale: 0.94, y: 8 },
  animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 0.95, y: 8, transition: { duration: 0.2, ease: "easeIn" } },
}
