TrelloClone.Collections.Boards = Backbone.Collection.extend({
  model: TrelloClone.Models.Board,
	url: "/api/boards",
	
	getOrFetch: function(id) {
		var board = this.get(id);
	
		if (board) {
			board.fetch();
		} else {
			board = new TrelloClone.Models.Board({ id: id });
			board.fetch({
				success: function() {
					TrelloClone.Boards.add(board)
				}
			})
		}
		
		return board;
	}
});