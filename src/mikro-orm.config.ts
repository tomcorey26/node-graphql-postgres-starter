import { MikroORM } from '@mikro-orm/core';
import { IN_PROD } from './constants';
import { Post } from './entities/Post';
import path from 'path'; // function built into node

// Paramaters is a special thing in typescript that lets
// you get types of the parameters of a function
// it returns an array, but we only want the first val in this array
// because the first val is the types for first parameter
// which is the config for mikro

//__dirname gives path to current file
export default {
  migrations: {
    path: path.join(__dirname, './migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.js$/, // regex pattern for the migration files
  },
  entities: [Post],
  dbName: 'lireddit',
  type: 'postgresql',
  debug: !IN_PROD,
  user: 'tomcorey',
} as Parameters<typeof MikroORM.init>[0];
