import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authHomeGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (localStorage.getItem("token") == null) {
    router.navigate(["/login"]);
    return false;
  }
  return true;
};
