import { AnimationController } from '@ionic/angular';
const animationCtrl = new AnimationController();

export const getIonPageElement = (element: HTMLElement) => {
  if (element.classList.contains('ion-page')) {
    return element;
  }

  const ionPage = element.querySelector(
    ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
  );
  if (ionPage) {
    return ionPage;
  }

  return element;
};

export const fancyAnimation = (_: HTMLElement, opts: any) => {
  const backDirection = opts.direction === 'back';
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;

  const enteringPageEl = getIonPageElement(enteringEl);
  const leavingPageEl = getIonPageElement(leavingEl);

  const rootTransition = animationCtrl.create();

  const enterTransition = animationCtrl.create();
  const leavePageTransition = animationCtrl.create();
  const leavingTransition = animationCtrl.create();
  const reEnteringTransition = animationCtrl.create();

  leavingTransition
    .addElement(getIonPageElement(leavingEl))
    .duration(500)
    .easing('cubic-bezier(0.32,0.72,0,1)');

  reEnteringTransition
    .addElement(getIonPageElement(enteringEl))
    .duration(500)
    .easing('cubic-bezier(0.32,0.72,0,1)');

  enterTransition
    .addElement(enteringPageEl)
    .duration(500)
    .easing('cubic-bezier(0.32,0.72,0,1)')
    .fill('both')
    .beforeRemoveClass('ion-page-invisible');

  leavePageTransition
    .addElement(leavingPageEl)
    .duration(500)
    .easing('cubic-bezier(0.32,0.72,0,1)')
    .fill('both');

  if (!backDirection) {
    enterTransition
      .keyframes([
        { offset: 0, transform: 'translateX(100%)' },
        { offset: 1, transform: 'translateX(0)' }
      ]);

    leavePageTransition
      .keyframes([
        { offset: 0, transform: 'translateX(0)' },
        { offset: 1, transform: 'translateX(-100%)' }
      ]);
  } else {
    leavingTransition
      .keyframes([
        { offset: 0, transform: 'translateX(0)' },
        { offset: 1, transform: 'translateX(100%)' }
      ]);

    reEnteringTransition
      .keyframes([
        { offset: 0, transform: 'translateX(-100%)' },
        { offset: 1, transform: 'translateX(0)' }
      ]);
  }

  rootTransition.addAnimation([enterTransition, leavePageTransition, leavingTransition, reEnteringTransition]);

  return rootTransition;
};
