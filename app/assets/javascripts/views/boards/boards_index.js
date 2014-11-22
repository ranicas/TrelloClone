TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST['boards/index'],
	
	initialize: function() {
		this.selector = '#boards';
		this.subviews(this.selector);
		this.listenTo(this.collection, "add", this.addBoard);
		this.listenTo(this.collection, "remove", this.removeBoard)
	},
	
	render: function() {
		var indexContent = this.template();
		this.$el.html(indexContent);
		this.attachSubviews();
		return this;
	},
	
	addBoard: function(board) {
		var subview = new TrelloClone.Views.BoardsIndexItem({ model: board})
		this.addSubview(this.selector, subview);
	},
	
	removeBoard: function(board) {
		var subview = new TrelloClone.Views.BoardsIndexItem({ model: board})
		this.removeSubview(this.selector, subview);
	}
});
