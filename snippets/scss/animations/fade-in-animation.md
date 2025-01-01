---
Title: Fade In Animation
Description: Animates the fade-in effect.
Author: dostonnabotov
Tags: scss,animation,fade,css
---

```scss
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@mixin fade-in($duration: 1s, $easing: ease-in-out) {
  animation: fade-in $duration $easing;
}
```