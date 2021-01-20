# React Native Issue #29292

The issue #29292 makes a regression on the `keyboardDidHide` behavior for the
Android platform, if it happens that you have multiple `ReactRootView`s on the
same application at once, the `keyboardDidHide` event happens for every `ReactRootView`
and the last event data  will prevail.


Having multiple `ReactRootView`s is specially common using `react-native-navigation`,
in this example we provide two `ReactRootView`, one as main canvas (in red) and one on the
top right screen border (in blue), the event `keyboardDidHide` is triggered twice,
where in the first trigger it sends the "right" value, because it is being triggered
by the main canvas (in red), and on the second trigger it sends the "wrong" value, since
it is being triggered by the top right screen view (in blue).

Comparing this behavior with the iOS counterpart the event is triggered only once
and it sends the right value, for this exact same code.
