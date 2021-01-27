import { Injectable } from '@angular/core';
import { MatomoTag } from './models/matomo-tag.model';

@Injectable({
  providedIn: 'root'
})
export class MatomoTagManagerService {

  /**
   * Send a new tag to MTM Container
   * @param tag The tag
   */
  sendTag(tag: MatomoTag): void {
    const dataLayer = this.getDataLayer();
    dataLayer.push(tag);
  }

  /**
   * Return the datalayer (by default in _mtm variable)
   */
  private getDataLayer(): any {
    window['_mtm'] = window['_mtm'] || [];
    return window['_mtm'];
  }

}
