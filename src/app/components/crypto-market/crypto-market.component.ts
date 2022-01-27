import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CryptoMarketModel } from 'src/app/models/crypto-market.model';
import { CryptoMarketsService } from 'src/app/services/crypto-markets.service';

@Component({
  selector: 'aw-crypto-market',
  templateUrl: './crypto-market.component.html',
  styleUrls: ['./crypto-market.component.scss']
})
export class CryptoMarketComponent implements OnInit {

  markets:CryptoMarketModel[] = [];
  @Input() quantity: number = 5;
  @Input() currency:string = 'usd';
  constructor( private cryptoService:CryptoMarketsService) { }

  ngOnInit(): void {
    this.fetchMarket();
    interval(10000).subscribe(()=> this.fetchMarket());
  }

  private fetchMarket(){
    this.cryptoService.getMarkets(this.quantity, this.currency).subscribe(
      (markets:CryptoMarketModel[]) => this.markets = markets
    );
  }
  
}
