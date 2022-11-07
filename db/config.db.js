import mongoose from "mongoose";

const dbConnection = async () => {
	try {
		mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

		console.log("Base de datos online");
	} catch (error) {
		console.log(error);
		throw new Error("Error a la hora de iniciar la base de datos");
	}
};

export { dbConnection };