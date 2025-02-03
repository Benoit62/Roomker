module.exports = {
    url: `mongodb://${process.env.MONGO_DB_HOST}:${process.env.MONGO_DB_PORT}/`,
    name: process.env.MONGO_DB_NAME,
    database_users: 'Users',
    database_rooms: 'Rooms',
    database_stages: 'Stages',
    database_bookings: 'Bookings'
}