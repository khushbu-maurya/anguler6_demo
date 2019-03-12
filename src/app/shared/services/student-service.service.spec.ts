import { TestBed } from '@angular/core/testing';

import { StudentServiceService } from './student-service.service';
import {HttpClientModule} from '@angular/common/http';

describe('StudentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports:[HttpClientModule]}));

  it('should be created', () => {
    const service: StudentServiceService = TestBed.get(StudentServiceService);
    expect(service).toBeTruthy();
  });
});
