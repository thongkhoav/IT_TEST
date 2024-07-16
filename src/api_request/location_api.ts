import axios from "axios";
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
    const response = await axios.get<LocationData>("http://ip-api.com/json");
    const { city, regionName, country, lat, lon } = response.data;
    console.log(`You are in region ${regionName}(${city}), ${country}`);
    console.log("Timezone:", response.data.timezone);
    console.log(`Location: ${lat}, ${lon}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
getLocationApi();
