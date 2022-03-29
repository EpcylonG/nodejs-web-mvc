const app = require("./server");
const config = require("./config/config");
const connect = require("./db/connect");

// uncomment if you need to seed the database before
// const { seedProducts } = require("./db/seed");

connect().then(async function onServerInit() {
  config.logger.info(`DB connected`);

  // uncomment if you need to seed the database before
  // await seedProducts();

  app.listen(config.app.PORT, () => {
    config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
  });
});
  /*
  const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://readonly:readonly@covid-19.hip2i.mongodb.net/covid19";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const globalAndUS = client.db('covid19').collection("global_and_us");
    const cursor = globalAndUS.find({ country: "France" }).sort(["date", -1]).limit(2);
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
  */