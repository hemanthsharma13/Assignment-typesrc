import { Request , Response } from "express";
import { connection } from "../connection/connection";
import { User } from '../entity/User';
import { Exercise } from "../entity/Exercise";


class controller {
    constructor() {}

    public getAllUser(req: Request, res : Response ){ 
        connection 
        .then(async connection => {
            const user : User[] = await connection.manager.find(User);
            res.json(user)
        } )
    }
    

   public addUser(req: Request , res: Response) {
        connection 
        .then(async connection =>{
            let requestUser = req.body;
            let requestExercise = requestUser.exercise ;

            let user = new User;
            user.name = requestUser.name;
            user.exercise  = [];


            requestUser.array.forEach(requestExercise => {
                let exercise : Exercise = new Exercise();
                exercise.description = requestExercise;
                exercise.duration = requestExercise;
                user.exercise.push(exercise)

                
            });

            await connection.manager.save(user);
                res.json({message: "Successfully Saved."})

        })
        .catch(error => {
            console.error("Error ", error);
            res.json(error);
        });

     
   }

   public updateUser(req: Request, res: Response) {
    connection
        .then(async connection => {
            let user  = await connection.manager.findOne(User, req.params.UserId);
            let requestUser = req.body;
            let requestExercise = requestUser.name;
            user.name = requestUser.name;
            user.exercise = [];
            // delete previous power of our super-hero
            user.exercise.forEach(async exercise => {
                await connection.manager.remove(Exercise,
                     {
                         id : exercise.id
                        });
            });
            // add new power to our super-hero
            requestExercise.forEach(requestExercise => {
                let exercise: Exercise = new Exercise();
                exercise.description = requestExercise;
                exercise.duration = requestExercise
                user.exercise.push(exercise);
            });
            await connection.manager.save(user);
            res.json({message: "Successfully Updated."})
        })
        .catch(error => {
            console.error("Error ", error);
            res.json(error);
        });
}
 
public getUserById(req: Request, res: Response) {
    connection
        .then(async connection => {
            let user  = await connection.manager.findOne(User, req.params.UserId);
            res.json(user)
        })
        .catch(error => {
            console.error("Error ", error);
            res.json(error);
        });
}


  
 

public deleteUser(req: Request, res: Response) {
    connection
        .then(async connection => {
            let user  = await connection.manager.findOne(User, req.params.userId);
            
            user.exercise.forEach(async exercise => {
                await connection.manager.remove(Exercise, {id: exercise.id});
            });
            
            await connection.manager.remove(User, { id: req.params.userId});
            res.json({message: "Successfully Removed."})
        })
        .catch(error => {
            console.error("Error ", error);
            res.json(error);
        });
}
}

export {controller};



 