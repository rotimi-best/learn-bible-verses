const ENV = process.env

module.exports = {
    MONGO_URI: `${ENV.DB_PROVIDER}://${ENV.DB_USER}:${encodeURIComponent(
        ENV.DB_PWORD
    )}@${ENV.DB_HOST}/${ENV.DB_NAME}`,
}
