import { Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryColumn, Unique, UpdateDateColumn } from 'typeorm'

@Unique(['name'])
@Entity()
export class Country {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  name: string;

  @Column()
  slug: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}