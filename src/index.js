import t from 'title-case';
import { citiesByState, statesWithAbbreviations } from './usData';

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
  }
}

export default UnitedStates;
