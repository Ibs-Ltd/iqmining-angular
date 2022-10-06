import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
declare var Tawk_API: any;

@Injectable({
  providedIn: 'root'
})
export class TawkService {

  private loaded: boolean;private renderer: Renderer2;

  constructor(
      private rendererFactory: RendererFactory2,
      @Inject(DOCUMENT) private _document: Document) {
          this.renderer = rendererFactory.createRenderer(null, null);
          this.load();
      }

  private load(){
      if(this.loaded)
          return;

      const s = this.renderer.createElement('script');
      s.type = 'text/javascript';
      s.text = `WIDGET_SCRIPT`;
      this.renderer.appendChild(this._document.body, s);
      Tawk_API.onLoad = this.loadedEvent.bind(this);
  }

  private loadedEvent(){
      this.loaded = true;
  }
}
