import {Request, Response } from "express";
import controller from '../controller/controller';

class Routes {

    private controller : controller;
    
    constructor() {

        this.controller = new controller();
    
    }

    public routes(app): void {
        app.route()
    }

    

}
