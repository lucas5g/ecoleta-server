"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var connection = knex_1.default({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'userdb',
        password: 'userdb_server',
        database: 'ecoleta'
    }
});
exports.default = connection;
