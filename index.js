const {S3} = require('aws-sdk')

module.exports = new S3({
	endpoint: process.env.S3_ENDPOINT,
	accessKeyId: process.env.S3_KEY,
	secretAccessKey:process.env.S3_SECRET
})
