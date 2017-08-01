class CanvasChannel < ApplicationCable::Channel
  def subscribed
    stream_from "canvas_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
