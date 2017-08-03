class ChatController < ApplicationController

  def create
    content = params[:content]
    ActionCable.server.broadcast "chat_channel",
                                content: content                     
  end
end
