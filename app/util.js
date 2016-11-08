
/*
  Gets a frozen JS object representing the various supported bikes

  pp: pretty print
  isp: image suffix print

  - example Usage:
    var BikeEnum = getBikeTypeEnum();
    if (current_bike_type === BikeEnum.Mountain)
      etc

  - usage for pretty print (usage meant to be seen by user):

    var mountain_pretty_print = BikeEnum.MOUNTAIN.pp;

  - usage for suffix print (usage meant to key into various images/paths that follow a
  consistent pattern ex. "icon-city-bike", "icon-mtn-bike" are CSS classes for
  images following a consistent pattern, so only the bike suffix needs to be
  modified to allow dynamically adding/removing bike types)

    var mountain_suffix_print = BikeEnum.MOUNTAIN.isp;
*/
export function getBikeTypeEnum() {
  return Object.freeze ({
    MOUNTAIN: { pp: "MOUNTAIN BIKE", isp: "mtn" },
    TRAIL: { pp: "TRAIL BIKE", isp: "trail" },
    WINTER: { pp: "WINTER BIKE", isp: "winter" },
    CITY: { pp: "CITY BIKE", isp: "city" }
  });
}
