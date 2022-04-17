import { Pet } from 'src/pets/pet.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Species {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Pet, (pet) => pet.species, { onDelete: 'SET NULL' })
  pets: Pet[]
}
