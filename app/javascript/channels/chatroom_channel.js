import consumer from "./consumer"

var scroll_bottom = function() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight)
  }
}

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#messages-container').append(data.modified_message)
    scroll_bottom()
  }
});
