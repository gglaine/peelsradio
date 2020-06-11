class SessionsController < ApplicationController
  def index
    @sessions = Session.all
    render component: 'Sessions', props: { sessions: @sessions }
  end

  def show
    @session = Session.find(params[:id])
    render component: 'Session', props: { session: @session }
  end
end
