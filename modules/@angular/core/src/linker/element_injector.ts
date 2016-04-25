import {CONST_EXPR} from '@angular/facade';
import {Injector, THROW_IF_NOT_FOUND} from '../di/injector';
import {AppView} from './view';

const _UNDEFINED = CONST_EXPR(new Object());

export class ElementInjector extends Injector {
  constructor(private _view: AppView<any>, private _nodeIndex: number) { super(); }

  get(token: any, notFoundValue: any = THROW_IF_NOT_FOUND): any {
    var result = _UNDEFINED;
    if (result === _UNDEFINED) {
      result = this._view.injectorGet(token, this._nodeIndex, _UNDEFINED);
    }
    if (result === _UNDEFINED) {
      result = this._view.parentInjector.get(token, notFoundValue);
    }
    return result;
  }
}
