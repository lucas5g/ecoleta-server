"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var connection = knex_1.default({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST || '127.0.0.1',
        user: process.env.DB_USER || 'userdb',
        password: process.env.DB_PASSWORD || 'userdb_server',
        database: process.env.DB_DATABASE || 'ecoleta'
    }
});
exports.default = connection;
