/*
	Easy Tracker

	Copyright (c) 2013 Jabin King (Mister King Design), http://mister-king.co.uk
	https://github.com/Mister-King

	Description: Easy Tracker acts as a very simple unobtrusive ga.js
	event tracking wrapper for easy setup of multiple element click tracking.

	Set up tracking like so:

	MRK.EasyTrack(
		element,
		category,
		action,
		label
	);
*/

var MRK = MRK || {};

MRK.EasyTrack = function (element, category, action, label)
{
	var $element = $(element);
	if (!$element.length) { return false; }

	$element.click(function()
	{
		_gaq.push(['_trackEvent', category, action, label]);
	});
};