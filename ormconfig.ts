import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

export const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'tfkhdyt',
  password: '69420',
  database: 'belajar-typeorm',
  entities: ['dist/**/*.entity.js'],
  synchronize: process.env.NODE_ENV === 'development',
}
