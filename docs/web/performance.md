# 前端性能优化

![avatar](/images/img/性能优化.png)
## 指标

![avatar](/images/img/Snipaste_2021-09-23_20-56-50.png)

| 指标              |                    计算                    |
| ----------------- | :----------------------------------------: |
| 首屏加载时间(FP)  |      responseStart - navigationStart       |
| DNS 解析时间      |       domainLookupEnd - connectStart       |
| dom 渲染完成时间  | domContentLoadedEventEnd - navigationStart |
| 页面 onload 时间  |       loadEventEnd - navigationStart       |
| 重定向耗时        |        redirectEnd - redirectStart         |
| TCP 连接耗时      |         connectEnd - connectStart          |
| SSL 连接耗时      |     connectEnd - secureConnectionStart     |
| TTFB 网络请求耗时 |        responseStart - requestStart        |
| 数据传输耗时      |        responseEnd - responseStart         |
| 资源加载耗时      | loadEventStart - domContentLoadedEventEnd  |

## 网络

### CDN的工作原理