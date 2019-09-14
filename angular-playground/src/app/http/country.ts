import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Country {
    constructor(
        public name?: string,
        public alpha2Code?: string,
        public alpha3Code?: string,
        public capital?: string,
        public region?: string,
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class CountryAdapter implements Adapter<Country> {

    adapt(item: any) {
        return new Country(
            item.name,
            item.alpha2Code,
            item.alpha3Code,
            item.capital,
            item.region,
        );
    }

}

@Injectable({
    providedIn: 'root'
})
export class CountryNameAdapter implements Adapter<string> {

    adapt(item: any) {
        return item.name;
    }

}
