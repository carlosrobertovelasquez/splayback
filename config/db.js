import mongoose from 'mongoose';

require('dotenv').config({path:'variables.env'})

const conectarDB=async()=>{
	try {
		await mongoose.connect(process.env.DB_MONGO,{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify:false,
			useCreateIndex:true
		});
        console.log('BD Conectada Cluster Atlas');
	} catch (error) {
		console.log('Hubo un error');
		console.log(error);
		process.exit(1);//detener la app
	}
}

module.exports=conectarDB;