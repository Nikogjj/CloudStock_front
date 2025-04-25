import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authHomeGuard } from './auth-home.guard';

describe('authHomeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authHomeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
