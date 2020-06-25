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

  def sixties
    @sessions = Session.where(year: ["1967", "1968", "1969"])
    render component: 'Sixties', props: { sessions: @sessions }
  end
end
