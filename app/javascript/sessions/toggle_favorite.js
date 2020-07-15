var sessionId = '<%= @session.id%>'

function toggleLikeButton(sessionId, innerHTML) {
  let likeButton = document.querySelector(`.like-icon[data-id='${sessionId}']`)
  likeButton.classList.toggle('red');
   if (likeButton.classList.contains('red')) {
    const favoriteList = document.querySelector('.favorites');
    favoriteList.insertAdjacentHTML('beforeend', favoritedSession)
  }
  else {
    document.querySelector(`.favorite[data-id='${sessionId}']`).remove()
  }
}

toggleLikeButton(sessionId, '<%= j render "session", session: @session %>');
