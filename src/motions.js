import posed from 'react-pose';

export const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 500 },
  exit: { afterChildren: true, opacity: 0, delay: 500 }
});

export const Page = posed.div({
  enter: { x: 0, delay: 500 },
  exit: { x: -300, delay: 500 }
});
