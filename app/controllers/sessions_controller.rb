class SessionsController < ApplicationController

  before_action :authenticate_user!, only: :toggle_favorite

  # def index
  #   @sessions = Session.all
  #   # render component: 'Sessions', props: { sessions: @sessions }
  #   @favorite_sessions = current_user.favorited_by_type('Session')
  # end

  def explore
    render component: 'Explore'
  end

  def show
    react_rails_prerenderer
    @session = Session.find(params[:id])
    @related_sessions = @session.tag_list
    render component: 'Session', props: { session: @session, related: @related_sessions }, prerender: true
  end

  def mypeels
    @user = current_user
    @favorites = @user.all_favorites
    @sessions = @user.favorited_sessions
    # render component: 'Mypeels', props: { sessions: @sessions }, prerender: true
  end

  def toggle_favorite
    @session = Session.find(params[:id])
    if user_signed_in? && current_user
      current_user.favorited?(@session) ? current_user.unfavorite(@session) : current_user.favorite(@session)
    end
  end


# /////////////////////////////

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

  # ///////////////////////////






  # /////////////////////////////

  def rock
    @sessions = Session.tagged_with("rock")
    # render component: 'Genre', props: { sessions: @sessions }
  end

  def brit
    @sessions = Session.tagged_with("british")
    # render component: 'Genre', props: { sessions: @sessions}
  end

  def punk
    @sessions = Session.tagged_with("punk")
    # render component: 'Genre', props: { sessions: @sessions}
  end

  def folk
    @sessions = Session.tagged_with("folk")
    # render component: 'Genre', props: { sessions: @sessions}
  end

  def blues
    @sessions = Session.tagged_with("blues")
    # render component: 'Genre', props: { sessions: @sessions}
  end

  def reggae
    @sessions = Session.tagged_with("reggae" || "dub")
    # render component: 'Genre', props: { sessions: @sessions}
  end

  def electronic
    @sessions = Session.tagged_with("electronic")
    # render component: 'Genre', props: { sessions: @sessions}
  end

  def coldwave
    @sessions = Session.tagged_with("cold-wave")
    # render component: 'Genre', props: { sessions: @sessions}
  end

  def heavymetal
    @sessions = Session.tagged_with("hard-rock" || "heavy metal")
    # render component: 'Genre', props: { sessions: @sessions}
  end

  def gems
    @sessions = Session.tagged_with("hard-rock")
    # render component: 'Genre', props: { sessions: @sessions}
  end

  def US
    @sessions = Session.tagged_with("US")
  end




end
