 // src/providers/pusher-service/pusher-service.ts

 import { HttpClient } from '@angular/common/http';
 import { Injectable } from '@angular/core';

 declare const Pusher: any;
 @Injectable()
 export class PusherServiceProvider {
   public _pusher : any;
   constructor(public http: HttpClient) {
     this._pusher = new Pusher("fdb8dd9205323b89d3d9", {
       cluster: "ap3",
       encrypted: true
     });
   }

   getPusher(){
     return this._pusher;
   }
 }