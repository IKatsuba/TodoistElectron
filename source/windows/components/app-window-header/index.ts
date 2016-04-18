module Components {
    import Properties = Decorators.Properties;
    import Methods = Decorators.Methods;
    import is = Decorators.is;

    import getCurrentWindow = api.getCurrentWindow;

    @is('app-window-header')
    @Properties({
        isMaximize: {
            type: Boolean,
            value: true
        }
    })
    @Methods({
        attached() {
            this.isMaximize = getCurrentWindow().isMaximized();

            getCurrentWindow().on('maximize', (evt)=> {
                (<any>this).isMaximize = true;
            });

            getCurrentWindow().on('unmaximize', (evt)=> {
                (<any>this).isMaximize = false;
            });
        },
        minimize(evt) {
            getCurrentWindow().minimize();
        },
        maximize(evt) {
            getCurrentWindow().maximize();
            this.isMaximize = true;
        },
        unmaximize(evt) {
            getCurrentWindow().unmaximize();
            this.isMaximize = false;
        },
        close(evt) {
            getCurrentWindow().close();
        },
        isMaxButtonVisible(isMax) {
            return !isMax;
        },
        isMinButtonVisible(isMax) {
            return isMax;
        },
        dblclick(evt) {
            this.isMaximize
                ? this.unmaximize(evt)
                : this.maximize(evt);
        }
    })
    class AppWindowHeaderClass extends BaseClass {
        constructor(...args:any[]) {
            super(args);
        }
    }

    export var AppWindowHeader = Polymer(new AppWindowHeaderClass());
}