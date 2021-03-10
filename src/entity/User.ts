import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import Exercise from './Exercise';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number;


    @Column()
    public name:string;

    @OneToMany( () => Exercise, (exercise) => exercise.user, {eager:true, cascade:true}
    ) public exercise: Exercise[];
}

export default User;