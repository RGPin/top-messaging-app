import { UserModel } from "./user/index.js";

const user = await UserModel.findByEmail("test@email.com");

const name = user?.name;
