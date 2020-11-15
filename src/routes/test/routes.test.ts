import routes, { getRoute } from '../routes';

describe('routes#getRoute', () => {
    it('should return a simple route', () => {
        expect(getRoute('logIn', undefined, routes)).toEqual('/');
    });

    it('should return a nested route', () => {
        expect(getRoute('summary', undefined, routes)).toEqual('/summary');
    });

    it('should return a nested route', () => {
        expect(getRoute('plantsAndElectrical', undefined, routes)).toEqual(
            '/plants-and-electrical'
        );
    });

    it('should return a nested route', () => {
        expect(getRoute('meteo', undefined, routes)).toEqual('/meteo');
    });

    it('should return a nested route', () => {
        expect(getRoute('calculations', undefined, routes)).toEqual('/calculations');
    });

    it('should return a nested route', () => {
        expect(getRoute('calculated', undefined, routes)).toEqual('/calculated');
    });

    it('should return undefined if a route cannot be found', () => {
        expect(getRoute('i.do.not.exist')).toBeUndefined();
    });
});
