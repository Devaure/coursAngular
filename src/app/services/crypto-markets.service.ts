import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptoMarketModel } from '../models/crypto-market.model';
const url_base ='https://api.coingecko.com/api/v3';
const api_url:string ='/coins/markets?vs_currency=eur&order=market_cap_desc&';

@Injectable({
  providedIn: 'root'
})
export class CryptoMarketsService {

  constructor(private http:HttpClient) { }

  getMarkets(quantity:number,  currency:string='usd'):Observable<CryptoMarketModel[]>{
    return this.http.get<CryptoMarketModel[]>(`${url_base}/coins/markets`, {
      params:{
        'per_page':quantity,
        'vs_currency': currency,
        'page':1
      }
    });
  }


}
