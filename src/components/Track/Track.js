import React from 'react';

const Track = ({ track }) => (
  <div className="track">
    <img
      alt={`${track.album.name} Album Art`}
      className="track__image"
      src={track.album.images[0].url}
    />
    <p className="track__title">{track.name}</p>
    <p className="track__artist">
      {track.artists.map(({ name }) => name).join(' , ')}
    </p>
  </div>
);

export default Track;
