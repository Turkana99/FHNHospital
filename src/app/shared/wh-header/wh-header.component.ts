import { Component, HostListener } from '@angular/core';
import { LangService } from '../../core/services/lang.service';

@Component({
  selector: 'app-wh-header',
  templateUrl: './wh-header.component.html',
  styleUrl: './wh-header.component.scss',
})
export class WhHeaderComponent {
  whiteLogo = false;
  searchVisible: boolean = false;
  searchQuery: string = '';
  selectedItem: string = '';
  toggleSearch() {
    this.searchVisible = !this.searchVisible;
    if (!this.searchVisible) {
      this.searchQuery = ''; // Clear search query when hiding the input
    }
  }
  constructor(public langService: LangService) {}
  changeLanguage(language: string): void {
    this.langService.setLanguage(language);
    this.langService.status.subscribe((status) => {
      console.log("7", status);
      if (status === 5) {
        window.location.reload();
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.querySelector('.wh-header') as HTMLElement;
    if (window.pageYOffset > 100) {
      element.classList.add('navbar-inverse');
      this.whiteLogo = true;
    } else {
      element.classList.remove('navbar-inverse');
      this.whiteLogo = false;
    }
  }
  get Language() {
    return this.langService.getTranslate();
  }
  setSelectedItem(item: string): void {
    this.selectedItem = item;
  }
}
