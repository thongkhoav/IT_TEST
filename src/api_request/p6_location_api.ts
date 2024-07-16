import axios from "axios";
// Format response data
interface LocationData {
  city: string;
  regionName: string;
  country: string;
  lat: number;
  lon: number;
  timezone: string;
}

export const getLocationApi = async () => {
  try {
    console.log("Fetching location data...");
    // Get location data from ip-api.com
    const response = await axios.get<LocationData>("http://ip-api.com/json");
    const { city, regionName, country, lat, lon } = response.data;
    // Display location data
    console.log(`You are in region ${regionName}(${city}), ${country}`);
    console.log("Timezone:", response.data.timezone);
    console.log(`Location: ${lat}, ${lon}`);
  } catch (error) {
    console.error(error);
  }
};
getLocationApi();
