import { Component, OnInit } from '@angular/core';
import { AuthGuardService as AuthGuard } from '../../shared/services/guards/auth-guard.service';
import { AuthServiceService } from '../../shared/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthServiceService) { }

  ngOnInit() {
  }

}
