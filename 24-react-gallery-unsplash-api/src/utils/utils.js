import axios from "axios";

const customFetchUrl = axios.create({
  baseURL:
    "https://api.unsplash.com/search/photos?client_id=yr73Fo2q2EmQ-bT6107Sbq6FR5rqWJyuDNl7xGmiReE&query=office",
});

export default customFetchUrl;
