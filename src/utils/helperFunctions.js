const mapLocationObject = (obj) => {
    return {
      state_short: obj["adminCode1"],
      state_long: obj["adminName1"],
      county: obj["adminCode2"],
      countryCode: obj["countryCode"],
      distance: obj["distance"],
      latitude: obj["lat"],
      longitude: obj["lng"],
      city: obj["placeName"],
      postalCode: obj["postalCode"],
    };
}

export const mapLocationData = (locationDataArray) => {
    return locationDataArray.map((location) => mapLocationObject(location))
}