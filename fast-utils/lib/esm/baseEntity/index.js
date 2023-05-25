import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
export function DecorateBaseEntity(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            PrimaryGeneratedColumn('uuid')(this, 'id');
            Exclude()(this, 'created_at');
            CreateDateColumn({ insert: false, update: false })(this, 'created_at');
            Exclude()(this, 'updated_at');
            UpdateDateColumn({ insert: false, update: false })(this, 'updated_at');
        }
    };
}
