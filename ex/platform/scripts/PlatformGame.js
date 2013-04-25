(function (Ω) {

	"use strict";

	var PlatformGame = Ω.Game.extend({

		canvas: "#board",

		init: function (w, h) {

			this._super(w, h);

			Ω._progress = function (cur, max) {
				// use for progress bar
			};


			Ω.input.binds([
				["space", "space"],
				["escape", "escape"],
				["left", "left"],
				["right", "right"],
				["up", "up"],
				["down", "down"],
				["mouse1", "mouse1"]
			]);

			this.setScreen(new TitleScreen());

		}

	});

	window.PlatformGame = PlatformGame;

}(Ω));