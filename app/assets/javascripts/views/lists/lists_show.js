TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],
	className: 'btn btn-info col-md-2 list',
	
	initialize: function() {
		this.listenTo(this.model, "sync", this.render);
		this.selector = '.cards';
		this.subviews(this.selector);
		this.listenTo(this.collection, "add", this.addCard);
		this.listenTo(this.collection, "remove", this.removeCard)
		this.collection.each((function(card) {
			this.addCard(card)
		}).bind(this));
	},
	
	render: function() {
		var showContent = this.template({ list: this.model });
		this.$el.html(showContent);
		this.attachSubviews();
		return this;
	},

	addCard: function(card) {
		var subview = new TrelloClone.Views.CardItem({ model: card })
		this.addSubview(this.selector, subview);
	},

	removeCard: function(card) {
		var subview = new TrelloClone.Views.CardItem({ model: card })
		this.removeSubview(this.selector, subview);
	}
});