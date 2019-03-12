import { TestBed } from '@angular/core/testing';

import { AuthServiceService } from './auth-service.service';

import { ToastrModule } from 'ng6-toastr-notifications';
describe('AuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports:[ToastrModule]}));

  it('should be created', () => {
    const service: AuthServiceService = TestBed.get(AuthServiceService);
    expect(service).toBeTruthy();
  });
});
