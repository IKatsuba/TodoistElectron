/**
 * Created by katsuba.igor on 14.04.2016.
 */
module api {
    export var path = require('path');
    export var fs = require('fs');

    export function getCurrentWindow() {
        return require('remote').getCurrentWindow();
    }

    export function extend(target:any = {}, ...args:any[]) {
        for (var arg of args) {
            forEach(arg, (key)=> {
                target[key] = arg[key];
            });
        }

        return target;
    }

    export function mapObject(obj:any, callback) {
        var copy = {};

        forEach(obj, (key, value, i)=> {
            copy[key] = callback(key, value, i);
        });
        return copy;
    }

    export function forEach(obj, callback) {
        keys(obj).forEach(function (key, i) {
            callback(key, obj[key], i);
        })
    }

    export function copy(obj) {
        return mapObject(obj, function (key, value) {
            return value;
        })
    }

    export function keys(obj) {
        return Object.keys(obj);
    }

    export function toJSON(obj) {
        try {
            return JSON.stringify(obj);
        } catch (e) {
            console.error(e);
            return '';
        }
    }

    export function fromJSON(obj) {
        try {
            return JSON.parse(obj);
        } catch (e) {
            console.error(e);
        }
    }
}