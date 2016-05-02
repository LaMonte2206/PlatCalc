import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        opt1: '',
        opt2: '',
        answer: '',
        alert: '',
    };
    getNumber() {
        if (this.context.opt1 === '' || this.context.opt2 === '') {
            return true;
        } else {
            this.context.alert = '';
            return false;
        }
    }
    clearNumber() {
        this.context.opt1 = '';
        this.context.opt2 = '';
    }
    
    Add() {
        if (this.getNumber()) {
            this.context.alert = 'Please enter both fields';
            return;
        };
        let context = this.context,
        opt1 = context.opt1,
        opt2 = context.opt2;
        this.context.answer = 'Adding ' + opt1 + ' and ' + opt2 + ' gives you... ' + (parseInt(opt1) + parseInt(opt2));
        this.clearNumber();   
    }
    
    Subtract() {
        if (this.getNumber()) {
            this.context.alert = 'Please enter both fields';
            return;
        };
        let context = this.context,
        opt1 = context.opt1,
        opt2 = context.opt2;
        this.context.answer = 'Subtracting ' + opt1 + ' and ' + opt2 + ' gives you...' + (parseInt(opt1) - parseInt(opt2));
        this.clearNumber();
    }
    
    Multiply() {
        if ( this.getNumber()) {
            this.context.alert = 'Please enter both fields';
            return;
        };
        let context = this.context,
        opt1 = context.opt1,
        opt2 = context.opt2;
        this.context.answer = 'Multiplying ' + opt1 + ' and ' + opt2 + ' gives you...' + (parseInt(opt1) * parseInt(opt2));
        this.clearNumber();
    }
    
    Divide() {
        if (this.getNumber()) {
            this.context.alert = 'Please enter both fields';
            return;
        };
        let context = this.context,
        opt1 = context.opt1,
        opt2 = context.opt2;
        this.context.answer = 'Dividing ' + opt1 + ' and ' + opt2 + ' gives you...' + (parseInt(opt1) / parseInt(opt2));
    }
}

register.viewControl('home-vc', HomeViewControl);
