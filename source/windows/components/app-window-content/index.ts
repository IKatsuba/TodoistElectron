/**
 * Created by katsuba.igor on 18.01.2016.
 */
module Components {
    import is = Decorators.is;

    @is('app-window-content')
    export class AppWindowContentClass extends BaseClass {
        constructor(...args:any[]) {
            super(args);
        }
    }
    Polymer(new AppWindowContentClass());
}

