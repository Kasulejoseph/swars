
import api from "./api";

api.listen({port: process.env.PORT || 4000 }).then(({ url}) => {
  console.log(`Server running on ${url}`);
});
