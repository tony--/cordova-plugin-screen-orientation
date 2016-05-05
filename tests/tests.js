/*
The MIT License (MIT)

Copyright (c) 2014

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

exports.defineAutoTests = function () {

	describe('Screen Orientation (navigator.screen.orientation)', function () {
		var fail = function(done) {
			expect(true).toBe(false);
			done();
		};

		it("screenOrientation.spec.1 should exist", function () {
			//screen-orientation extends the Screen interface
			expect(window.screen.orientation).toBeDefined();
		});

		it("screenOrientation.spec.2 should have the correct properties", function() {
			expect(typeof window.screen.orientation).toBeDefined();
		});

		it("screenOrientation.spec.3 should contain a lockOrientation function", function() {
			//NOTE: According to the spec, lockOrientation should return a Promise
			//However, Cordova does not support Promises at this time
			//Therefor this implementaiton does not return a Promise
			expect(typeof window.screen.lockOrientation).toBeDefined();
			expect(typeof window.screen.lockOrientation == 'function').toBe(true);
		});

		it("screenOrientation.spec.4 should contain a unlockOrientation function", function() {
			expect(typeof window.screen.unlockOrientation).toBeDefined();
			expect(typeof window.screen.unlockOrientation == 'function').toBe(true);
		});

	});
};

/******************************************************************************/
/******************************************************************************/
/******************************************************************************/

exports.defineManualTests = function (contentEl, createActionButton) {

};
