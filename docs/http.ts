import { ajax, type AjaxConfig, type AjaxError } from 'rxjs/ajax'
import { map, switchMap, from, catchError, type Observable } from 'rxjs'

// 定义插件接口
interface HttpPlugin {
  beforeRequest?: (config: AjaxConfig) => AjaxConfig | Promise<AjaxConfig>;
  afterResponse?: <T>(response: T) => T | Promise<T>;
  onError?: (error: AjaxError) => any | Promise<any | undefined>;
}

// 创建一个http请求的抽象类
abstract class HttpClient {
  protected plugins: HttpPlugin[] = [];

  // 添加插件方法
  use(plugin: HttpPlugin) {
    this.plugins.push(plugin);
  }

  abstract get<T>(url: string, param: any): Observable<T>;
  abstract post<T>(url: string, params: any): Observable<T>;
}

// 实现一个具体的http请求类
class AjaxHttpClient extends HttpClient {
  get<T>(url: string): Observable<T> {
    return this.request<T>({ url, method: 'GET' })
  }
  
  post<T>(url: string, data: any): Observable<T> {
    return this.request<T>({ url, method: 'POST', body: data })
  }

  request<T>(config: AjaxConfig): Observable<T> {
    return from(this.applyBeforeRequestPlugins(config)).pipe(
      switchMap(finalConfig => ajax<T>(finalConfig).pipe(
        map(res => res.response),
        catchError(error => this.applyErrorPlugins(error))
      )),
      switchMap(response => this.applyAfterResponsePlugins(response))
    );
  }

  private async applyBeforeRequestPlugins(config: AjaxConfig): Promise<AjaxConfig> {
    let currentConfig = config;
    for (const plugin of this.plugins) {
      if (plugin.beforeRequest) {
        currentConfig = await Promise.resolve(plugin.beforeRequest(currentConfig));
      }
    }
    return currentConfig;
  }

  private async applyAfterResponsePlugins<T>(response: T): Promise<T> {
    let currentResponse = response;
    for (const plugin of this.plugins) {
      if (plugin.afterResponse) {
        currentResponse = await Promise.resolve(plugin.afterResponse(currentResponse));
      }
    }
    return currentResponse;
  }

  private async applyErrorPlugins(error: AjaxError): Promise<any> {
    let currentError = error;
    
    for (const plugin of this.plugins) {
      if (plugin.onError) {
        try {
          const result = await Promise.resolve(plugin.onError(currentError));
          return result;
        } catch (e) {
          currentError = e as AjaxError;
        }
      }
    }
    
    throw currentError;
  }
}