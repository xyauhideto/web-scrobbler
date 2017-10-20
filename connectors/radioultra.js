'use strict';

/*
 * This connector currently covers Radio ULTRA, Наше Радио, RockFM,
 * Radio JAZZ and Best FM which have the same web player.
 */
$('audio').bind('playing pause timeupdate', Connector.onStateChanged);

Connector.playerSelector = '#jp_container_1';

Connector.artistSelector = '.track-info .artist';

Connector.trackSelector = '.track-info .song';

Connector.trackArtSelector = '.pic:not(.none)';

Connector.isPlaying = () => !$('audio')[0].paused;
