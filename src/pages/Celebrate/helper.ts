/* eslint-disable @typescript-eslint/no-explicit-any */
import { WHITE_SPACE_CODE } from './AnimatedText';

export const splitChildrenToFragments = (children: any) =>
  children.toString().split(' ');

export const concatFragments = (children: any) => {
  const splittedChildren = splitChildrenToFragments(children);

  return ([] as string[])
    .concat(
      ...splittedChildren.map((word: any, index: any) =>
        index !== 0 ? [WHITE_SPACE_CODE, word] : [word]
      )
    )
    .map((word) => (word === ' ' ? WHITE_SPACE_CODE : word));
};