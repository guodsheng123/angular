import {Type, isBlank, isPresent, assertionsEnabled, CONST_EXPR} from '@angular/facade';
import {provide, Provider, Injector, OpaqueToken} from './di';
import {Console} from './console';
import {Reflector, reflector} from './reflection/reflection';
import {ReflectorReader} from './reflection/reflector_reader';
import {TestabilityRegistry} from './testability/testability';
import {PLATFORM_CORE_PROVIDERS} from './application_ref';

function _reflector(): Reflector {
  return reflector;
}

/**
 * A default set of providers which should be included in any Angular platform.
 */
export const PLATFORM_COMMON_PROVIDERS: Array<Type | Provider | any[]> = CONST_EXPR([
  PLATFORM_CORE_PROVIDERS,
  new Provider(Reflector, {useFactory: _reflector, deps: []}),
  new Provider(ReflectorReader, {useExisting: Reflector}),
  TestabilityRegistry,
  Console
]);
