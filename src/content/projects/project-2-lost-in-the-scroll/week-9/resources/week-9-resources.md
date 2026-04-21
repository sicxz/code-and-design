# Week 9 Resources: The Deep

---

## Assigned (Before Day 1)

| Resource | Type | Time |
|----------|------|------|
| [GreenSock: ScrollTrigger Pinning](https://www.youtube.com/watch?v=bFxPJfDCPnM) | Video (pin section) | 8 min |
| Study one pinned section on Apple AirPods Pro page | Analysis | 7 min |

---

## Reference

| Resource | Why |
|----------|-----|
| [ScrollTrigger pin docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/pin) | Official pin reference |
| [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) | WCAG AA/AAA contrast testing |
| [Lighthouse (Chrome DevTools)](https://developer.chrome.com/docs/lighthouse/) | Performance + accessibility auditing |

---

## Video

| Resource | Time | Why |
|----------|------|-----|
| [GSAP: Advanced ScrollTrigger](https://www.youtube.com/watch?v=R7-3oEiDaio) | 15 min | Pinning, parallax, horizontal scroll — comprehensive |
| [Kevin Powell: Parallax Scrolling](https://www.youtube.com/watch?v=UB1O30fR-EE) | 10 min | CSS and JS parallax approaches, designer-friendly |

---

## Deep Dive

| Resource | Why |
|----------|-----|
| [ScrollTrigger Demos (CodePen)](https://codepen.io/collection/DkvGzg) | Official demo collection — study pinning patterns |
| [Inclusive Components by Heydon Pickering](https://inclusive-components.design/) | Accessible interaction patterns reference |
| [Squoosh.app](https://squoosh.app/) | Image compression tool for performance optimization |

---

## Inspiration: Advanced Scrollytelling

| Site | What to Notice |
|------|---------------|
| [Apple AirPods Pro](https://www.apple.com/airpods-pro/) | Multiple pinned sections with scrubbed 3D animation |
| [Femme Fatale](https://www.femmefatale.paris/en) | Horizontal scroll + pinning |
| [Active Theory](https://activetheory.net/) | Aggressive pinning — notice when it feels good vs. exhausting |
| [The Boat (SBS)](https://www.sbs.com.au/theboat/) | Pinned graphic novel panels — atmospheric scroll pacing |

---

## Cheat Sheet: Pinning + Parallax

```javascript
// PINNING: lock section, animate content within
const pinTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#section',
    start: 'top top',        // pin when section reaches viewport top
    end: '+=200%',           // pin for 2x viewport height of scroll
    pin: true,               // lock the section
    scrub: 1,                // link to scroll
    anticipatePin: 1,        // helps Safari
  }
});

pinTl
  .from('.step-1', { opacity: 0, y: 20 })
  .to('.step-1', { opacity: 0 }, '+=0.3')
  .from('.step-2', { opacity: 0, y: 20 });

// PARALLAX: background moves slower than foreground
gsap.to('.bg-image', {
  y: -100,                   // moves up 100px over scroll range
  ease: 'none',
  scrollTrigger: {
    trigger: '.section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,             // true = no smoothing
  }
});

// HORIZONTAL SCROLL (stretch goal)
const track = document.querySelector('.h-track');
gsap.to(track, {
  x: () => -(track.scrollWidth - window.innerWidth),
  ease: 'none',
  scrollTrigger: {
    trigger: '#h-section',
    start: 'top top',
    end: () => '+=' + track.scrollWidth,
    pin: true,
    scrub: 1,
  }
});
```
