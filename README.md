Easy Tracker
==============

Easy Tracker acts as a very simple unobtrusive ga.js (Google Analytics) event tracking wrapper for easy setup of multiple element click tracking.


Usage
-----

• Include 'easy tracker' on pages where you want to track click events  
• Run MRK.EasyTrack function and pass in the element to listen to and your Google Analytics properties (category, action and label)


As shown in launcher.js

``` js
MRK.EasyTrack(
	element,
	category,
	action,
	label
);
```


Dependencies
------------

As this is a wrapper for ga.js (Google Analytics) event tracking, you need to include ga.js on your pages.

See the dev guide for more information:  
https://developers.google.com/analytics/devguides/collection/gajs/