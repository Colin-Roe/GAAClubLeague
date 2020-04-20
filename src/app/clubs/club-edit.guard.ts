import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ClubEditComponent } from './club-edit.component';

@Injectable({
  providedIn: 'root'
})
export class ClubEditGuard implements CanDeactivate<ClubEditComponent>  {
  
  canDeactivate(component: ClubEditComponent): Observable<boolean> | Promise<boolean> | boolean {
    if (component.editClubForm.dirty) {
      const clubName = component.editClubForm.get('clubName').value || 'New Club';
      return confirm(`Navigate away and lose all changes to ${clubName}?`);
    }
    return true;
  }

}
