import path from 'path'

import knexConfig from './src/configs/knex'

export default {
  ...knexConfig,
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  }
}
