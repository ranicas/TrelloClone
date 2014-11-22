TrelloClone.Routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "boardIndex",
		"boards/:id": "boardShow"
	},
	
	initialize: function(options){
		this.$mainEl = options.$mainEl;
	},
	
	boardIndex: function() {
		this.collection = new TrelloClone.Collections.Boards();
		this.collection.fetch();
		var indexView = new TrelloClone.Views.BoardsIndex({ collection: this.collection });
		this._swapView(indexView.render().$el);
	},
	
	boardShow: function(id) {
		var board = TrelloClone.Boards.getOrFetch(id);
		board.fetch();
		var showView = new TrelloClone.Views.BoardsShow({ model: board });
		this._swapView(showView.render().$el)
	},
	
	_swapView: function(newView) {
		if (this.currentView) {
			this.currentView.remove();
		}
		
		this.$mainEl.html(newView);
		this.currentView = newView;
	}
});
