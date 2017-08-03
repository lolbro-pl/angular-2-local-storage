import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { ILocalStorageEvent } from './local-storage-events.interface';
import { ILocalStorageServiceConfig } from './local-storage.config.interface';
import { CookieService } from 'angular2-cookie/core';
export declare class LocalStorageService {
    private _cookieService;
    isSupported: boolean;
    private fallbackToCookies;
    errors$: Observable<string>;
    removeItems$: Observable<ILocalStorageEvent>;
    setItems$: Observable<ILocalStorageEvent>;
    warnings$: Observable<string>;
    private notifyOptions;
    private prefix;
    private storageType;
    private webStorage;
    private errors;
    private removeItems;
    private setItems;
    private warnings;
    constructor(config: ILocalStorageServiceConfig, _cookieService: CookieService);
    add(key: string, value: any): boolean;
    clearAll(regularExpression?: string): boolean;
    deriveKey(key: string): string;
    get<T>(key: string): T;
    getStorageType(): string;
    keys(): Array<string>;
    length(): number;
    remove(...keys: Array<string>): boolean;
    set(key: string, value: any): boolean;
    private checkSupport();
    private setPrefix(prefix);
    private setStorageType(storageType);
    private setNotify(setItem, removeItem);
}
