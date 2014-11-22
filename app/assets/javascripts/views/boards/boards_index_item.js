TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
  template: JST['boards/indexItem'],
	
	render: function() {
		var content = this.template({ board: this.model });
		this.$el.html(content);
		return this;
	}

});
