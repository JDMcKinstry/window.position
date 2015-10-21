(function() {
	/**	window.position
	 *	Add `position` method to windows object that allows for detection of the current browser window position.
	 *
	 *	@returns Object Object of x and y points of current position. Also updates window.position properties, as neccesary.
	 *	
	 *	@property INT window.position.originX Original X point upon page load. Never updates, unless page is reloaded.
	 *	@property INT window.position.originY Original Y point upon page load. Never updates, unless page is reloaded.
	 *	@property INT window.position.lastX Last X Point at time of last call to window.position() method. Only updates if current position has changed since last call.
	 *	@property INT window.position.lastY Last Y Point at time of last call to window.position() method. Only updates if current position has changed since last call.
	 *	@property INT window.position.x Current X Point at time of last call to window.position() method. Updates everytime window.position() method is called.
	 *	@property INT window.position.y Current Y Point at time of last call to window.position() method. Updates everytime window.position() method is called.
	 *
	 *	@property ARRAY window.position.history Collection of calls made to window.position().
	 */
	window['position'] = function() {
		var position = function() {
				var a = 0 <= /MSIE|Trident/i.test(navigator.userAgent) ? { x: window.screenLeft, y: window.screenTop } : { x: window.screenX, y: window.screenY };
				void 0 == window.position && (window.position = {});
				void 0 == window.position.history && (window.position.history = []);
				if (void 0 == window.position.lastX || a.x != window.position.x) window.position.lastX = window.position.x;
				if (void 0 == window.position.lastY || a.y != window.position.y) window.position.lastY = window.position.y;
				window.position.x = a.x;
				window.position.y = a.y;
				window.position.history.push({ x: a.x, y: a.y, last: { x: window.position.lastX, y: window.position.lastY } });
				return a;
			},
			pos = position();
		position.originX = position.x = pos.x;
		position.originY = position.y = pos.y;
		position.history = [{ x: pos.x, y: pos.y, last: { x: pos.x, y: pos.y } }];
		return position;
	}();
})();
