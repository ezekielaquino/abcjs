//    abc_crescendo_element.js: Definition of the CrescendoElem class.
//    Copyright (C) 2010,2014 Gregory Dyke (gregdyke at gmail dot com) and Paul Rosen
//
//    This program is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    This program is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with this program.  If not, see <http://www.gnu.org/licenses/>.

/*globals ABCJS */

if (!window.ABCJS)
	window.ABCJS = {};

if (!window.ABCJS.write)
	window.ABCJS.write = {};

ABCJS.write.CrescendoElem = function(anchor1, anchor2, dir) {
	this.anchor1 = anchor1; // must have a .x and a .parent property or be null (means starts at the "beginning" of the line - after keysig)
	this.anchor2 = anchor2; // must have a .x property or be null (means ends at the end of the line)
	this.dir = dir; // either "<" or ">"
	this.hasLowest2 = 4;
	this.pitch = undefined; // This will be set later
};

ABCJS.write.CrescendoElem.prototype.setUpperAndLowerElements = function(lowest1Pitch, lowest2Pitch, highest1Pitch, highest2Pitch) {
	this.pitch = lowest2Pitch;
};

ABCJS.write.CrescendoElem.prototype.draw = function (renderer) {
	if (this.pitch === undefined)
		window.console.error("Crescendo Element y-coordinate not set.");
	var y = renderer.calcY(this.pitch);
	if (this.dir === "<") {
		this.drawLine(renderer, y, y-4);
		this.drawLine(renderer, y, y+4);
	} else {
		this.drawLine(renderer, y-4, y);
		this.drawLine(renderer, y+4, y);
	}
};

ABCJS.write.CrescendoElem.prototype.drawLine = function (renderer, y1, y2) {
	var pathString = ABCJS.write.sprintf("M %f %f L %f %f",
		this.anchor1.x, y1, this.anchor2.x, y2);
	renderer.printPath({path:pathString, stroke:"#000000", 'class': renderer.addClasses('decoration')});
};
