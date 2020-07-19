import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  displayURL = 'https://www.youtube.com/embed/f1fOA1I0zqI';
  safeUrl: any;

  constructor(private quoteService: QuoteService, private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.isLoading = true;
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.displayURL);
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
