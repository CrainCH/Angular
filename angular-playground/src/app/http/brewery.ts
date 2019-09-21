import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Brewery {
    constructor(
        public id?: number,
        public name?: string,
        public brewery_type?: string,
        public street?: string,
        public city?: string,
        public state?: string,
        public postal_code?: string,
        public country?: string,
        public longitude?: string,
        public latitude?: string,
        public phone?: string,
        public website_url?: string,
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class BreweryAdapter implements Adapter<Brewery> {

    adapt(item: any) {
        return new Brewery(
            item.id,
            item.name,
            item.brewery_type,
            item.street,
            item.city,
            item.state,
            item.postal_code,
            item.country,
            item.longitude,
            item.latitude,
            item.phone,
            item.website_url,
        );
    }

}
