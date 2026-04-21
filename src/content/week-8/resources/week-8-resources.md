# Week 8 Resources: The Scroll

---

## Assigned (Before Day 2)

| Resource | Type | Time |
|----------|------|------|
| [GSAP ScrollTrigger Tutorial](https://www.youtube.com/watch?v=X7IBa7vZjmo) | Video | 10 min |
| Browse 2 scrollytelling examples (see Learn 8-1) | Analysis | 15 min |

---

## Reference

| Resource | Why |
|----------|-----|
| [ScrollTrigger Docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Full API reference |
| [ScrollTrigger start/end](https://gsap.com/docs/v3/Plugins/ScrollTrigger/#config-object) | Start and end value syntax |
| [ScrollTrigger scrub](https://gsap.com/docs/v3/Plugins/ScrollTrigger/scrub) | Scrub modes explained |

---

## Video

| Resource | Time | Why |
|----------|------|-----|
| [GSAP ScrollTrigger in 3 Minutes](https://www.youtube.com/watch?v=jRfHHRzlZoA) | 3 min | Quick visual overview |
| [GreenSock: ScrollTrigger 101](https://www.youtube.com/watch?v=bFxPJfDCPnM) | 12 min | Official detailed tutorial |
| [Fireship: Scroll Animations](https://www.youtube.com/watch?v=T33NN_pPeNI) | 5 min | Quick demo of scroll-driven effects |

---

## Deep Dive

| Resource | Why |
|----------|-----|
| [ScrollTrigger Demos (CodePen)](https://codepen.io/collection/DkvGzg) | Official CodePen collection — fork and experiment |
| [Smashing Magazine: Practical Guide to ScrollTrigger](https://www.smashingmagazine.com/2021/02/scrolltrigger-greensock-animation/) | In-depth walkthrough with real examples |

---

## Tools

| Tool | Use |
|------|-----|
| [ScrollTrigger Visualizer](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.visualize()/) | Debug tool for complex scroll setups |
| [GSAP CodePen Starter (ScrollTrigger)](https://codepen.io/GreenSock/pen/WNNNBpp) | Pre-configured starter for experimentation |

---

## Inspiration: Scrollytelling

| Site | What to Notice |
|------|---------------|
| [The Pudding](https://pudding.cool/) | How data reveals through scroll — notice trigger vs. scrub choices |
| [Apple AirPods Pro](https://www.apple.com/airpods-pro/) | Product scrub animations — scroll controls playback |
| [How the Virus Got Out (NYT)](https://www.nytimes.com/interactive/2020/03/22/world/coronavirus-spread.html) | Map animation driven by scroll position |
| [Boat (SBS Australia)](https://www.sbs.com.au/theboat/) | Graphic novel scrollytelling — atmospheric use of scroll |

---

## Cheat Sheet: ScrollTrigger

```javascript
// REGISTER PLUGIN (once, at top of file)
gsap.registerPlugin(ScrollTrigger);

// BASIC: trigger-and-play
gsap.from('.element', {
  opacity: 0, y: 30,
  scrollTrigger: {
    trigger: '.section',       // element to watch
    start: 'top 80%',          // when to start
    markers: true              // debugging (remove for prod!)
  }
});

// TIMELINE with ScrollTrigger
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.section',
    start: 'top 75%',
  }
});
tl.from('.heading', { opacity: 0, y: 30 })
  .from('.text', { opacity: 0, y: 20 }, '-=0.2');

// SCRUB: animation linked to scroll
gsap.to('.element', {
  x: 200,
  scrollTrigger: {
    trigger: '.section',
    start: 'top center',
    end: 'bottom center',
    scrub: 1,                  // 1s smoothing
  }
});

// START/END VALUES
'top 80%'      // trigger top at 80% of viewport
'top center'   // trigger top at viewport center
'top top'      // trigger top at viewport top (pinning)
'center center' // trigger center at viewport center
'bottom bottom' // trigger bottom at viewport bottom

// BATCH (animate many similar sections)
gsap.utils.toArray('.section').forEach(section => {
  gsap.from(section.querySelector('h2'), {
    opacity: 0, y: 30,
    scrollTrigger: { trigger: section, start: 'top 80%' }
  });
});
```
