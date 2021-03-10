import { Entity , Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import User from './User';

@Entity()

export class Exercise {
    @PrimaryGeneratedColumn()
    public id:number;

    @Column()
    public description:string;

    @Column()
    public duration: number;

    @ManyToOne(() => User, (user) => user.exercise)
    public user: User;
}

export default Exercise;