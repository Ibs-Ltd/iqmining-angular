import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  updateHeader = new BehaviorSubject<any>(null);
  updateLang = new BehaviorSubject<any>(null);
  updateNetwork = new BehaviorSubject<any>(null);
  navigateToViewPort = new BehaviorSubject<any>(null);

  viewPort;

  constructor() { }

  getViewPort() {
    return this.viewPort;
  }

  setViewPort(d) {
    this.viewPort = d
  }

  updateHeaderData(d) {
    this.updateHeader.next(d)
  }

  updateNetworkData(d) {
    this.updateNetwork.next(d)
  }

  updateLangData(d) {
    this.updateLang.next(d)
  }

  viewPortRedirect(viewPort) {
    this.navigateToViewPort.next(viewPort)
  }

  getItem(key) {
    let data = localStorage.getItem(key)
    return data
  }

  setItem(key, data) {
    localStorage.setItem(key, data);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  clearStorage() {
    localStorage.clear();
  }

  removeItem(item) {
    localStorage.removeItem(item)
  }

  isString(data) {
    return typeof data
  }
}
