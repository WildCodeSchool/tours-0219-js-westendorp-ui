import {
  trigger,
  animate,
  transition,
  style,
  query,
  group,
  animateChild,
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '100%',
        minHeight: '100vh',
      }),
    ]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [animate('100ms linear', style({ opacity: 0 }))],
        { optional: true },
      ),
      query(':enter', [
        animate('100ms linear', style({ opacity: 1 })),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
