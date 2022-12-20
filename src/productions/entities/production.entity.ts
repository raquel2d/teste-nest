import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Production {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date_prod: string;

  @Column()
  time_prod: string;

  @Column()
  id_machine: string;

  @Column()
  qty: number;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;
}
