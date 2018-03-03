import t from 'title-case';
import { citiesByState, statesWithAbbreviations } from './usData';
import invert from 'lodash/invert';

const UnitedStates =  {
  getAllData: () => {
    return Object.keys(statesWithAbbreviations).map((abb) => {
      const state_full = statesWithAbbreviations[abb];
      // Get cities based on
      const cities = citiesByState[state_full];

      return {
        state: state_full,
        abbreviation: abb,
        cities: cities.map(c => t(c)),
      };
    });
  },

  getDataByState: (selector) => {
    if (typeof selector !== 'string') {
      console.error('Error: Supply a state name or a state abbreviation');
      return undefined;
    }

    const type = (selector.length === 2) ? 'abbreviation' : 'state';
    let abbrev = '', full_state = '';

    if (type === 'abbreviation') {
      abbrev = selector
      full_state = statesWithAbbreviations[selector];
    } else {
      full_state = selector;
      abbrev = invert(statesWithAbbreviations)[full_state];
    }

    // If state is invalid, return an empty set - otherwise return the data
    if (citiesByState[full_state]) {
      return {
        state: full_state,
        abbreviation: abbrev,
        cities: citiesByState[full_state].map(c => t(c))
      }
    } else {
      return {}
    }

  },

}

export default UnitedStates;
