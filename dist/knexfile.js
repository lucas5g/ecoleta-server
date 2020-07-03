"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
module.exports = {
    client: 'mysql',
    connection: {
        //filename:path.resolve(__dirname, 'src', 'database', 'database.mysql'),
        host: process.env.DB_HOST || '127.0.0.1',
        user: process.env.DB_USER || 'userdb',
        password: process.env.DB_PASSWORD || 'userdb_server',
        database: process.env.DB_DATABASE || 'ecoleta'
    },
    migrations: {
        directory: path_1.default.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path_1.default.resolve(__dirname, 'src', 'database', 'seeds')
    }
};
