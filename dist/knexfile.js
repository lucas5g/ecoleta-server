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
        host: '127.0.0.1',
        user: 'userdb',
        password: 'userdb_server',
        database: 'ecoleta'
    },
    migrations: {
        directory: path_1.default.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path_1.default.resolve(__dirname, 'src', 'database', 'seeds')
    }
};
