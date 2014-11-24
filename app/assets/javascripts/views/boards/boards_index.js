TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST['boards/index'],
	
	events: {
		"click #new-board a": "newBoard"
	},
	
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
	
	newBoard: function() {
		var board = new TrelloClone.Models.Board({ title: "" });
		var formView = new TrelloClone.Views.BoardsForm({ model: board, collection: this.collection });
		$("#new-board").html(formView.render().$el);
	},
	
	removeBoard: function(board) {
		var subview = new TrelloClone.Views.BoardsIndexItem({ model: board})
		this.removeSubview(this.selector, subview);
	}
});
