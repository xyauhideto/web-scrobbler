'use strict';

module.exports = function(driver, connectorSpec) {
	connectorSpec.shouldLoadWebsite(driver, {
		url: 'https://tunein.com/radio/Classic-Rock-Hits-s249994/'
	});

    // Embed player, size options are large, medium, and small
    // also aplied for .../embed/player/s${stationNumber}
	connectorSpec.shouldContainPlayerElement(driver, {
		url: 'https://tunein.com/embed/station/137689/?size=large&autoplay=true'
	});
};
