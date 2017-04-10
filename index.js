export default class Rarely {
	constructor( { frequency = 1, rareEffeciency = 1000 } = {} ) {
		this.frequency = frequency;
		this.rareEffeciency = rareEffeciency;
		this.rareIndex = rareEffeciency / frequency;
		this.callIndex = 0;
		this._calls = [];
		this._err = null;
		return this;
	}
	err( func ) {
		this._err = func;
		return this;
	}
	call( func ) {
		const { rareEffeciency } = this;
		let i = 0;
		while ( i < rareEffeciency ) {
			this._calls.push( func );
			i++
		}
		return this;
	}
	run( ...args ) {
		this.callIndex++;
		if ( this.callIndex >= this.rareIndex ) {
			let index = this.callIndex - 1;
			this._calls[ index ]( ...args );
			this.callIndex -= this.rareIndex;
		} else if ( this._err ) {
			this._err( ...args );
		}
		return this;
	}
}