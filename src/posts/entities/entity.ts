import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() 
export class Posts {
  @PrimaryGeneratedColumn('uuid') 
  id: string;

  @Column()
  userId: number; 

  @Column()
  title: string; 

  @Column('text')
  body: string; 
}
