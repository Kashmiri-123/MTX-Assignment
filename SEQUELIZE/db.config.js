module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "MTX$2021",
    DB: "Training",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};