"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecorateBaseEntity = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
function DecorateBaseEntity(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            (0, typeorm_1.PrimaryGeneratedColumn)('uuid')(this, 'id');
            (0, class_transformer_1.Exclude)()(this, 'created_at');
            (0, typeorm_1.CreateDateColumn)({ insert: false, update: false })(this, 'created_at');
            (0, class_transformer_1.Exclude)()(this, 'updated_at');
            (0, typeorm_1.UpdateDateColumn)({ insert: false, update: false })(this, 'updated_at');
        }
    };
}
exports.DecorateBaseEntity = DecorateBaseEntity;
