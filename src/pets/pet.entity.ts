import { Species } from 'src/species/species.entity'
import { User } from 'src/users/user.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(() => Species, (species) => species.pets, {
    eager: true,
    onDelete: 'SET NULL',
  })
  species: Species

  @ManyToOne(() => User, (user) => user.pets, { onDelete: 'SET NULL' })
  user: User
}
