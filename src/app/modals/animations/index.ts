import { AnimationController } from '@ionic/angular';
const animationCtrl = new AnimationController();

export const modalSlideEnterAnimation = (baseEl?: HTMLElement) => {
  const $element = baseEl.querySelector('.modal-wrapper');

  return animationCtrl
    .create()
    .addElement($element)
    .easing('cubic-bezier(0.32,0.72,0,1)')
    .keyframes([
      { offset: 0, transform: 'translateX(100%)' },
      { offset: 1, transform: 'translateX(0)' }
    ])
    .duration(500);
};

export const modalSlideLeaveAnimation = (baseEl: any) => {
  return modalSlideEnterAnimation(baseEl).direction('reverse');
};
