import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// The catalogue JSON is bundled into the app (instead of fetched over HTTP) so that
// every page can be prerendered to static HTML with its full content for search engines.
// The same files are still published under assets/data/.
import solutionsData from '../../../public/assets/data/evochem-data.json';
import industriesData from '../../../public/assets/data/industries.json';
import solutionTypesData from '../../../public/assets/data/solutionTypes.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getSolutions(): Observable<any[]> {
    return of(solutionsData as any[]);
  }

  getIndustries(): Observable<any[]> {
    return of(industriesData as any[]);
  }

  getSolutionTypes(): Observable<any[]> {
    return of(solutionTypesData as any[]);
  }

}
