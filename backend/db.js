const { Pool } = require("pg");

// const isProduction = process.env.NODE_ENV === "production";

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: isProduction ? { rejectUnauthorized: false } : false,
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };

const pool = new Pool({
  connectionString:
    "postgresql://postgres_l85f_user:9M4QwjAQufr8tboFjVQpKQCBBRr01lZV@dpg-d0qu6a6mcj7s73edldsg-a:5432/postgres_l85f",
  ssl: {
    rejectUnauthorized: false, // для Render нужно
  },
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
