import { SearchFilterPipe } from './search-filter.pipe';

describe('SearchFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('WHEN id call THEN return element found', () => {
    const pipe = new SearchFilterPipe();
    let products = [
      {
        id: "1",
        logo: "PR",
        name: "prueba 1",
        description: "descripcion 1",
        releaseDate: "02/01/2023",
        reviewDate: "30/12/2023"
      },
      {
        id: "2",
        logo: "NO",
        name: "nombre 2",
        description: "descr",
        releaseDate: "03/10/2023",
        reviewDate: "29/12/2023"
      },
      {
        id: "3",
        logo: "producto 3",
        name: "producto 3",
        description: "descr",
        releaseDate: "15/11/2015",
        reviewDate: "30/12/2023"
      }
    ]

    let result = pipe.transform(products, "nombre")

    expect(result[0].id).toEqual(products[1].id);
    expect(result[0].name).toEqual(products[1].name);
    expect(result[0].description).toEqual(products[1].description);

  });

  it('WHEN products is null THEN return null', () => {
    const pipe = new SearchFilterPipe();

    let result = pipe.transform(null, "nombre")

    expect(result).toBeNull();

  });
});
