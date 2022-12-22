import ErrorHandler from "../models/ErrorHandler";
import {Skabeloner} from "../entity/Skabeloner";

import AppDataSource from "../data-source";
class SkabelonRouter {
    defaultMethod() {
        throw new ErrorHandler(501, 'Not implemented method');
    }
    getAllSkabeloner(){
        let promise = AppDataSource.getRepository(Skabeloner).find();
        return {
            promise
        }
    }
}

export = new SkabelonRouter();