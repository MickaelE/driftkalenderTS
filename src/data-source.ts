import "reflect-metadata"
import { DataSource } from "typeorm"


 const AppDataSource = new DataSource({
    type: "oracle",
host: "10.255.255.98",
username: "DK2_UDV",
password: "ravesCWtQRnjtwEDEF",
port: 1521,
sid: "bkstst",
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: [],
    subscribers: [],
})
AppDataSource
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
    })

export default AppDataSource;