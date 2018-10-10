module.exports = {
	port : process.env.PORT || 7000,
	db : {
		database: process.env.DB_NAME || 'justifytest',
		user: process.env.DB_USER || 'justifytest',
		password: process.env.DB_PASS || 'justifytest',
		options: {
			dialect: process.env.DIALECT || 'sqlite',
			host: process.env.HOST || 'justifytest',
			storage: './justifytest.sqlite'
		}
	},
	authentication:
	{
		jwtSecret: process.env.JWT_SECRET || 'secret'
	}
}