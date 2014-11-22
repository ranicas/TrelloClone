TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],
	
	initialize: function() {
		this.listenTo(this.model, "sync", this.render);
		this.selector = '.list-item';
		this.subviews(this.selector);
		this.listenTo(this.collection, "add", this.addCard);
		this.listenTo(this.collection, "remove", this.removeCard)
	},
	
	render: function() {
		var showContent = this.template({ list: this.model });
		this.$el.html(showContent);
		this.attachSubviews();
		return this;
	},

	addCard: function(list) {
		var subview = new TrelloClone.Views.CardsIndexItem({ model: list})
		this.addSubview(this.selector, subview);
	},

	removeCard: function(list) {
		var subview = new TrelloClone.Views.CardsIndexItem({ model: list})
		this.removeSubview(this.selector, subview);
	}
});