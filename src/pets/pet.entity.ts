import { Species } from 'src/species/species.entity'
import { User } from 'src/users/user.entity'
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(() => Species)
  @JoinTable()
  species: Species

  @ManyToOne(() => User, (user) => user.pets, { onDelete: 'SET NULL' })
  user: User
}
