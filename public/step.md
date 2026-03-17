I have built a React landing page with many scroll animations, but the scrolling feels laggy and not smooth. The animations stutter while scrolling.

Please optimize the page for smooth scrolling and high performance.

Requirements:

* Identify and fix performance issues causing scroll lag.
* Optimize animations to use GPU accelerated properties such as transform and opacity instead of top/left.
* Reduce unnecessary React re-renders.
* Implement smooth scrolling using Lenis or a similar modern smooth scroll library.
* If GSAP is used, optimize ScrollTrigger settings and avoid heavy calculations during scroll.
* Lazy load images and optimize large assets.
* Use requestAnimationFrame for animations when needed.
* Avoid layout thrashing and expensive DOM operations during scroll.

React specific optimizations:

* Use memoization where needed (React.memo, useMemo, useCallback).
* Avoid unnecessary state updates during scroll.
* Use passive event listeners for scroll events.

Goal:
The landing page should scroll smoothly at 60fps with modern smooth animations similar to premium agency websites.

Output:
Provide optimized React code and explain the changes needed to improve scroll performance.
