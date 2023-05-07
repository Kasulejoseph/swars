
import api from "./api";

api.listen().then(({ url }) => {
  console.log(`Server running on ${url}`);
});

