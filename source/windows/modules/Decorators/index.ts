/**
 * Created by katsuba.igor on 21.03.2016.
 */
module Decorators {
    
    import BaseClass = Components.BaseClass;

    type IT = typeof BaseClass;

    export function Properties(props = {}):Function {
        return function (target:IT):IT {

            class IntermediateClass extends target {
                private properties;

                constructor(...args:any[]) {
                    super(...args);
                    this.properties = this.properties || {};

                    props = api.mapObject(props, function (prop, value) {
                        return api.extend({}, {reflectToAttribute: true}, value);
                    });

                    api.extend(this.properties, props);
                }
            }
            
            return IntermediateClass;
        }
    }

    export function Methods(methods:Object = {}):Function {
        return function (target:IT):IT {

            class IntermediateClass extends target {
                constructor(...args:any[]) {
                    super(...args);
                    api.extend(this, methods);
                }
            }
            
            return IntermediateClass;
        }
    }

    export function Static(props):Function {
        return function (target:IT):IT {

            class IntermediateClass extends target {
                constructor(...args:any[]) {
                    super(...args);
                }
            }

            api.extend(IntermediateClass, props);
            return IntermediateClass;
        }
    }

    export function is(component):Function {
        return function (target:IT):IT {
            
            class IntermediateClass extends target {
                constructor(...args:any[]) {
                    super(...args);
                    api.extend(IntermediateClass, {is: component});
                }
            }

            return IntermediateClass;
        }
    }
}