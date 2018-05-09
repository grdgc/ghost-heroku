module.exports = {
  mysqlDatabaseUrl:
    process.env.MYSQL_DATABASE_URL ||
    process.env.JAWSDB_URL ||
    process.env.CLEARDB_DATABASE_URL ||
    process.env.BUCKETEER_AWS_ACCESS_KEY_ID ||
    process.env.MAILGUN_API_KEY,
}
