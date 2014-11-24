TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
	template: JST['boards/show'],
	
	initialize: function() {
		this.listenTo(this.model, "sync", this.render);
		this.selector = '#lists';
		this.subviews(this.selector);
		this.listenTo(this.collection, "add", this.addList);
		this.listenTo(this.collection, "remove", this.removeList);
		this.collection.each((function(list) {
			this.addList(list)
		}).bind(this));
	},
	
	render: function() {
		var showContent = this.template({ board: this.model });
		this.$el.html(showContent);
		this.attachSubviews();
		return this;
	},

	addList: function(list) {
		var subview = new TrelloClone.Views.ListShow({ model: list, collection: list.cards()})
		this.addSubview(this.selector, subview);
	},

	removeList: function(list) {
		var subview = new TrelloClone.Views.ListShow({ model: list, collection: list.cards()})
		this.removeSubview(this.selector, subview);
	}
});
