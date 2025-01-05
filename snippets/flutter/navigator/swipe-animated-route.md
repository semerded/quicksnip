---
title: Swipe animated route
description: Add a swipe animation to a page switch route. Can swipe left or right
author: semerded
tags: navigator,page,animation
---

```dart
enum Direction {
  left,
  right,
  up,
  down,
}

Route swipeAnimatedRoute(Widget page, Direction direction) {
  assert(direction == Direction.left || direction == Direction.right); // direction up or down not permitted
  return PageRouteBuilder(
    pageBuilder: (context, animation, secondaryAnimation) => page,
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      Offset begin;
      const Offset end = Offset.zero;
      if (direction == Direction.left) {
        begin = const Offset(1.0, 0.0);
      } else {
        begin = const Offset(-1.0, 0.0);
      }

      const Curve curve = Curves.ease;

      Animatable<Offset> tween = Tween(begin: begin, end: end).chain(CurveTween(curve: curve));

      return SlideTransition(
        position: animation.drive(tween),
        child: child,
      );
    },
  );
}
```
