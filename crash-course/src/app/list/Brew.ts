export class Brew {
    constructor(
        public id: number,
        public name: string,
        public brewery_type: string,
        public street: string,
        public city: string,
        public state: string,
        public postal_code: string,
        public country: string,
        public longitude: string,
        public latitude: string,
        public phone: string,
        public website_url: string,
    ) { }
}
