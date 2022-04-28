import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreatedStatus='Server was not created';
  serverName='';
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreatedStatus='Server was created name is '+this.serverName;
  }
  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
