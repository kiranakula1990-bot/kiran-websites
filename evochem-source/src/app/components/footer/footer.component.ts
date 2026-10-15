import { Component } from '@angular/core';
import { GROUP_LABEL, groupPath, orderedGroups } from '../../content/catalogue';
import { INDUSTRIES, pagePath, SOLUTIONS } from '../../content/site-content';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
  readonly products = orderedGroups().map(g => ({ label: GROUP_LABEL[g.id], path: groupPath(g) }));
  readonly industries = INDUSTRIES.map(p => ({ label: p.name, path: pagePath(p) }));
  readonly solutions = SOLUTIONS.map(p => ({ label: p.name, path: pagePath(p) }));
}
