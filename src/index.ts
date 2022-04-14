import { app } from "./Data/app";
import { dartRouter } from "./Routes/dartRouter";
import { runRouter } from "./Routes/RunRouter";

app.use("/run", runRouter)
app.use("/dart", dartRouter)