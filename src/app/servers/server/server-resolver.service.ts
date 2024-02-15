import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ServersService } from '../servers.service';
import { inject } from '@angular/core';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver {
  constructor(private serversService: ServersService) {}
  resolve = (
    route: ActivatedRouteSnapshot
  ): Observable<Server> | Promise<Server> | Server => {
    return this.serversService.getServer(+route.params['id']);
  };
}
