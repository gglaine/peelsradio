class SessionsController < ApplicationController
  def index
    @sessions = Session.all
    render component: 'Sessions', props: { sessions: @sessions }
  end

  def show
    react_rails_prerenderer
    @session = Session.find(params[:id])
    render component: 'Session', props: { session: @session }, prerender: true
  end

  def timelineup
    @sessions = Session.all.order(year: :asc)
    render component: 'Timeline', props: { sessions: @sessions, yearsup: true }
  end
end
