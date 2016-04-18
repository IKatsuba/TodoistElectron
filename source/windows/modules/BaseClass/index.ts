/**
 * Created by katsuba.igor on 20.03.2016.
 */
module Components {

    export interface $BaseClass {
        [prop:string]:HTMLElement;
    }

    interface IBaseClass extends Base {
        $?:$BaseClass
    }


    //noinspection JSAnnotator
    export class BaseClass implements IBaseClass {
        is:string;

        constructor(...args:any[]) {

        }
    }
}