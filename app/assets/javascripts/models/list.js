TrelloClone.Models.List = Backbone.Model.extend({
	urlRoot: "api/lists",
	
	cards: function(card) {
		if (!this._cards) {
			this._cards = new TrelloClone.Collections.Lists({ board: this });
		}
		
		return this._cards;
	},
	
	parse: function(resp) {
		if (resp.cards) {
			this.cards().set(resp.cards, { parse: true });
			delete resp.cards;
		}
		
		return resp;
	}
});
