import { Injectable } from "@angular/core";

@Injectable()

export class Helper {

    log(value) {
        console.log("TCL: Helper -> log -> value", value);
    }
}