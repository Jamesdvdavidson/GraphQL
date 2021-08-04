import {Services} from './ServiceTaxonomiesForOlderPeople';
import {map} from 'lodash';

let serviceCheckBoxes = map(Services.taxonomies, "name").sort();

export default serviceCheckBoxes;
