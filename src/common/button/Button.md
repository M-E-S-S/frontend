Primary buttons:

```js
<Button styles={{ size: 'sm', marginRight: 1 }}>Push Me</Button>
<Button styles={{ marginRight: 1 }}>Push Me</Button>
<Button styles={{ size: 'lg' }}>Push Me</Button>
```
Secondary buttons:

```js
<Button styles={{ size: 'sm', type: 'secondary', marginRight: 1 }}>Push Me</Button>
<Button styles={{ type: 'secondary', marginRight: 1 }}>Push Me</Button>
<Button styles={{ size: 'lg', type: 'secondary' }}>Push Me</Button>
```

Ghost
```js
<Button styles={{ marginRight: 1, ghost: true }}>Push Me</Button>
<Button styles={{ type: 'secondary', ghost: true }}>Push Me</Button>
```

Link
```js
<Button styles={{ marginRight: 1, link: true }}>Push Me</Button>
<Button styles={{ type: 'secondary', link: true }}>Push Me</Button>
```

Block
```js
<Button
  styles={{ marginBottom: 1, block: true }}
>
  Push Me
</Button>
<Button
  styles={{ type: 'secondary', marginBottom: 1, block: true }}
>
  Push Me
</Button>
<Button
  styles={{ marginRight: 1, marginBottom: 1, ghost: true, block: true }}
>
  Push Me
</Button>
<Button
  styles={{ marginRight: 1, link: true, block: true }}
>
  Push Me
</Button>
```

Disabled
```js
<Button
  styles={{ marginRight: 1 }}
  disabled
>
  Push Me
</Button>
<Button
  styles={{ marginRight: 1, type: 'secondary' }}
  disabled
>
  Push Me
</Button>
<Button
  styles={{ marginRight: 1, ghost: true }}
  disabled
>
  Push Me
</Button>
<Button
  styles={{ type: 'secondary', ghost: true }}
  disabled
>
  Push Me
</Button>
```
