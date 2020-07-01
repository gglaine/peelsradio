class SessionsController < ApplicationController

  def index
    @sessions = Session.all
    render component: 'Sessions', props: { sessions: @sessions }
  end

  def show
    react_rails_prerenderer
    @session = Session.find(params[:id])
    @related_sessions = @session.tag_list
    render component: 'Session', props: { session: @session, related: @related_sessions }, prerender: true
  end

  def timelineup
    @sessions = Session.all.order(year: :asc)
    render component: 'Timeline', props: { sessions: @sessions, yearsup: true }
  end

  def sixties
    @sessions = Session.where(year: ["1967", "1968", "1969"])
    render component: 'Sixties', props: { sessions: @sessions }
  end

  def seventies
    @sessions = Session.where(year: ["1970", "1971", "1972", "1973", "1974"])
    render component: 'Seventies', props: { sessions: @sessions }
  end

  def lateseventies
    @sessions = Session.where(year: ["1975", "1976", "1977", "1978", "1979"])
    render component: 'Seventies', props: { sessions: @sessions }
  end

  def eighties
    @sessions = Session.where(year: ["1980", "1981", "1982", "1983", "1984"])
    render component: 'Eighties', props: { sessions: @sessions }
  end

  def lateeighties
    @sessions = Session.where(year: ["1985", "1986", "1987", "1988", "1989"])
    render component: 'Eighties', props: { sessions: @sessions }
  end

  def nineties
    @sessions = Session.where(year: ["1990", "1991", "1992", "1993", "1994"])
    render component: 'Nineties', props: { sessions: @sessions }
  end

  def latenineties
    @sessions = Session.where(year: ["1995", "1996", "1997", "1998", "1999"])
    render component: 'Nineties', props: { sessions: @sessions }
  end

  def oos
    @sessions = Session.where(year: ["2000", "2001", "2002", "2003", "2004"])
    render component: 'OOs', props: { sessions: @sessions }
  end

  def explore
    render component: 'Explore'
  end


end
