# Week 6 Resources: The Blueprint

## Assigned (Before Day 2)

| Resource | Type | Time |
|----------|------|------|
| [GSAP ScrollTrigger — Getting Started](https://gsap.com/scroll/) | Docs + Demos | 10 min |
| [GSAP ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Reference | 10 min |
| Learn 6-2: Animating SVG Icons with GSAP + AI (in-course tutorial) | Tutorial | 60–90 min |

---

## Reference

| Resource | Why |
|----------|-----|
| [GSAP ScrollTrigger API](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Full property reference — bookmark this |
| [DrawSVGPlugin Docs](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/) | SVG stroke animation API |
| [GSAP .to() Docs](https://gsap.com/docs/v3/GSAP/gsap.to()) | Tween method reference |
| [GSAP .from() Docs](https://gsap.com/docs/v3/GSAP/gsap.from()) | Tween method reference |
| [GSAP .fromTo() Docs](https://gsap.com/docs/v3/GSAP/gsap.fromTo()) | Tween method reference |
| [GSAP Plugins Overview](https://gsap.com/docs/v3/Plugins/) | See all available plugins |
| [GreenSock CodePen Collection](https://codepen.io/GreenSock) | Official examples with premium plugins enabled |

---

## Video

| Resource | Time | Why |
|----------|------|-----|
| [GSAP in 100 Seconds — Fireship](https://www.youtube.com/watch?v=M4GCT1FR1Jc) | 2 min | Quick refresher on GSAP core concepts |
| [GSAP ScrollTrigger Introduction](https://www.youtube.com/watch?v=X7IBa7vZjmo) | ~10 min | Official GreenSock ScrollTrigger walkthrough |
| [Parallax Scrolling Effect with GSAP](https://www.youtube.com/results?search_query=GSAP+ScrollTrigger+parallax+tutorial) | 8–15 min | Search and pick one under 15 min from a trusted channel |
| [Kevin Powell: Parallax Scroll Effect](https://www.youtube.com/results?search_query=kevin+powell+parallax+scroll) | 10–15 min | Designer-friendly, CSS-first then enhanced |

---

## Deep Dive

| Resource | Why |
|----------|-----|
| [GSAP ScrollTrigger — Common Mistakes](https://gsap.com/resources/st-mistakes/) | Avoid the pitfalls before you hit them |
| [GSAP ScrollTrigger — Most Common Mistakes (video)](https://www.youtube.com/watch?v=RBJbmAjSKJk) | Visual walkthrough of what goes wrong and why |
| [Smashing Magazine: Practical Guide to Scroll-Driven Animations](https://www.smashingmagazine.com/2023/10/scroll-progress-animations-gsap-scrolltrigger/) | In-depth parallax and scroll animation theory |
| [web.dev: Scroll-Driven Animations](https://developer.chrome.com/docs/css-ui/scroll-driven-animations) | Native CSS scroll APIs (context, not for this project) |

---

## Tools

| Tool | Use |
|------|-----|
| [GSAP ScrollTrigger Demos](https://gsap.com/scroll/) | Official interactive demos — fork and study |
| [GSAP Ease Visualizer](https://gsap.com/docs/v3/Eases/) | Pick and preview easing curves (bookmark this) |
| [CodePen](https://codepen.io/) | Where all GSAP premium plugins work free (DrawSVG, MorphSVG, etc.) |
| [Figma Variables Guide](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma) | Setting up variables and modes |
| [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) | Verify WCAG AA contrast for light/dark modes |

---

## Inspiration

| Site | What to Notice |
|------|---------------|
| [Apple AirPods Pro](https://www.apple.com/airpods-pro/) | Product parallax with scroll-driven reveals — layers create depth |
| [The Pudding](https://pudding.cool/) | Data-driven scrollytelling with intentional pacing — content drives the motion |
| [Species in Pieces](http://www.species-in-pieces.com/) | Polygon art with scroll reveals — each section has a distinct rhythm |
| [Lusion](https://lusion.co/) | Agency site with bold parallax and 3D depth |
| [Linear](https://linear.app/) | Subtle entrance animations and parallax on a product page |
| [Locomotive Scroll Demos](https://locomotivemtl.github.io/locomotive-scroll/) | Smooth scroll parallax with configurable depth |

---

## Cheat Sheet: GSAP ScrollTrigger + Parallax

### Register ScrollTrigger
```js
gsap.registerPlugin(ScrollTrigger);
```

### Trigger an Animation on Scroll
```js
gsap.from(".element", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".element",
    start: "top 80%",      // element top hits 80% of viewport
    end: "top 20%",
    markers: true,           // remove in production
    toggleActions: "play none none reverse"
  }
});
```

### Scrubbed Animation (progress = scroll)
```js
gsap.to(".progress-bar", {
  scaleX: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".story",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});
```

### Parallax Layers
```js
// Same trigger, different speeds = depth
const parallaxTrigger = {
  trigger: ".scene",
  start: "top bottom",
  end: "bottom top",
  scrub: true
};

gsap.to(".layer--bg",  { y: -50,  ease: "none", scrollTrigger: parallaxTrigger });
gsap.to(".layer--mid", { y: -150, ease: "none", scrollTrigger: {...parallaxTrigger} });
gsap.to(".layer--fg",  { y: -300, ease: "none", scrollTrigger: {...parallaxTrigger} });
```

### Tween Methods
```js
// Animate FROM current → TO these values
gsap.to(".el", { x: 100, opacity: 0.5, duration: 1 });

// Animate FROM these values → TO current
gsap.from(".el", { y: 50, opacity: 0, duration: 1 });

// Animate FROM start → TO end (full control)
gsap.fromTo(".el",
  { opacity: 0, scale: 0.8 },
  { opacity: 1, scale: 1, duration: 1 }
);
```

### Reduced Motion Check
```js
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  // Your GSAP animations here
}
```
