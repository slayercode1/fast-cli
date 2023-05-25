import { BaseEntity } from '@fast/utils';
import { Column, Entity } from 'typeorm';

@Entity('example')
export class Example extends BaseEntity {
  @Column('varchar', { length: 255, nullable: true })
  name: string;
}
