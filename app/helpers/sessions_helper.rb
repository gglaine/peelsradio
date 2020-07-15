module SessionsHelper
  def rock_sessions
    @sessions = Session.tagged_with("Rock")
  end
end
