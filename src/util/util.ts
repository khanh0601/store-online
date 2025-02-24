"use client";
import Lenis from "lenis";
import gsap from "gsap";
const lerp = (a:number ,b:number ,t:number = 0.08) => {
    return a + (b - a) * t;
}
const lenis = new Lenis();

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

export function initLenis() {
  requestAnimationFrame(raf);
}

export function initCursor() {
  const pointer = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    xNor: 0.5,
    yNor: 0.5,
  };

  const xSetter = (el: Element) => gsap.quickSetter(el, "x", "px");
  const ySetter = (el: Element) => gsap.quickSetter(el, "y", "px");
  const xGetter = (el: Element) => gsap.getProperty(el, 'x');
  const yGetter = (el: Element) => gsap.getProperty(el, 'y');
  function updatePointer(e: PointerEvent) {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.xNor = e.clientX / window.innerWidth;
    pointer.yNor = e.clientY / window.innerHeight;
    if (cursor.userMoved != true) {
        cursor.userMoved = true;
        cursor.init()
    }
  }

  document.documentElement.setAttribute("data-has-cursor", "true");
  window.addEventListener("pointermove", updatePointer);

  class Cursor {
    private targetX: number;
    private targetY: number;
    private cursorMain: HTMLElement | null;
    private cursorInner: HTMLElement | null;
    public userMoved: boolean;
    constructor() {
      this.targetX = pointer.x;
      this.targetY = pointer.y;
      this.cursorMain = document.querySelector(".cursor_main");
      this.cursorInner = document.querySelector(".cursor_main .cursor_inner");
      this.userMoved = false;
      if (this.cursorMain) {
        xSetter(this.cursorMain)(this.targetX);
        ySetter(this.cursorMain)(this.targetY);
      }
    }

    init() {
      requestAnimationFrame(this.update.bind(this));
      this.cursorInner?.classList.add("active");
    }

    update() {
        if (this.userMoved ) {
            this.updatePosition()
        }
      requestAnimationFrame(this.update.bind(this));
    }
    updatePosition() {
        this.targetX = pointer.x;
        this.targetY = pointer.y;
        let targetInnerX: number = 0;
        let targetInnerY: number = 0;
        if(this.cursorInner && this.cursorMain){
             targetInnerX = Number(xGetter(this.cursorMain));
             targetInnerY = Number(yGetter(this.cursorMain));
        }

        if (document.querySelector('[data-cursor]:hover') && document.querySelectorAll('[data-cursor]:hover').length > 0) {
            this.onHover()
        } else {
            this.reset()
        }

        if (Math.hypot(this.targetX - targetInnerX ,this.targetY - targetInnerY) > 1 || Math.abs(lenis.velocity) > .1) {
            if (this.cursorInner && this.cursorMain) {
                xSetter(this.cursorMain)(lerp(targetInnerX, this.targetX, 0.1))
                ySetter(this.cursorMain)(lerp(targetInnerY, this.targetY - lenis.velocity / 16 , 0.1))
            }
        }
    }
    onHover() {
       
    }
    reset() {
        document.querySelector('.cursor-inner')?.classList.remove('on-hover-drag')
    }
  }

  const cursor = new Cursor();
}
