import React from 'react';

const Artist = ({ artist }) => (
  <div className="artist">
    <img
      alt={`${artist.name}`}
      className="artist__image"
      src={artist.images[0].url}
    />
    <p className="artist__name">{artist.name}</p>
  </div>
);

export default Artist;
