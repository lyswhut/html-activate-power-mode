# html-activate-power-mode

fork from [activate-power-mode](https://github.com/disjukr/activate-power-mode)

用 `webpack` 重新构建，并在其基础上修改了一些配置

现在支持 `textarea`、`text`、`search`、`tel`、`url` 五种输入框的输入特效

[demo](http://stsky.cn/demo/htmlActivatePowerMode/)

## use

```html
<script src="./html-activate-power-mode.min.js"></script>
<script>
  document.body.addEventListener('input', POWERMODE);
</script>
```
## options

```js
POWERMODE.colorful = true   // 是否打开粒子动画，默认开启
POWERMODE.shake = true   // 是否打开抖动效果，默认关闭
```

## LICENSE
MIT
