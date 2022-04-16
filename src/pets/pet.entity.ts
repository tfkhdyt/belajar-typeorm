import { User } from 'src/users/user.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(() => User, (user) => user.pets, { onDelete: 'SET NULL' })
  user: User
}
