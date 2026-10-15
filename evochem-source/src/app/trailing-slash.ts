import { DefaultUrlSerializer, UrlTree } from '@angular/router';

/**
 * Public URLs end with a slash (/products/alkaline-foam-cleaner-alkalox-foam/), as the handover's URL pattern
 * requires. Angular drops trailing slashes, so this serializer adds one to every link it renders (href and
 * pushState) and removes it again before route matching. Query strings and fragments are kept.
 */
export class TrailingSlashUrlSerializer extends DefaultUrlSerializer {

  override parse(url: string): UrlTree {
    return super.parse(url.replace(/(.)\/+(?=$|[?#])/, '$1'));
  }

  override serialize(tree: UrlTree): string {
    const url = super.serialize(tree);
    const cut = url.search(/[?#]/);
    const path = cut === -1 ? url : url.slice(0, cut);
    const rest = cut === -1 ? '' : url.slice(cut);
    return (path.endsWith('/') ? path : path + '/') + rest;
  }
}
