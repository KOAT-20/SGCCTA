const RegisterRouter = require ('./registerRoutes');

module.exports = (router) => {
	router.get ('/', (req, res) => {
		res.send ('Home Page');
	});
	router.use ('/register', RegisterRouter);
	router.use ('/registerUser', RegisterRouter);

	router.get ('*', (req, res) => {
		res.status (404).send('Page Invalid');
	});
	router.post ('*', (req, res) => {
		res.status (404).send('Page Invalid');
	});
};