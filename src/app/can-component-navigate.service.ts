import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

export interface CanComponentDeactivate {
  confirm(): boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CanComponentNavigateService
  implements CanDeactivate<CanComponentDeactivate>
{
  canDeactivate(
    component: CanComponentDeactivate,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!component.confirm()) {
      return confirm(
        'You have unsaved changes! If you leave, your changes will be lost.'
      );
    }
  }
}
