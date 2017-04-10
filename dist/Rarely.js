( function() {
		"use strict";

		function Rarely() {
			var _ref = arguments.length > 0 && arguments[ 0 ] !== undefined ? arguments[ 0 ] : {}
				, _ref$frequency = _ref.frequency
				, frequency = _ref$frequency === undefined ? 1 : _ref$frequency
				, _ref$rareEffeciency = _ref.rareEffeciency
				, rareEffeciency = _ref$rareEffeciency === undefined ? 1000 : _ref$rareEffeciency;

			this.frequency = frequency;
			this.rareEffeciency = rareEffeciency;
			this.rareIndex = rareEffeciency / frequency;
			this.callIndex = 0;
			this._calls = [];
			this._err = null;
			return this;
		}

		Rarely.prototype.err = function err( func ) {
			this._err = func;
			return this;
		};

		Rarely.prototype.call = function call( func ) {
			var rareEffeciency = this.rareEffeciency;

			var i = 0;
			while ( i < rareEffeciency ) {
				this._calls.push( func );
				i++;
			}
			return this;
		};

		Rarely.prototype.run = function run() {
			this.callIndex++;
			if ( this.callIndex >= this.rareIndex ) {
				var _calls;

				var index = this.callIndex - 1;
				( _calls = this._calls )[ index ].apply( _calls, arguments );
				this.callIndex -= this.rareIndex;
			} else if ( this._err ) {
				this._err.apply( this, arguments );
			}
			return this;
		};

		if ( typeof define === "function" && define.amd ) {
			define( [], function() {
				return Rarely;
			} );
		} else if ( typeof module === "object" && module.exports ) {
			module.exports = Rarely;
		} else if ( typeof exports !== "undefined" ) {
			exports.Rarely = Rarely;
		} else if ( typeof window !== "undefined" ) {
			window.Rarely = Rarely;
		} else {
			this.Rarely = Rarely;
		}

		return Rarely;
	}
	() );