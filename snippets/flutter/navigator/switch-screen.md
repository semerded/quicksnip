---
title: Switch screen
description: Switch to a different screen and wait for a return value from that screen
author: semerded
tags: navigator,page
---


```dart
Navigator.push(,
    context,
    MaterialPageRoute<bool>(, // change bool if you want to return another datatype
	    builder: (context) => Page(), // add your page here
            ),
		).then((callback) {
		if (callback != null && callback) {
		    // do something with callback
		}
});
```
