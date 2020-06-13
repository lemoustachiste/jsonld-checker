import { check, getAllJsonFromString, getAllJsonLdFromString } from '..';
import {
  docWithExhaustiveContext,
  docWithNotExhaustiveContext,
  text,
} from './__fixtures__';

describe('hasExhaustiveContext', () => {
  it('should return true if all properties are in the context', async () => {
    const result = await check(docWithExhaustiveContext);
    expect(result.ok).toBeTruthy();
  });

  it('should return false if some properties are missing from the context', async () => {
    const result = await check(docWithNotExhaustiveContext);
    expect(result.ok).toBeFalsy();
    expect(result.error!.type).toBe('MISSING_PROPERTIES_IN_CONTEXT');
    expect(result.error!.details).toEqual('["property3"]');
  });

  it('should return false if argument is a non parseable string', async () => {
    const result = await check('{');
    expect(result.ok).toBeFalsy();
    expect(result.error!.type).toBe('SyntaxError');
    expect(result.error!.details).toBe('Unexpected end of JSON input');
  });

  // TODO add test about invalid context

  // TODO add test: {"bonjour": "lol"}
  // TODO add test positive test for string arg
});

describe('getAllJsonLdFromString', () => {
  it('should return all JSON objects from the page', () => {
    const results = getAllJsonFromString(text);
    expect(results).toHaveLength(51);
  });

  it('should return all JSON-LD objects from the page', () => {
    const results = getAllJsonLdFromString(text);
    expect(results).toHaveLength(16);
  });
});

describe('integration', () => {
  it('should return all non exhaustive json-ld contexts', async () => {
    const jsonldObjects = getAllJsonLdFromString(text);
    const promises = jsonldObjects.map(check);
    const results = await Promise.all(promises);
    expect(results).toHaveLength(16);
  });
});
