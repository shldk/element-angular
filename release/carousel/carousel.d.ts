import { AfterViewInit, OnChanges, OnDestroy, QueryList, SimpleChanges } from '@angular/core';
import { ElCarouselItem } from './carousel-item';
import { ElCarouselProps } from './carousel-props';
export declare class ElCarousel extends ElCarouselProps implements AfterViewInit, OnChanges, OnDestroy {
    children: QueryList<ElCarouselItem>;
    subscriber: Function[];
    items: any[];
    hasLabel: boolean;
    timer: any;
    constructor();
    btnActionHandle(nextValue: number, eventType: string): void;
    indicatorActionHandle(nextValue: number, eventType: string): void;
    setActiveItem(index: number): void;
    resetInterval(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
