# CSS

- [XSS](#盒模型)

- [CSRF](#伪类和微元素的区别)

- [float](#float)

- [devicePixelRatio](#devicePixelRatio)

## 盒模型

### 页面渲染时，dom 元素所采用的 布局模型。可通过 box-sizing 进行设置。根据计算宽高的区域可分为：

1. content-box (W3C 标准盒模型)
2. border-box (IE 盒模型)
3. padding-box
4. margin-box (浏览器未实现)

## 伪类和微元素的区别

#### 定义

1. 伪类
   伪类存在的意义是为了通过选择器，格式化 DOM 树以外的信息以及不能被常规 CSS 选择器获取到的信息。(伪类其实是弥补了 CSS 选择器的不足，用来更方便地获取信息。)
   ![avatar](/images/img/1575920682-5aa8738170650.png)
2. 伪元素
   伪元素可以创建一些文档语言无法创建的虚拟元素。比如：文档语言没有一种机制可以描述元素内容的第一个字母或第一行，但伪元素可以做到(::first-letter、::first-line)。同时，伪元素还可以创建源文档不存在的内容，比如使用 ::before 或 ::after。(伪元素本质上是创建了一个虚拟容器(元素)，我们可以在其中添加内容或样式。)

| Selector       |            Meaning             | CSS |
| -------------- | :----------------------------: | --: |
| ::first-letter |    选择指定元素的第一个单词    |   1 |
| ::first-line   |      选择指定元素的第一行      |   1 |
| ::after        |  在指定元素的内容前面插入内容  |   2 |
| ::before       |  在指定元素的内容后面插入内容  |   2 |
| ::selection    | 选择指定元素中被用户选中的内容 |   3 |

## float

### 为何要清除浮动

浮动的属性虽然方便使用，但是在使用这种属性时，也存在着一种弊端，那就是当子元素设置了 float 属性之后，且父元素的高度和宽度没有进行设置，而是由子元素支撑起来，则会导致父元素的高度塌陷(原本的 height 后来被置为 0)

```css
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
}
```

## devicePixelRatio

### 解决高清的适配

### 常见高清显示屏中位图被放大的比例

我们可以了解到 retina 显示屏 中图片被放大的倍数高达 2:1，而其实各种高清显示屏放大的倍数是不同的，有 1.3:1、1.5:1、2:1、3:1 ，目前最多的是 2:1，而 HTC Butterfly、Nexus 5、Samsung Galaxy S4、 Sony Xperia Z 这个几个系列的移动设备，图片被放大的倍数高达 3:1

### 区分普通显示屏和高清屏

通过 devicePixelRatio 的值，就可以区分普通显示屏和高清屏，当 devicePixelRatio 值等于 1 时（也就是最小值），那么它普通显示屏，当 devicePixelRatio 值大于 1(通常是 1.5、2.0)，那么它就是高清显示屏。

### 移动端如何调用高清背景图

为了更好的提升用户体验，节省移动端的流量，针对不同的显示屏，我们可以采取不用的方案，保证图片在不同显示屏幕下正常展现，这个方法跟设计原生 APP 中针对不同分辨率采用使用不同图片的原理相似~

通过判断 devicePixelRatio 的值来加载不同尺寸的图片

针对普通显示屏(devicePixelRatio = 1.0、1.3)，加载一张 1 倍的图片
针对高清显示屏(devicePixelRatio >= 1.5、2.0、3.0)，加载一张 2 倍大的图片
由于 3.0 的手机目前比较少，3.0 也加载一张 2 倍的图片是可以接受的。那么，通过上面的方案，我们不是需要设计 2 套图片，甚至是 3 套图片呢？

具体还是要看产品需求的用户群、维护成本、产品急需上线等来设计方案，例如用户群大都是高端手机来的，全部都采用加载一张 2 倍的图片也是可以接受的~

### SCSS 解决方案

```css
@mixin bg-image($url) {
  background-image: url($url+"@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    background-image: url($url+"@3x.png");
  }
}
```

## CSS3

![avatar](/images/img/css3.png)
## 动画

### transition: 过渡动画

- transition-property: 属性
- transition-duration: 间隔
- transition-timing-function: 曲线
- transition-delay: 延迟

  | transition-timing-function |                                      Meaning                                      |
  | -------------------------- | :-------------------------------------------------------------------------------: |
  | linear                     |        规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。         |
  | ease                       | 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。 |
  | ease-in                    |            规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。            |
  | ease-out                   |            规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。            |
  | ease-in-out                |        规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）         |
  | cubic-bezier(n,n,n,n)      |        在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。         |
