class Log {
    // Constructor than receive the database connection
    constructor(connection) {
        this.connection = connection;
    }

    // Create new register in database
    create(activity, callback) {
        const sql = `INSERT INTO Log (activity) VALUES ("${activity}")`;
        this.connection.query(sql, (error, results) => {
            if (error) return callback(error);
            callback(null, results);
        });
    }
}

export default Log;
