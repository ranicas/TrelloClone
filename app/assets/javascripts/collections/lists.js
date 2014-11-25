TrelloClone.Collections.Lists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,

	initialize: function(options) {
		this.board = options.board;
	},
	
	comparator: function(list) {
		return list.get("ord");
	},
	
	url: function() {
		return this.board.url() + "/lists"
	},
	
	getOrFetch: function(id) {
		var list = this.get(id);
		var lists = this;
		
		if (list) {
			list.fetch();
		} else {
			list = new TrelloClone.Models.Model({ id: id });
			list.fetch({
				success: function() {
					lists.add(list)
				}
			})
		}
		
		return list;
	}

});
