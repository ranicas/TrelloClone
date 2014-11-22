TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],
	
	initialize: function() {
		this.listenTo(this.model, "sync", this.render);
		// this.selector = '#boards';
// 		this.subviews(this.selector);
// 		this.listenTo(this.collection, "add", this.addBoard);
// 		this.listenTo(this.collection, "remove", this.removeBoard)
	},
	
	render: function() {
		var showContent = this.template({ board: this.model });
		this.$el.html(showContent);
		// this.attachSubviews();
		return this;
	},
	
	// addBoard: function(board) {
// 		var subview = new TrelloClone.Views.BoardsIndexItem({ model: board})
// 		this.addSubview(this.selector, subview);
// 	},
//
// 	removeBoard: function(board) {
// 		var subview = new TrelloClone.Views.BoardsIndexItem({ model: board})
// 		this.removeSubview(this.selector, subview);
// 	}
});
