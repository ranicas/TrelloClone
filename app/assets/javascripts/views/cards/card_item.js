TrelloClone.Views.CardItem = Backbone.View.extend({
	className: "card",
  template: JST['cards/item'],
	
	initialize: function() {
		this.listenTo(this.model, "sync", this.render);
	},
	
	render: function() {
		var showContent = this.template({ card: this.model });
		this.$el.html(showContent);
		return this;
	}

});
