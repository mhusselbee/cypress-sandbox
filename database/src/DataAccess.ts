import { Db, MongoClient } from "mongodb";
import { MongoMemoryServer } from "mongodb-memory-server";

// Extend the default timeout so MongoDB binaries can download
// jest.setTimeout(60000);

// List your collection names here
const COLLECTIONS: [] = [];

class DBManager {
  public db: Db | null;
  public server: MongoMemoryServer;
  public connection: MongoClient | null;

  constructor() {
    this.db = null;
    this.server = new MongoMemoryServer();
    this.connection = null;
  }

  async start() {
    const url = await this.server.getUri();
    console.log(`In-memory server started at ${url}`);

    this.connection = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`client connected to server`);

    this.db = this.connection.db(await this.server.getDbName());
  }

  stop() {
    console.log(`client disconnected, stopping server`);
    this.connection?.close();
    return this.server.stop();
  }

  cleanup() {
    return Promise.all(
      COLLECTIONS.map((c) => this.db?.collection(c).deleteMany({}))
    );
  }
}

const dbManager = new DBManager();
dbManager.start().then(() => dbManager.stop());
