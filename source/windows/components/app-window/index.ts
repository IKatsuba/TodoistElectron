module Components {

    import is = Decorators.is;
    import Properties = Decorators.Properties;
    @is('app-window')
    @Properties({
        title: {
            type: String,
            value: ''
        }
    })
    export class AppWindowClass extends BaseClass {
        constructor(...args:any[]) {
            super(...args);
        }
    }
    
    Polymer(new AppWindowClass());
}