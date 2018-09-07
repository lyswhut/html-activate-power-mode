# html-activate-power-mode

fork from [activate-power-mode](https://github.com/disjukr/activate-power-mode)

用 `webpack` 重新构建，并在其基础上修改了一些配置

现在支持 `textarea`、`text`、`search`、`tel`、`url` 五种输入框的输入特效

[demo](http://stsky.cn/demo/htmlActivatePowerMode/)

## installation

- use npm install
```bash
# install
npm install html-activate-power-mode -S
```

```js
// import
import POWERMODE from 'html-activate-power-mode'
```

- script link
```html
<script src="./html-activate-power-mode.min.js"></script>
```

## use
```html
<script>
  document.body.addEventListener('input', POWERMODE);
</script>
```

## options
```js
POWERMODE.colorful = true   // open particle animation，default open
POWERMODE.shake = true   // open shake，default close
```

## LICENSE
MIT
