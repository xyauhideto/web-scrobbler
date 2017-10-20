'use strict';

setupConnector();

function setupConnector() {
    if (isEmbedPlayer()) {
        setupEmbedPlayer();
    } else {
        setupSitePlayer();
    }
    setupCommonProperties();
}

function isEmbedPlayer() {
    return $('#tuner, #mini-tuner').length > 0;
}

function setupEmbedPlayer() {
    Connector.playerSelector = 'div[id*="tuner"]';

    Connector.artistTrackSelector = `${Connector.playerSelector} .line1`;

    Connector.playButtonSelector = '.stopped, .idle, .buffering';
}

function setupSitePlayer() {
    Connector.playerSelector = '.player__playerContainer___JEJ2U';

    Connector.artistTrackSelector = '#playerTitle';

    Connector.playButtonSelector = '.stopped, #playerLoadingSpinner';
}

function setupCommonProperties() {
    $('audio').bind('playing pause timeupdate', Connector.onStateChanged);

    Connector.trackArtSelector = `${Connector.playerSelector} img`;

    Connector.isTrackArtDefault = (trackArtUrl) => !trackArtUrl.includes('album');
}
