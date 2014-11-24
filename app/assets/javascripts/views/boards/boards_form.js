TrelloClone.Views.BoardsForm = Backbone.View.extend({
	tagName: "form",
	className: "form-group",
	template: JST['boards/form'],
	
	events: {
		'click button': "submitForm"
	}, 
	
	render: function() {
		var formContent = this.template({ board: this.model });
		this.$el.html(formContent);
		return this;
	},
	
	submitForm: function(event) {
		event.preventDefault();
		var attr = this.$el.serializeJSON();
		this.model.set(attr)
		
		if (this.model.isNew()) {
			this.model.save(attr, {
				success: (function() {
					this.collection.add(this.model);
					Backbone.history.navigate("", { trigger: true });
				}).bind(this)
			})
		} else {
			this.model.save(attr, {
				success: function() {
					Backbone.history.navigate("", { trigger: true });
				}
			})
		}
	}
});
