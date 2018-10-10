const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const JustifyController = require('./controllers/JustifyController')
const rateLimit = require("express-rate-limit")

const limiter = rateLimit({
  		windowMs: 60 * 1000 * 24, // 1 hour window
  		max: 10, // start blocking after 3 requests
  		message:
    		"402 Payment Required"
	});


module.exports = (app) => {	

	app.post('/api/register', 
		AuthenticationControllerPolicy.register,
		AuthenticationController.register)

	app.post('/api/token', 
		AuthenticationController.login)

	app.post('/api/justify',
		//limiter, 
		JustifyController.justify)
}