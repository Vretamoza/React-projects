import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({ children, formatUserName, userName }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" 
            src={`https://unavatar.io/${userName}`} 
            alt="Avatar de Valery" />
        <div className="tw-followCard-info">
          {children}
          <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button
          className={isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'}
          onClick={handleClick}>
          <span className='tw-followCard-text'>{isFollowing ? 'Siguiendo' : 'Seguir'}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}