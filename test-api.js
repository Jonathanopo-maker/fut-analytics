import axios from "axios";

const API_KEY = "54dd15d288e1a14712344edbeb360bb8";

async function test() {
  try {
    const res = await axios.get(
      "https://v3.football.api-sports.io/status",
      {
        headers: {
          "x-apisports-key": API_KEY,
        },
      }
    );

    console.log("FUNCIONOU ✔️");
    console.log(res.data);
  } catch (err) {
    console.log("ERRO ❌");
    console.log(err.response?.data || err.message);
  }
}

test();
