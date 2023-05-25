import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string | undefined;

  @CreateDateColumn({ insert: false, update: false })
    created_at: string | undefined;

  @UpdateDateColumn({ insert: false, update: false })
    updated_at: string | undefined;
}
