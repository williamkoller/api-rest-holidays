import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class State {
  @ObjectIdColumn()
  _id: string;

  @Column({
    unique: true,
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  description: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
