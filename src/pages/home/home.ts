import { Component } from '@angular/core';
/* import { NavController } from 'ionic-angular'; */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private _display: string = '';
  private _valueOld: number = 0;
  private _valueNow: number = 0;
  private _operation: string = '';
  private _dot: boolean = false;

  inputValue(v: number) {
    if (this._dot) {
      this._valueNow = Number(`${this._valueNow}.${v}`);
      this._dot = false;
    } else {
      this._valueNow = Number(`${this._valueNow}${v}`);
    }
    console.log(`${this._valueNow}`)
    this._display = `${this._valueOld}${this._operation}${this._valueNow}`;

  }

  btnResult() {
    switch (this._operation) {
      case '+':
        this._valueOld = this._valueOld + this._valueNow;
        this._display = `${this._valueOld}`;
        this._operation = '+';
        this._valueNow = 0;
        break;
      case '-':
        this._valueOld = this._valueOld - this._valueNow;
        this._display = `${this._valueOld}`;
        this._operation = '-';
        this._valueNow = 0;
        break;
      case '/':
        this._valueOld = this._valueOld / this._valueNow;
        this._display = `${this._valueOld}`;
        this._operation = '/';
        this._valueNow = this._valueOld;
        break;
      case 'x':
        this._valueOld = this._valueOld * this._valueNow;
        this._display = `${this._valueOld}`;
        this._operation = 'x';
        this._valueNow = this._valueOld;        
        break;
      default:
        console.log('error');
        break;
    }
  }
  cleanCalc() {
    this._display = '';
    this._valueOld = 0;
    this._valueNow = 0;
    this._operation = '';
  }
  addDot() {
    this._dot = true;
    this._display = `${this._valueNow}.`;
  }
  btnOp(op: string) {
    switch (op) {
      case '+':
        this._valueOld = this._valueOld + this._valueNow;
        this._display = `${this._valueOld}+`;
        this._operation = '+';
        this._valueNow = 0;
        break;
      case '-':
        this._valueOld = this._valueOld - this._valueNow;
        this._display = `${this._valueOld}-`;
        this._operation = '-';
        this._valueNow = 0;
        break;
      case '/':

        this._display = `${this._valueNow}/`;
        this._valueOld = this._valueNow;
        this._valueNow = 0;
        this._operation = '/';

        break;
      case 'x':
        this._display = `${this._valueNow}x`;
        this._valueOld = this._valueNow;
        this._valueNow = 0;
        this._operation = 'x';
        break;
      default:
        console.log('error');
        break;
    }
  }

}
