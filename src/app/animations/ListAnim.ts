import { trigger, animate, style, transition, animateChild, query, stagger, state } from '@angular/animations';

export const ListItemAnim =
    trigger('ListItemAnim', [
        //on
        transition(':enter', [
            //from
            style({
                transform: 'scale(0.5)',
                opacity: 0,
                height: '0px',
                margin: '0px'
            }),
            //to
            animate('0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                style({
                    transform: 'scale(1)',
                    opacity: 1,
                    height: '*',
                    margin: '*'
                }))
        ]),
        //on
        transition(':leave', [
            //from
            style({
                transform: 'scale(1)',
                opacity: 1,
                height: '*'
            }),
            //to
            animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
                style({
                    transform: 'scale(0.5)',
                    opacity: 0,
                    height: '0px',
                    margin: '0px'
                }))
        ])
    ])

export const ListAnim =
    trigger('ListAnim', [
        transition(':enter, :leave', [
            query('@*',
                stagger('300ms', animateChild())
            )
        ]),
    ])