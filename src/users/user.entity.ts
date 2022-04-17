import { Pet } from 'src/pets/pet.entity'
import {
  Column,
  Entity,
  // JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column({ nullable: true })
  lastName?: string

  @OneToMany(() => Pet, (pet) => pet.user, { eager: true })
  pets: Pet[]
}
