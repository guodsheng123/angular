import {Injectable, NgZone} from '@angular/core';
import {EventEmitter, ObservableWrapper} from '@angular/facade';

/**
 * A mock implementation of {@link NgZone}.
 */
@Injectable()
export class MockNgZone extends NgZone {
  /** @internal */
  private _mockOnStable: EventEmitter<any> = new EventEmitter(false);

  constructor() { super({enableLongStackTrace: false}); }

  get onStable() { return this._mockOnStable; }

  run(fn: Function): any { return fn(); }

  runOutsideAngular(fn: Function): any { return fn(); }

  simulateZoneExit(): void { ObservableWrapper.callNext(this.onStable, null); }
}
