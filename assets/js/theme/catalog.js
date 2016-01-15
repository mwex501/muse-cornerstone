import PageManager from '../page-manager';
import $ from 'jquery';
import {buildQueryString} from './common/faceted-search';
import Url from 'url';

export default class CatalogPage extends PageManager {
    constructor() {
        super();
    }

    onSortBySubmit(event) {
        const url = Url.parse(location.href, true);
        const queryParams = $(event.currentTarget).serialize().split('=');

        url.query[queryParams[0]] = queryParams[1];
        delete url.query.page;

        event.preventDefault();
        window.location = Url.format({ pathname: url.pathname, search: buildQueryString(url.query) });
    }
}
