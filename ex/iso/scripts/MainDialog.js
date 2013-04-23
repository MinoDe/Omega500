(function (Ω) {

	"use strict";

	var MainDialog = Ω.Dialog.extend({

		tick: function (d) {

			this._super(d);

		},

		render: function (gfx) {

			this._super(gfx);

			var c = gfx.ctx;
			c.fillStyle = "#fff";
			c.fillText("Paused", gfx.w / 2 - 20, gfx.h / 2);

		}

	});

	window.MainDialog = MainDialog;

}(Ω));
