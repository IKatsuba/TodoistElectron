/**
 * Created by katsuba.igor on 18.01.2016.
 */
module Components {
    import is = Decorators.is;

    @is('app-window-content')
    class AppWindowContentClass extends BaseClass {
        constructor(...args:any[]) {
            super(args);
        }
    }
    export var AppWindowContent = Polymer(new AppWindowContentClass());
}

