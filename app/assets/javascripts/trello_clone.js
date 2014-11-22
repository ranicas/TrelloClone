window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		TrelloClone.Boards = new TrelloClone.Collections.Boards();
		new TrelloClone.Routers.AppRouter({
			collection: TrelloClone.Boards,
			$mainEl: $("div#main")
		});
		Backbone.history.start();
  }
};
