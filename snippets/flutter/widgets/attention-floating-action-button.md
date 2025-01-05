---
title: Attention Floating Action Button
description: A floating action button that seeks attention by doing an up and down animation. This can be enabled/disabled with a boolean value.
author: semerded
tags: widget,animation,button
---

```dart
import 'package:flutter/material.dart';

class AddButtonAnimated extends StatefulWidget {
  final VoidCallback onPressed;
  final Widget child;
  final Color backgroundColor;
  final bool animateWhen; // animate under a certain condition
  final String? heroTag;
  const AddButtonAnimated({
    required this.child
    required this.backgroundColor,
    required this.animateWhen,
    required this.onPressed,
    this.heroTag,
    super.key,
  });

  @override
  State<AddButtonAnimated> createState() => _AddButtonAnimatedState();
}

class _AddButtonAnimatedState extends State<AddButtonAnimated> with SingleTickerProviderStateMixin {
  late final Animation<Offset> slideAnimation;
  late final Animation<double> scaleAnimation;
  late final Animation<double> fadeAnimation;
  late AnimationController animationController;

  @override
  void initState() {
    super.initState();
    animationController = AnimationController(
      duration: const Duration(milliseconds: 2000),
      vsync: this,
    )..repeat();
    slideAnimation = TweenSequence<Offset>(
      [
        TweenSequenceItem<Offset>(
            tween: Tween<Offset>(
              begin: Offset.zero,
              end: const Offset(0, -0.2),
            ),
            weight: 2),
        TweenSequenceItem<Offset>(
            tween: Tween<Offset>(
              begin: const Offset(0, -0.2),
              end: Offset.zero,
            ).chain(
              CurveTween(curve: Curves.linear),
            ),
            weight: 2),
        TweenSequenceItem<Offset>(
            tween: Tween<Offset>(
              begin: Offset.zero,
              end: const Offset(0, -0.2),
            ),
            weight: 2),
        TweenSequenceItem<Offset>(
            tween: Tween<Offset>(
              begin: const Offset(0, -0.2),
              end: Offset.zero,
            ).chain(
              CurveTween(curve: Curves.linear),
            ),
            weight: 2),
        TweenSequenceItem<Offset>(
            tween: Tween<Offset>(
              begin: Offset.zero,
              end: Offset.zero,
            ).chain(
              CurveTween(curve: Curves.linear),
            ),
            weight: 14),
      ],
    ).animate(animationController);
  }

  @override
  Widget build(BuildContext context) {
    if (widget.animateWhen) {
      animationController.repeat();
    } else {
      animationController.reset();
      animationController.stop();
    }
    return SlideTransition(
      position: slideAnimation,
      child: FloatingActionButton(
        elevation: 5,
        backgroundColor: widget.backgroundColor,
        heroTag: widget.heroTag,
        onPressed: () {
          widget.onPressed();
        },
        child: widget.child,
      ),
    );
  }
}

```