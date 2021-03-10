import {Request, Response } from "express";
import {controller} from '../controller/controller';

class Routes {

    private controller : controller;
    
    constructor() {

        this.controller = new controller();
    
    }

    public routes(app): void {
        app.route('/')
        .get((request:Request, response: Response) =>{
            response.status(200)
            .send({
                message: "Get request successful"
            })
        })


        app.route('/exercise')
        .get(this.controller.getAllUser)
        .post(this.controller.addUser);

        app.route('/exercise/:UserId')
        .get(this.controller.getUserById)
        .put(this.controller.updateUser)
        .delete(this.controller.deleteUser)
    }

    

}

export {Routes};
