export class AppConfig {
    BaseUrl = '';
    
    constructor(data: AppConfig) {
        Object.assign(this, data);
    }
}
